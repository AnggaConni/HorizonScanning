# 🌌 Horizon Scan AI

### From signal mapping to a foresight analysis workspace

<p align="center">
  <a href="https://horizon-scanning.org/">
    <img src="https://img.shields.io/badge/🚀%20Live%20Demo-Open-blue?style=for-the-badge">
  </a>
  <img src="https://img.shields.io/badge/status-active-success?style=for-the-badge">
  <img src="https://img.shields.io/badge/AI-Gemini-orange?style=for-the-badge">
  <img src="https://img.shields.io/badge/platform-web-lightgrey?style=for-the-badge">
  <img src="https://img.shields.io/github/license/AnggaConni/HorizonScanning?style=for-the-badge">
</p>

---

> **The future is not something you predict.  
> It is something you prepare for.**

Horizon Scan AI is an experimental, browser-based **strategic foresight and horizon scanning workspace** for exploring weak signals, emerging developments, systemic relationships, uncertainty, and possible implications.

It is designed primarily as a **learning, experimentation, and expert-support tool** rather than a replacement for professional foresight judgement.

---

## 🎯 What this project is for

Horizon scanning often involves a mixture of:

- weak signals and early observations
- emerging trends
- risks and opportunities
- evidence and sources
- expert judgement
- system relationships
- alternative time horizons
- pattern interpretation

Horizon Scan AI brings those elements into one visual workspace.

The central idea is:

**Signal → Evidence → Confidence → Time Horizon → Relationships → Analysis → Human Judgement → Strategic Report**

AI can help surface patterns and structure analysis, while the analyst remains responsible for interpretation, validation, context, and decisions.

---

## ✨ What you can do

### 📊 Interactive scanning matrix

Map signals on configurable two-axis matrices such as:

- Impact vs Probability
- Impact vs Uncertainty
- Urgency vs Importance
- Influence vs Interest
- Novelty vs Maturity
- Time Horizon vs Impact

Signals can be dragged directly on the canvas.

The X and Y axes are configurable, so the tool can also be used for custom analytical frameworks.

---

### 🧭 Evidence layer

A signal is more useful when its basis can be traced.

Each node can capture:

- Evidence type
- Evidence / rationale
- Source URL
- Evidence date
- Confidence
- Time horizon

Evidence types include:

- Direct observation
- Official / institutional source
- Research / academic
- Media / reporting
- Expert judgement
- Secondary / synthesized
- Hypothesis / early signal

This makes it easier to distinguish a documented development from an analytical interpretation or an early weak signal.

---

### 🔗 Typed relationships

Signals are not treated as isolated dots.

Connections can be classified as:

- **Causes**
- **Enables**
- **Amplifies**
- **Constrains**
- **Depends on**
- **Competes with**
- **Responds to**

This enables basic systems-thinking views such as:

**Signal A → amplifies → Signal B**

Relationship types are passed into AI analysis so the model can reason about the recorded structure without automatically assuming every connection is causal.

---

### 🤖 + 🧠 AI & Human Analysis Workspace

The analysis layer supports both machine-generated and human-authored interpretation.

You can:

- Run AI analysis
- Add manual analysis
- Keep AI and human analysis side-by-side
- Delete individual analysis entries
- Delete the complete analysis workspace
- Save both types of analysis into the project JSON

This is intentionally designed around **human-in-the-loop foresight**.

> AI may generate patterns.  
> Humans challenge, contextualize, refine, validate, and extend them.

---

### 🧪 Tutorial / Learning Mode

The built-in tutorial includes a structured sample dataset with:

- weak signals
- critical signals
- structural trends
- evidence metadata
- confidence levels
- time horizons
- typed relationships
- sample AI analysis
- sample human interpretation

The purpose is not to provide a forecast. It demonstrates how the workspace can be used.

---

### 📄 Professional A4 / PDF reporting

The Report function generates a print-ready strategic foresight report containing:

