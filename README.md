# Horizon Scanning — Strategic Foresight & Intelligence Workspace

<p align="center">
  <a href="https://horizon-scanning.org/"><img src="https://img.shields.io/badge/Website-horizon--scanning.org-0d9488?style=for-the-badge" alt="Live website"></a>
  <a href="https://horizon-scanning.org/tool.html"><img src="https://img.shields.io/badge/Open-Horizon%20Scan%20AI-2563eb?style=for-the-badge" alt="Open Horizon Scan AI"></a>
  <img src="https://img.shields.io/badge/Architecture-Static%20Web%20Apps-64748b?style=for-the-badge" alt="Static web applications">
  <img src="https://img.shields.io/badge/AI%20assistance-API%20key%20required%20for%20AI-f59e0b?style=for-the-badge" alt="AI assistance">
</p>

**Horizon Scanning** is a browser-first collection of interactive tools for strategic foresight, emerging-signal analysis, evidence exploration, geospatial intelligence, environmental risk awareness, cultural heritage, and policy-oriented work.

The repository has grown beyond a single horizon-scanning matrix. It now contains a set of related but distinct web applications, data visualisations, document tools, and GitHub Actions workflows. The pages are mostly standalone HTML/CSS/JavaScript applications, with a small number of Python and Node.js scripts that update data or generate published content.

> **Core principle:** use data and AI to widen the field of attention—not to replace source verification, contextual understanding, or human judgement.

## Live applications

