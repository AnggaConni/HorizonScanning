# Horizon Scanning Tools

Before establishing a baseline for any major project, strategic teams usually conduct Horizon Scanning.

This foresight method is widely used by:

United Nations Development Programme – through its Strategic Foresight and Innovation work https://www.undp.org/publications/foresight-manual

United Nations Office for Disaster Risk Reduction – Global Risk and Horizon Scanning reports https://www.undrr.org/gar

UK Government Office for Science – Foresight Programme & Horizon Scanning Toolkit  https://www.gov.uk/government/publications/futures-toolkit-for-policy-makers-and-analysts

OECD – Strategic Foresight and Anticipatory Governance https://www.oecd.org/en/publications/building-anticipatory-capacity-with-strategic-foresight-in-government_d7eb0bb6-en.html

European Commission – Strategic Foresight Reports https://commission.europa.eu/strategy-and-policy/strategic-foresight_en


The Problem
In practice, horizon scanning is still done manually:

Sticky notes, Spreadsheets, Static PowerPoints, Lengthy workshops

Mapping signals into matrices takes time. Extracting insights takes even longer. Bias creeps in easily.

And when AI discussion happens, it is often detached from structured foresight frameworks. So I built something to bridge that gap.

Horizon Scan AI is a web-based Strategic Foresight platform (Single-Page Application) designed to assist analysts, strategic planners, and innovators in detecting signals of change before they become mainstream trends.

https://anggaconni.github.io/HorizonScanning/

This application fuses interactive matrix visualization with Artificial Intelligence (Google Gemini AI) to transform scattered data points into actionable strategic insights.

Minimize image
Edit image
Delete image

Data Nodes
Minimize image
Edit image
Delete image

AI Result
Key Features
Dynamic Scanning Matrix: An interactive visual grid that serves as your strategic canvas. Users can map signals on customizable axes (e.g., Impact vs. Probability, Urgency vs. Importance) and freely drag-and-drop nodes to adjust their position in real-time, allowing for flexible scenario planning.

AI-Powered Analysis: Seamlessly integrated with Google's Gemini API to transform raw data into intelligence. The system automatically scans your matrix to identify clusters, detect hidden patterns, and generate comprehensive strategic reports with actionable recommendations and executive summaries.

Signal Classification: A robust categorization system that organizes trends into five distinct strategic stages: Emerging, Watchlist, Escalating, Critical, and Structural. Each status is color-coded, providing immediate visual cues to help stakeholders prioritize where to focus their attention.

Portable Project File: Designed for flexibility and privacy. Your entire project state—including configuration, nodes, and API settings—can be saved as a lightweight, standalone JSON file. This makes sharing analysis and backing up data simple, without requiring complex database setups.

Tutorial Mode: An immersive, built-in interactive guide that walks new users through the horizon scanning methodology. It explains the significance of each quadrant, how to interpret signal statuses, and how to effectively utilize the platform's features from day one.

# Quick Start Guide
Open the App: Simply open the link (Click this URL) in any modern browser like Chrome, Edge, Firefox, or Safari. The application runs entirely in your browser with no server installation required.

Initial Setup: Upon launching, select a Matrix Template that aligns with your analysis goal (e.g., Impact vs. Probability for risk, Novelty vs. Maturity for innovation). You can explicitly rename the X and Y axes to match your specific methodology before clicking "Start New".

Input Data: Populate your radar by clicking any empty space on the grid to add a node instantly, or use the "+ Manual Add" button for more control.

AI Analysis: To activate intelligence features, enter your Gemini API Key in the top navigation bar. (see below instructions)

Connect Nodes: To visualize dependencies or causal relationships (e.g., how one risk triggers another), click on a node to edit it, then select related signals in the "Connect Nodes" list (or use Ctrl+Click if supported). This draws dashed lines between them to reveal systemic patterns.

Save & Load: For saving Click the Floppy Disk icon to download your entire workspace as a lightweight .json file. This preserves your nodes, configuration, and analysis state for future sessions to import. To load, please Click the Folder icon to open and import a previously saved .json file to instantly restore your session.

Report: Click the Report button to generate a clean, print-ready view (PDF) that combines your visual matrix with the detailed AI strategic insights.

Minimize image
Edit image
Delete image

# Spread Overlap
💡 Pro Tip: Managing Cluttered Grids
The Problem: In a detailed scan, multiple signals often share the exact same or very similar coordinates (e.g., several risks with Impact: 9 and Probability: 9). This causes nodes to stack on top of each other, making them difficult to click or distinguish.

The Solution: Spread Overlap Located in the top-left corner of the grid, check the "Spread Overlap" box.

How it Works (Jittering): This feature applies a "visual jitter"—slightly scattering the clustered dots so you can see and interact with individual nodes that would otherwise be hidden.

Important Note: This is purely visual. It does not change the underlying X/Y data values of your signals. Unchecking the box returns them to their precise coordinates.


# Horizon Scanning Masterclass: The Complete Guide 🎓 
Welcome to the comprehensive guide on Strategic Foresight. This section covers everything from basic definitions to advanced frameworks used in this tool.

Module 1: The Core Philosophy
Horizon Scanning is not about predicting the future. Instead, it is the systematic detection of early warning signs—often called "weak signals"—to help organizations prepare for multiple possible futures.