1. Signal landscape snapshot
2. Matrix visualization
3. AI & Human Analysis
4. Time Horizon distribution
5. Complete Signal Registry
6. Individual Signal Dossiers
7. Evidence and source information
8. Confidence levels
9. Relationship Register
10. Method & interpretation notes

The report is designed to work as an **A4 print/PDF deliverable**.

---

## 🧠 Signal lifecycle

The project currently uses five signal classifications:

| Status | Meaning |
|---|---|
| 🟢 Emerging | Newly observed or developing signal |
| 🟡 Watchlist | Requires continued monitoring |
| 🟠 Escalating | Increasing in relevance, intensity, or momentum |
| 🔴 Critical | High-priority signal requiring closer attention |
| 🔵 Structural | Longer-term structural development or trend |

These are analytical classifications, not automatic predictions.

---

## 🧩 Z-axis: Behavioral / systemic magnitude

The optional Z-axis provides a third analytical dimension.

In the current implementation it represents **behavioral / systemic magnitude** and can be used to explore how strongly a signal may affect:

- norms
- trust
- public behaviour
- institutional dynamics
- cross-sector interactions

The Z-axis should be interpreted as an analytical construct, not a universally standardized measurement.

---

## 🧭 Time horizons

Signals can be classified across five horizons:

| Horizon | Working definition |
|---|---|
| Now | 0–12 months |
| Near-term | 1–2 years |
| Medium-term | 3–5 years |
| Long-term | 5–10 years |
| Long-range | 10+ years |

These horizons are framing devices for analysis, not guaranteed dates.

---

## 🔐 API key & privacy model

The application is designed as a **client-side web application**.

When using Gemini:

- the API key is entered by the user
- the key is stored locally in the browser for convenience
- the application sends requests directly from the browser to the configured API endpoint
- project data can be exported as JSON
- new project exports do **not** include the Gemini API key

If the user clears the API-key field, the locally stored key is removed.

### Data-only reporting

A report can be generated without a new AI analysis when the user explicitly confirms a **data-only report**.

This allows the reporting workflow to remain useful even when no API key is available.

---

## ⚡ Quick workflow

1. Open the application
2. Choose a matrix template
3. Add or import signals
4. Record evidence and confidence
5. Assign a time horizon
6. Connect related signals
7. Run AI analysis when desired
8. Add human interpretation
9. Review uncertainty and relationships
10. Export the professional report

---

## 🧠 Example analytical workflow

A signal might evolve through:

**Observation**

An emerging development is detected.

↓

**Evidence**

What supports the observation?

↓

**Confidence**

How strong is the evidence base?

↓

**Time Horizon**

When might this matter?

↓

**Relationship**

Does it enable, constrain, amplify, or respond to another signal?

↓

**AI Analysis**

What patterns or clusters become visible?

↓

**Human Judgement**

What context, caveats, implications, or alternative interpretations matter?

↓

**Strategic Report**

What should decision-makers know and continue monitoring?

---

## 🧠 Using the tool responsibly

Horizon scanning is vulnerable to several cognitive and methodological pitfalls.

Consider checking for:

### Confirmation bias
Look for counter-signals and disconfirming evidence.

### Availability bias
Do not let highly visible events dominate the scan simply because they are memorable.

### Groupthink
Capture divergent interpretations and minority signals.

### False precision
A matrix score is an analytical representation, not automatically a statistical estimate.

### AI overconfidence
AI-generated analysis can be useful, but it can also misinterpret evidence, relationships, or context.

### Source inflation
A source URL does not automatically make a claim reliable. Validate the underlying evidence.

---

## 🧪 Spread Overlap

When several signals occupy almost the same location:

1. Enable **Spread**
2. The visual representation separates overlapping nodes
3. The underlying coordinates remain unchanged

This affects visualization only.

---

## 🔑 Gemini setup

1. Open the application.
2. Obtain a Gemini API key from Google AI Studio.
3. Enter the key in the application.
4. Run AI Analysis.

The tool should not be treated as a secure server-side secret-management system. API usage and quota remain subject to the provider's terms and the user's account.