| Application | What it does | Entry point |
|---|---|---|
| **Horizon Scan AI** | Build and classify signals, position them on configurable scanning matrices, record evidence and confidence, connect signals with typed relationships, combine AI and human analysis, and create a structured foresight report. | [Open tool](https://horizon-scanning.org/tool.html) |
| **3D Horizon Scanning Radar** | Explore a standalone three-dimensional visual representation of a signal landscape. | [Open 3D radar](https://horizon-scanning.org/3d-visual/) |
| **Omni-Radar** | Bring together published signal datasets from several specialist radar projects in a feed/map-oriented interface. Its configured sources include ICH Radar, GSI Radar, Nexus Radar, Artifact Radar, and EDU-Innovation. | [Open Omni-Radar](https://horizon-scanning.org/omni.html) |
| **Social Transformation Intelligence (MOST)** | Explore social-transformation signals and policy-relevant themes with a map-led interface and evidence from connected radar datasets. | [Open MOST](https://horizon-scanning.org/MOST.html) |
| **Smart Citation Assistant / Edu-Scite** | Ask research questions, review retrieved evidence, and work with connected radar records and selected external data sources. Outputs should be independently checked against original sources. | [Open assistant](https://horizon-scanning.org/ask-omni.html) |
| **HazeGuard EWS** | Explore a wildfire-smoke and haze monitoring dashboard combining hotspot, air-quality, weather, exposure, and health-risk context. It depends on external data services and should be treated as decision support, not an official emergency alert. | [Open HazeGuard](https://horizon-scanning.org/hazard.html) |
| **Village Climate Monitoring / Anticipatory Action** | Support community-level climate-risk exploration, forecasts, vulnerability assessment, planting context, and anticipatory-action workflows. | [Open climate tool](https://horizon-scanning.org/iklim.html) |
| **Mapping Hub** | Navigate geospatial and knowledge-mapping applications covering cultural pathways, foodways, biodiversity, and scripts/linguistic heritage. | [Open Mapping Hub](https://horizon-scanning.org/map.html) |
| **Integrated Document Hub** | Browse documents published in the repository. | [Open document hub](https://horizon-scanning.org/pitch.html) |
| **Cover Letter Maker Pro** | Draft and format cover letters in a browser-based document editor. | [Open cover-letter tool](https://horizon-scanning.org/CL.html) |
| **Proposal Builder Pro AI** | Build structured project proposals, frameworks, budgets, and exportable proposal files with AI-assisted drafting. | [Open proposal builder](https://horizon-scanning.org/proposal.html) |
| **Strategic report viewer** | Render a report exported from Horizon Scan AI. | [Open report viewer](https://horizon-scanning.org/report.html) |
| **Noken concept map** | View a phase-based concept map for Noken co-curricular learning. | [Open concept map](https://horizon-scanning.org/mindmap.html) |
| **Trade Algorithm Simulator** | Explore a standalone trade-algorithm simulation interface. | [Open simulator](https://horizon-scanning.org/tsp.html) |
| **Terroir calculators** | Explore illustrative relationships between environmental parameters and the characteristics of coffee, fruit, cacao, honey, tea, and tobacco growing contexts. These are exploratory models, not validated agronomic predictions. | [Coffee](https://horizon-scanning.org/terroir/kopi.html) · [Fruit](https://horizon-scanning.org/terroir/buah.html) · [Cacao](https://horizon-scanning.org/terroir/kakao.html) · [Honey](https://horizon-scanning.org/terroir/madu.html) · [Tea](https://horizon-scanning.org/terroir/teh.html) · [Tobacco](https://horizon-scanning.org/terroir/tembakau.html) |

The repository also contains additional supporting pages and data assets. The table above is a practical guide to the major entry points, not a guarantee that every external API, data source, or third-party service is always available.

## 1. Horizon Scan AI: signal-to-analysis workflow

The main foresight workspace supports a structured workflow:

**Signal → Evidence → Confidence → Time horizon → Relationships → AI/human analysis → Report**

### Signal mapping
- Position signals on an interactive two-axis matrix.
- Configure axes for analytical frames such as impact/probability, impact/uncertainty, urgency/importance, influence/interest, novelty/maturity, and time horizon/impact.
- Classify records using signal states such as Emerging, Watchlist, Escalating, Critical, and Structural.
- Use the optional third dimension as an analytical representation of behavioural or systemic magnitude.

### Evidence and relationships
- Record rationale, evidence type, source URL, evidence date, confidence, and time horizon.
- Link signals with typed relationships such as causes, enables, amplifies, constrains, depends on, competes with, or responds to.
- Treat relationships as analyst-entered hypotheses or interpretations, not automatic proof of causality.

### AI and human analysis
- Use AI-assisted analysis to explore patterns and possible implications.
- Add and maintain human-authored interpretation alongside AI output.
- Treat generated analysis as a prompt for investigation, not an authoritative finding.

### Reporting and portability
- Export a project as JSON for reuse.
- Generate a print-oriented strategic report with the signal landscape, analysis, time-horizon distribution, signal registry, evidence details, and relationship register.
- Use the report viewer to render report data for review and print/PDF workflows.

## 2. Data-driven radar and thematic intelligence

### Omni-Radar
Omni-Radar is a cross-project discovery interface. Its source configuration references public `data.json` endpoints for:

- [ICH Radar](https://anggaconni.github.io/ICH-Radar/)
- [GSI Radar](https://anggaconni.github.io/GSI-Radar/)
- [Nexus Radar](https://anggaconni.github.io/Nexus-Radar/)
- [Artifact Radar](https://anggaconni.github.io/artifact-radar/)
- [EDU-Innovation](https://github.com/AnggaConni/EDU-Innovation)

Successful aggregation depends on those endpoints remaining reachable and returning compatible data. Source records should be traced back to their originating projects before being used in decisions or publications.

### Social Transformation Intelligence (MOST)
The MOST page provides a map-led way to inspect emerging developments and policy-relevant themes. It connects signal discovery with questions about patterns, evidence gaps, communities, and possible policy translation. It is an analytical interface; it does not establish that a signal is representative or that a proposed intervention will work.

### Smart Citation Assistant / Edu-Scite
The assistant combines question-driven research workflows with connected radar records and selected external datasets/services. Availability and coverage vary by source. Verify important claims in the original publication or authoritative dataset; a generated citation or summary is not, by itself, evidence that a source supports the claim.

## 3. Environmental monitoring and anticipatory action

### HazeGuard EWS
HazeGuard brings together wildfire hotspots, smoke/air-quality context, weather and transport variables, exposure considerations, and respiratory-risk information in a monitoring interface. The repository includes a NASA FIRMS data-fetch script that writes a compact hotspot dataset to `hazard.json`.

The displayed results are constrained by upstream data latency, API availability, geographic coverage, and the assumptions used in the dashboard. Do not use this prototype as a substitute for official meteorological, air-quality, public-health, or emergency-management alerts.

### Village climate monitoring
The climate page supports the exploration of forecasts, satellite-derived context, climate anomalies, local vulnerability, planting conditions, and anticipatory-action triggers. Recommendations need local validation and should be interpreted alongside official forecasts, field observation, and local knowledge.

The repository also includes a NOAA Oceanic Niño Index (ONI) updater that stores time-stamped ENSO observations in `enso.json`.

## 4. Mapping, culture, education, and knowledge tools

The Mapping Hub links to specialist browser-based tools, including:

- **Foodways: Shared Heritage** — explore culinary heritage records, geographic distribution, and associated cultural context.
- **Global Biodiversity & Biosphere** — inspect mapped biodiversity and biosphere-reserve information with analytical and export-oriented views.
- **Global Script Explorer** — explore writing systems and their geographic/cultural contexts.
- **Cultural pathways and related map views** — browse linked cultural and geographic information.
- **Noken concept map** — navigate a phase-based learning concept map.

The `terroir/` directory contains exploratory calculators for coffee, tropical fruit, cacao, honey, tea, and tobacco. Their outputs depend on user-selected inputs and model assumptions; they should not be interpreted as laboratory results, validated forecasts, or professional growing advice.

## Repository structure

The repository is a collection of static pages and supporting files rather than a single bundled application.

```text
HorizonScanning/
├── index.html                    # Main project landing page
├── tool.html                     # Horizon Scan AI workspace
├── report.html                   # Foresight report viewer
├── 3d-visual/
│   └── index.html                # Standalone 3D radar
├── omni.html                     # Cross-project radar aggregation
├── MOST.html                     # Social transformation intelligence map
├── ask-omni.html                 # Smart Citation Assistant / Edu-Scite
├── hazard.html                   # HazeGuard early-warning dashboard
├── iklim.html                    # Village climate / anticipatory action
├── map.html                      # Mapping Hub
├── maps/                         # Foodways, biodiversity, script explorer
├── terroir/                      # Crop/product terroir calculators
├── blog/
│   └── data.json                 # Source data for generated blog pages
├── scripts/
│   └── generate-blog.js          # Blog and article page generator
├── fetch_firms.py                # NASA FIRMS hotspot data collector
├── hazard.json                   # Generated hotspot data
├── fetch_enso.py                 # NOAA ONI/ENSO data collector
├── enso.json                     # ENSO history
├── .github/workflows/
│   ├── build.yml                 # Generate and publish blog pages
│   ├── fetch.yml                 # Scheduled NASA FIRMS data update
│   └── update_enso.yml           # Scheduled ENSO data update
├── LICENSE
├── LICENSE-GPL-3.0-LEGACY.md
└── README.md
```

Other standalone pages include document, cover-letter, proposal, concept-map, and simulation tools. A file's presence in the repository does not by itself guarantee that a connected service or integration is currently operational.

## Automated workflows

GitHub Actions automates selected maintenance tasks:

| Workflow | Trigger | Result |
|---|---|---|
| `build.yml` — Build Blog | On relevant changes to `blog/data.json` or `scripts/generate-blog.js`, and manual dispatch | Runs the Node.js generator, then commits generated `blog.html`, article pages, and sitemap changes. |
| `fetch.yml` — Fetch NASA FIRMS Data | Scheduled every six hours and manual dispatch | Runs `fetch_firms.py` and commits updated `hazard.json`. Requires the `FIRMS_MAP_KEY` repository secret. |
| `update_enso.yml` — Update ENSO Data | Daily schedule and manual dispatch | Runs `fetch_enso.py` and commits updated `enso.json`. |

Scheduled workflows can fail when upstream services are unavailable, credentials are missing/invalid, API quotas are reached, or GitHub Actions permissions/configuration change. Check the repository's **Actions** tab for the latest run status before assuming data has been refreshed.

## Technology and architecture

The project favours an accessible, browser-first approach and lightweight deployment.

- **Frontend:** HTML5, CSS, vanilla JavaScript; several pages use Tailwind CSS and other CDN-hosted libraries.
- **Visualisation and mapping:** Chart.js, Leaflet, ArcGIS Maps SDK for JavaScript, Three.js, and canvas/SVG-based graphics depending on the module.
- **AI integrations:** Google Gemini is used by selected analysis and writing workflows; some pages also contain provider-specific integrations. AI features require suitable credentials and depend on provider APIs.
- **Data exchange:** JSON files and public `data.json` endpoints; selected workflows produce generated HTML, JSON, and sitemap outputs.
- **Automation:** GitHub Actions with Python and Node.js scripts.
- **Hosting:** static-site delivery through the project's configured domain/GitHub Pages workflow.

Not every page uses the same stack. Most interfaces load third-party libraries and remote services at runtime, so an internet connection is normally required for full functionality. API limits, CORS rules, browser security, external library availability, and upstream data changes may affect results.

## Getting started

### Use the hosted tools
1. Visit the [project website](https://horizon-scanning.org/).
2. Choose a tool from the relevant landing page or use one of the direct links above.
3. For Horizon Scan AI, start with a tutorial/sample workflow or add a small set of signals.
4. Add evidence and source links, classify uncertainty and time horizon, then review relationships.
5. Run AI-assisted analysis only when appropriate, inspect the result, and add your own interpretation.
6. Export project data and/or prepare a report for further review.

### Run locally
Because the tools are primarily static web applications, you can clone the repository and serve it with any basic local HTTP server:

```bash
git clone https://github.com/AnggaConni/HorizonScanning.git
cd HorizonScanning
python -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

Some browser APIs, cross-origin requests, or remote integrations may behave differently when a page is opened directly from disk or served locally. A local server does not remove the need for internet access or provider credentials.

### Configure optional integrations
- **Gemini-enabled pages:** obtain an API key through [Google AI Studio](https://aistudio.google.com/app/apikey) and enter it only into the relevant interface that requests it.
- **NASA FIRMS updater:** create a repository secret named `FIRMS_MAP_KEY` for the GitHub Actions workflow.
- **Other external sources:** follow the setup instructions shown by the individual page or upstream provider.

Do not commit API keys, tokens, passwords, or other secrets to the repository. Browser-stored API keys are not protected by a server-side secret vault; use them only with a clear understanding of the risk, quota, and provider terms.

## Responsible use and limitations

This repository contains prototypes, analytical aids, educational tools, and data integrations—not a single certified decision system.

- **Verify sources.** Follow each important signal to the underlying source and check dates, context, and whether the cited material supports the claim.
- **Keep uncertainty visible.** Matrix positions, labels, relationship types, confidence ratings, and time horizons are analytical judgements unless a page explicitly documents a validated measurement method.
- **Review AI output.** Models can invent details, misread context, produce unsupported citations, or overstate confidence.
- **Validate warnings locally.** Environmental and public-health dashboards can be delayed or incomplete. Use official alerts and qualified advice for operational decisions.
- **Check model assumptions.** Terroir calculators and other simulators are exploratory unless independently validated.
- **Protect sensitive data.** Avoid entering confidential, personal, restricted, or otherwise sensitive records into public web pages or third-party AI services unless you are authorised and understand how the data is handled.
- **Check availability.** External APIs and third-party libraries can change, go offline, impose quotas, or block browser requests.

Horizon scanning is most useful when it expands what people notice and discuss—not when it creates a false sense of certainty.

## Licensing

The repository's current `LICENSE` file states that **Horizon Scan AI version 2.0 and later** is covered by the **PolyForm Noncommercial License 1.0.0**. Earlier versions released before 2.0 are documented as having been distributed under GPL-3.0; the repository retains the historic license text in [LICENSE-GPL-3.0-LEGACY.md](./LICENSE-GPL-3.0-LEGACY.md).

Please read the actual [LICENSE](./LICENSE) and [PolyForm Noncommercial terms](https://polyformproject.org/licenses/noncommercial/1.0.0) before reusing or redistributing code. The repository includes multiple tools and third-party dependencies; applicable rights can differ by file, historical release, asset, and dependency. Do not assume that every bundled third-party component has the same license.

## Author

**Angga Conni Saputra**  
Strategic Foresight · Policy Innovation · Digital Systems

- Website: [anggaconni.github.io](https://anggaconni.github.io/)
- Project: [horizon-scanning.org](https://horizon-scanning.org/)
- Repository: [github.com/AnggaConni/HorizonScanning](https://github.com/AnggaConni/HorizonScanning)

---

If you use these tools for research or workshops, document where evidence came from, preserve alternative interpretations, and keep a clear distinction between observed facts, hypotheses, model-generated suggestions, and decisions made by people.
