#!/usr/bin/env python3
"""
Foodways Timeline & Trade Heuristic Builder

This script combines human-curated Foodways data and AI-discovered ICH-Radar
culinary data, then builds a heuristic timeline / trade-pathway dataset.

External web discovery is intentionally delegated to GitHub Actions / an external
TinyFish step. API keys must be supplied through GitHub Secrets and are never
stored in this repository.
"""

from __future__ import annotations
import json
import os
import re
import urllib.request
from pathlib import Path
from datetime import datetime, timezone

ICH_URL = "https://raw.githubusercontent.com/AnggaConni/ICH-Radar/main/data.json"
FOODWAYS_URL = "https://anggaconni.github.io/Foodways/ai_culinary.json"

BASE = Path(__file__).resolve().parent
OUT = BASE / "foodways_timeline.json"

def fetch_json(url: str):
    req = urllib.request.Request(url, headers={"User-Agent":"HorizonScanning-Foodways-Timeline/1.0"})
    with urllib.request.urlopen(req, timeout=45) as r:
        return json.loads(r.read().decode("utf-8"))

def year_from_text(text):
    if not text:
        return None
    years = [int(y) for y in re.findall(r"(?<!\d)(?:1[0-9]{3}|20[0-2][0-9]|[0-9]{3})\b", str(text))]
    if not years:
        return None
    # Ignore very early 3-digit incidental numbers unless clearly date-like.
    years = [y for y in years if y >= 1000]
    return min(years) if years else None

def location(item):
    loc = item.get("location") or {}
    return {
        "country": loc.get("country") or item.get("country") or "",
        "provinces": loc.get("provinces") if isinstance(loc.get("provinces"), list) else [],
        "lat": loc.get("lat"),
        "lng": loc.get("lng"),
    }

def main():
    ich = fetch_json(ICH_URL)
    inventory = ich.get("inventory", []) if isinstance(ich, dict) else ich
    foods = fetch_json(FOODWAYS_URL) if os.getenv("FOODWAYS_ENABLED", "1") == "1" else []

    # Keep only culinary ICH Radar records with valid coordinates.
    ai = []
    for x in inventory:
        cats = x.get("categories") or []
        if not isinstance(cats, list):
            cats = [cats]
        if not any("culinary traditions" in str(c).lower() for c in cats):
            continue
        loc = location(x)
        if loc["lat"] is None or loc["lng"] is None:
            continue
        analysis = x.get("resume_analisa") or {}
        process = x.get("resume_tata_cara") or {}
        shared = x.get("shared_heritage_detection") or {}
        text = " ".join([
            str(x.get("element_name","")),
            str(analysis.get("description","")),
            str(analysis.get("cultural_significance","")),
            str(process),
            str(shared),
        ])
        ai.append({
            "source": "ICH-Radar",
            "source_id": x.get("id"),
            "name": x.get("element_name",""),
            "location": loc,
            "first_possible_year": year_from_text(text),
            "description": analysis.get("description",""),
            "shared_heritage": shared,
            "source_urls": x.get("source_urls") if isinstance(x.get("source_urls"), list) else [],
        })

    # Human/curated records are treated as the reference layer.
    human = []
    for x in foods if isinstance(foods, list) else []:
        human.append({
            "source": "Foodways",
            "source_id": x.get("id") or x.get("source_id"),
            "name": x.get("food_name") or x.get("element_name") or "",
            "country": x.get("country") or "",
            "lat": x.get("lat"),
            "lng": x.get("lng"),
            "origin_food_name": x.get("origin_food_name"),
            "origin_country": x.get("origin_country"),
            "origin_lat": x.get("origin_lat"),
            "origin_lng": x.get("origin_lng"),
            "research_links": x.get("research_links"),
            "description": x.get("description",""),
        })

    # Link AI ↔ human records heuristically by normalized food name / country.
    norm = lambda s: re.sub(r"[^a-z0-9]+"," ",str(s).lower()).strip()
    human_index = {}
    for h in human:
        human_index[(norm(h["name"]), norm(h["country"]))] = h

    records=[]
    for a in ai:
        h=human_index.get((norm(a["name"]),norm(a["location"]["country"])))
        evidence = []
        if h:
            evidence.append("human-curated Foodways record matches name + country")
        if a["shared_heritage"].get("is_shared"):
            evidence.append("ICH-Radar shared-heritage signal")
        source_text = (a["description"] + " " + json.dumps(a["shared_heritage"], ensure_ascii=False)).lower()
        route_candidates = []
        for label, kws in {
            "Indian Ocean": ["indian ocean","monsoon","maritime","port","spice"],
            "Silk Roads": ["silk road","silk roads","caravan","central asia"],
            "Spice Routes": ["spice","clove","nutmeg","pepper","mace","cinnamon"],
            "Austronesian Exchange": ["austronesian","island southeast asia","seafaring"],
            "Mediterranean": ["mediterranean","levant","rome","greek","olive","wine"],
            "Trans-Saharan": ["sahara","sahel","caravan","salt","gold"],
            "Incense Route": ["incense","frankincense","myrrh","arabia"],
            "Tea–Horse Road": ["tea horse","tibet","yunnan","himalaya"],
        }.items():
            if any(k in source_text for k in kws):
                route_candidates.append(label)

        records.append({
            "food_name": a["name"],
            "country": a["location"]["country"],
            "lat": a["location"]["lat"],
            "lng": a["location"]["lng"],
            "first_possible_year": a["first_possible_year"],
            "trade_route_hypotheses": route_candidates,
            "human_match": h is not None,
            "evidence": evidence,
            "heuristic_note": "AI-assisted hypothesis; not human-verified.",
            "sources": a["source_urls"],
            "shared_heritage": a["shared_heritage"],
        })

    output={
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "method": "heuristic AI-assisted timeline + trade pathway analysis",
        "disclaimer": (
            "Heuristic only. Dates and trade-route links are hypotheses assembled from "
            "AI-derived data and human-curated records. No human curator has yet verified "
            "the timeline or causal trade relationship for every record."
        ),
        "records": records,
    }
    OUT.write_text(json.dumps(output, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Wrote {len(records)} heuristic Foodways timeline records to {OUT}")

if __name__ == "__main__":
    main()