---

## 🛠️ Technology

The project intentionally uses a lightweight, browser-first architecture:

- HTML5
- Vanilla JavaScript
- Tailwind CSS
- Chart.js
- Marked
- DOMPurify
- Font Awesome
- Google Gemini API
- Browser Local Storage
- Client-side JSON export
- Canvas-based visualization

The application can run without a custom backend.

---

## 📁 Project structure

Key files include:

~~~text
HorizonScanning/
├── index.html
├── tool.html
├── 3d-visual/
│   └── index.html
├── docs/
├── thumbnail.png
├── LICENSE
└── README.md
~~~

### Main application

**tool.html**

The main Horizon Scan AI workspace.

### 3D visualization

**3d-visual/index.html**

Standalone visualization for exploring the signal landscape in three dimensions.

---

## 🌍 Potential use cases

The tool can support exploratory work in areas such as:

| Use case | Example |
|---|---|
| Strategic foresight | Explore weak signals and emerging change |
| Risk scanning | Map potential risks and escalation patterns |
| Policy innovation | Structure evidence and policy-relevant signals |
| Technology radar | Track emerging technologies |
| Systems thinking | Map interactions between signals |
| Scenario exploration | Identify uncertainty and possible future pathways |
| Training | Demonstrate horizon scanning methods |
| Expert workshops | Capture structured group judgement |

---

## 🏛️ Methodological inspiration

The project draws inspiration from practices associated with:

- Strategic foresight
- Horizon scanning
- Systems thinking
- Scenario planning
- Emerging signal analysis
- Anticipatory governance
- Evidence-informed policy work

It is conceptually compatible with approaches used across public-sector foresight and innovation communities.

This project is **not an official product of any of those institutions**.

---

## 📌 Important limitations

Horizon Scan AI does not automatically make a signal:

- true
- probable
- important
- causal
- actionable

The quality of the output depends heavily on:

- signal selection
- evidence quality
- classification decisions
- relationships entered by the analyst
- interpretation of uncertainty
- quality of human judgement

AI output should therefore be treated as **analytical assistance**, not authoritative advice.

---

## 📜 Licensing

This repository currently uses the **GNU General Public License v3.0 (GPL-3.0)**.

Under GPL-3.0, users may use, study, modify, and redistribute the software, subject to the conditions of the license. GPL is a free-software license and does **not** restrict use to non-commercial purposes.

See the full license in [LICENSE](./LICENSE).

### Important distinction

If the intended policy is specifically:

> "Free to copy, modify, and use for learning and expert work, but commercial use requires permission,"

then GPL-3.0 is **not** the right license for that policy.

Creative Commons advises against using its core CC licenses for software because software-specific licenses are better suited to source-code distribution. See the Creative Commons guidance on software licensing: https://creativecommons.org/faq/#can-i-apply-a-cc-license-to-software

A future release could instead use a different software licensing strategy, but the exact wording should be selected carefully because a non-commercial restriction is not an OSI-approved open-source model.

For now, this repository remains GPL-3.0.

---

## 👤 Author

**Angga Conni Saputra**

Strategic Foresight • Policy Innovation • Digital Systems

🔗 https://anggaconni.github.io/

---

## 🚀 Live

### Web application
https://horizon-scanning.org/

### Horizon Scan AI tool
https://horizon-scanning.org/tool.html

### GitHub
https://github.com/AnggaConni/HorizonScanning

---

## ⭐ Support & contribution

If this project helps your learning, research, workshop, or foresight practice:

⭐ Star the repository  
🧪 Experiment with the tool  
🧠 Challenge the assumptions  
🔎 Improve the evidence  
💡 Share useful ideas

The most valuable improvement is not always another feature.

Sometimes it is a better question.

---

<p align="center">
  <a href="https://horizon-scanning.org/tool.html">
    <img src="https://img.shields.io/badge/Start%20Horizon%20Scanning-Open%20Tool-0d9488?style=for-the-badge">
  </a>
</p>
