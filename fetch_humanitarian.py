#!/usr/bin/env python3
"""Fetch a compact, humanitarian-only ReliefWeb reports feed for the landing page."""
import json
import os
from datetime import datetime, timezone
from pathlib import Path

import requests

APPNAME = os.getenv("RELIEFWEB_APPNAME", "").strip()
ENDPOINT = "https://api.reliefweb.int/v2/reports"
OUTPUT = Path("humanitarian.json")


def main():
    if not APPNAME:
        raise SystemExit("Missing RELIEFWEB_APPNAME repository secret. Request an approved ReliefWeb API appname and add it to GitHub Actions secrets.")

    payload = {
        "preset": "latest",
        "profile": "list",
        "limit": 12,
        "sort": ["date.created:desc"],
        "fields": {"include": ["date.created", "primary_country.name", "source.name", "format.name"]},
    }
    response = requests.post(
        ENDPOINT + "?appname=" + requests.utils.quote(APPNAME, safe=""),
        json=payload,
        headers={"User-Agent": "HorizonScanning-Humanitarian-Feed/1.0", "Accept": "application/json"},
        timeout=30,
    )
    response.raise_for_status()
    data = response.json()
    items = []
    for record in data.get("data", []):
        fields = record.get("fields") or {}
        url = fields.get("url") or f"https://reliefweb.int/node/{record.get('id')}"
        if not isinstance(url, str) or not url.startswith("https://reliefweb.int/"):
            continue
        countries = fields.get("primary_country") or []
        sources = fields.get("source") or []
        formats = fields.get("format") or []
        if isinstance(countries, dict):
            countries = [countries]
        if isinstance(sources, dict):
            sources = [sources]
        if isinstance(formats, dict):
            formats = [formats]
        created = fields.get("date", {}).get("created") if isinstance(fields.get("date"), dict) else ""
        items.append({
            "id": record.get("id"),
            "title": fields.get("title") or "Humanitarian update",
            "url": url,
            "date": created or "",
            "country": ", ".join(x.get("name", "") for x in countries if isinstance(x, dict) and x.get("name")) or "Global response",
            "source": ", ".join(x.get("name", "") for x in sources if isinstance(x, dict) and x.get("name")) or "ReliefWeb",
            "format": ", ".join(x.get("name", "") for x in formats if isinstance(x, dict) and x.get("name")),
        })

    output = {
        "source": "ReliefWeb API v2 / reports",
        "updated_at": datetime.now(timezone.utc).isoformat(),
        "count": len(items),
        "items": items,
    }
    OUTPUT.write_text(json.dumps(output, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Wrote {len(items)} humanitarian reports to {OUTPUT}")


if __name__ == "__main__":
    main()