"The future is not a destination, but a direction."

The Shift: Move from "fire-fighting" (reacting to disruption) to "fire-proofing" (anticipating disruption).

The Goal: It is better to be vaguely right than precisely wrong. We scan to identify threats and opportunities before they become obvious to everyone else.

Key Concept: Trends start as outliers (the edges of your matrix) before moving to the center (mainstream). Your job is to catch them at the edge.

Module 2: The Anatomy of a Signal
In this tool, every "Node" represents a signal. Understanding the type of signal is crucial:

Minimize image
Edit image
Delete image

Add a caption (optional)
Module 3: The STEEP Framework
To ensure your scanning is holistic and doesn't suffer from "tunnel vision" (e.g., focusing only on Technology), use the STEEP framework when adding new nodes. This ensures you cover the full spectrum of the external environment.

S - Social: Values, demographics, lifestyle shifts, education trends, and cultural changes.

T - Technological: Innovation, R&D, digital adoption, automation, and cybersecurity.

E - Economic: Markets, trade, currency fluctuations, inflation, and labor shifts.

E - Environmental: Climate change, resource scarcity, biodiversity, and sustainability regulations.

P - Political: Government policy, geopolitical stability, trade regulations, and elections.

Module 4: The 6 Analytical Matrices (Included Templates)
Your application includes 6 built-in templates. Choosing the right one determines the strategic output of your session. Here is how to use them effectively:

1. Impact vs. Probability (Risk Matrix)

Purpose: Traditional Risk Management.

Top-Right (High/High): Critical Risks. These are dangers that are likely to happen and will hurt. Mitigation plans are mandatory immediately.

Top-Left (High Imp/Low Prob): Black Swans. Events that are unlikely but catastrophic. Requires insurance or emergency contingency drills.

2. Impact vs. Uncertainty (Foresight Matrix)

Purpose: Scenario Planning (The most strategic view).

Top-Right (High/High): Scenario Candidates. These are critical uncertainties. Because the outcome is unsure but the impact is high, these define your different "Future Scenarios."

Top-Left (High Imp/Low Unc): Planning Realities. These are "inevitable futures" (e.g., aging population). Since uncertainty is low, do not plan for them, plan around them.

3. Urgency vs. Importance (Priority Matrix)

Purpose: Action Planning & Eisenhower Matrix.

Top-Right: Do First. Tasks that are both urgent and important.

Bottom-Right: Schedule. Important but not urgent.

Top-Left: Delegate. Urgent but less important strategically.

4. Influence vs. Interest (Stakeholder Mapping)

Purpose: Managing actors in an ecosystem.

Top-Right: Key Players. Stakeholders with high power and high interest. Manage closely and engage daily.

Bottom-Right: Keep Informed. High interest but low power. They can be allies; keep them updated.

5. Novelty vs. Maturity (Innovation Radar)

Purpose: Technology tracking and R&D portfolio management.

Top-Left (High Novelty/Low Maturity): Bleeding Edge/R&D. High risk, potential high reward. "Moonshot" projects.

Bottom-Right: Commodity. Standard technologies that are mature and common. Focus on efficiency here.

6. Time Horizon vs. Impact

Purpose: Roadmap alignment.

X-Axis: Timing. How soon will this hit? (Short / Medium / Long Term).

Y-Axis: Magnitude. How hard will it hit? Use this to map out when to allocate resources.

Module 5: Avoiding Cognitive Biases
A scanning tool is only as good as the analyst using it. When performing a scan or interpreting the AI analysis, be aware of these mental traps:

Confirmation Bias: The tendency to only input signals that confirm what you already believe, while ignoring contradictory data. Fix: Deliberately search for one "counter-signal" for every major trend.

Availability Heuristic: Overestimating the importance of information that is readily available (e.g., breaking news or recent disasters) while ignoring slow-moving trends. Fix: Use the STEEP framework to force yourself to look at boring, slow data.

Groupthink: Agreeing with the consensus to avoid conflict during a workshop. Fix: Use the "Spread" feature in the app to visualize where opinions diverge before discussing.


# 🔑 How to Get Your Google Gemini API Key
To unlock the "AI Analysis" features, you need a free API key from Google.

Visit Google AI Studio: Go to: https://aistudio.google.com/

Login: Sign in with your Google Account (Gmail).

Get Key: Click on the blue "Get API key" button located on the top left sidebar.

Create: Click "Create API key" (select "Create API key in new project" if prompted).

Copy: Copy the generated key string (it usually starts with AIza...).

Activate: Return to the Horizon Scan AI app. Paste your key into the input field labeled "Gemini API Key" in the top navigation bar. The system will automatically save it, and a green checkmark (✓) will appear to confirm it's ready.

Security Note: Your API Key is stored locally in your browser (Local Storage). It is never sent to our servers, as this application runs 100% Client-Side.

Minimize image
Edit image
Delete image

get your own API, as Gemini API was limited, so use your own token

#🛠️ System Requirements
Browser: Modern browsers (Chrome, Edge, Firefox, Brave).

Internet: Required only for calling Gemini AI. The tool works offline for manual editing.

Storage: No installation required.

Ready to Scan the Future? 🚀
