# Projects

This `PROJECTS.md` collects every public repository from my GitHub profile into a single document, with a concise but developer-friendly description, the primary tech stack / topics, and the repo URL — ready to be used as a prompt for Copilot to update a portfolio website.

---

## autoass

**URL:** [https://github.com/Tanish-Desai/autoass](https://github.com/Tanish-Desai/autoass)

**Detailed description:**
`autoass` (SQL Assignment Generator) is a Python utility I built to automate the tedious parts of DBMS lab reports. It connects to an Oracle database (supports both network/thin and direct/thick modes), executes a configurable set of setup and assignment SQL queries, captures the outputs, and emits a cleanly formatted Markdown assignment report. The tool can render query outputs as "terminal-style" images, auto-detect and attempt Oracle client configurations, and attempts to clean up temporary tables after a run. It's intended for students or instructors who want reproducible, human-readable lab reports from real SQL runs.

**Tech / stack:** Python, oracledb, pandas, Pillow, Markdown output.

---

## portfolio

**URL:** [https://github.com/Tanish-Desai/portfolio](https://github.com/Tanish-Desai/portfolio)

**Detailed description:**
Personal developer portfolio implemented in TypeScript. This repository contains the source for my public-facing portfolio site — the place to showcase projects, links, and short case-studies. It’s structured as a modern web app (component-driven) so Copilot can extract project cards, descriptions, and link assets directly into the portfolio pages.

**Tech / stack:** TypeScript, modern web tooling (frontend framework / bundler; see repo for exact stack).

---

## uber-ride-optimiser

**URL:** [https://github.com/Tanish-Desai/uber-ride-optimiser](https://github.com/Tanish-Desai/uber-ride-optimiser)

**Detailed description:**
A Python project focused on ride/route optimization ideas and experiments. The repository contains scripts and experiments (algorithms, heuristics, or dataset experiments) related to optimizing multi-stop rides or pooling scenarios. Use the README and notebooks in the repo for precise data inputs and how the optimizer is configured.

**Tech / stack:** Python.

---

## Esp32LoadBal

**URL:** [https://github.com/Tanish-Desai/Esp32LoadBal](https://github.com/Tanish-Desai/Esp32LoadBal)

**Detailed description:**
Proof-of-concept reverse-proxy and load balancer implemented on an ESP32 microcontroller. The ESP32 acts as a layer‑7 gateway that accepts client connections and forwards traffic to multiple backend servers using a simple round‑robin strategy. To demonstrate the concept, the project pairs ESP32 firmware (C++/Arduino) with small Python TCP backends running on a laptop. It shows techniques for streaming with small buffers, inspecting payloads for connection termination, and dealing with practical gotchas like firewall/network profile issues during testing.

**Tech / stack:** ESP32 (C++ / Arduino / PlatformIO), Python (backend simulation), TCP sockets.

---

## VibeType

**URL:** [https://github.com/Tanish-Desai/VibeType](https://github.com/Tanish-Desai/VibeType)

**Detailed description:**
A lightweight browser typing-race game where words scroll toward a "dead line" and the player must type them before they cross it. `VibeType` is a small, playable web game intended to demonstrate frontend game loops, input handling, and simple UX for microgames.

**Tech / stack:** JavaScript, Vite, web game techniques (DOM/timing loops).

---

## ascii-cam

**URL:** [https://github.com/Tanish-Desai/ascii-cam](https://github.com/Tanish-Desai/ascii-cam)

**Detailed description:**
`ascii-cam` captures a live webcam feed, converts frames to grayscale, resizes them for terminal-friendly rendering, maps pixel brightness to ASCII characters, and streams the result as a real-time ASCII-art video in the terminal. It’s a compact demonstration of OpenCV frame capture, image preprocessing for low-resolution rendering, and character-based visualization.

**Tech / stack:** Python, OpenCV, terminal-based rendering.

---

## Load-Balancer-Algorithm-Simulator

**URL:** [https://github.com/Tanish-Desai/Load-Balancer-Algorithm-Simulator](https://github.com/Tanish-Desai/Load-Balancer-Algorithm-Simulator)

**Detailed description:**
A Python simulator that implements and visualizes a Q‑learning based load-balancing algorithm across multiple servers. The project is intended as an educational tool to compare classical strategies (e.g., round-robin) with learned policies under varying load patterns and reward functions. It includes simulation harnesses and visualization utilities to observe agent learning over episodes.

**Tech / stack:** Python, reinforcement-learning (Q-learning) concepts, simulation/visualization code.

---

## secure-rag-harness

**URL:** [https://github.com/Tanish-Desai/secure-rag-harness](https://github.com/Tanish-Desai/secure-rag-harness)

**Detailed description:**
A forked simulation repository intended to demonstrate pipeline (RAG) attacks and defenses for systems that stitch language models together with retrieval and downstream components. This repo contains harness code and examples to reproduce attack scenarios and test mitigation strategies — useful for experimentation and demonstrations in a hands-on security context.

**Tech / stack:** Python, Docker, LLM/RAG pipeline tooling, security-focused demos.

---

## Mutager

**URL:** [https://github.com/Tanish-Desai/Mutager](https://github.com/Tanish-Desai/Mutager)

**Detailed description:**
A small Godot project implementing a "mutation" game mechanic that applies temporary effects to a player (e.g., altered movement, visuals, or stat modifiers). It’s a compact showcase of Godot scripting and modular gameplay effect design.

**Tech / stack:** Godot (GDScript).

---

## flapper

**URL:** [https://github.com/Tanish-Desai/flapper](https://github.com/Tanish-Desai/flapper)

**Detailed description:**
The original Godot Flappy Bird clone: a concise 2D game demonstrating level design, player input (flap mechanics), collision detection, and score tracking. Great as an example project to show game development fundamentals.

**Tech / stack:** Godot (GDScript), 2D game development.

---

## Flapper-Unity

**URL:** [https://github.com/Tanish-Desai/Flapper-Unity](https://github.com/Tanish-Desai/Flapper-Unity)

**Detailed description:**
A Unity reimplementation of Flappy Bird demonstrating similar mechanics implemented with Unity’s C# scripting and engine components. Useful to compare engine workflows between Godot and Unity.

**Tech / stack:** Unity, C#.

---

## Dot-Knight

**URL:** [https://github.com/Tanish-Desai/Dot-Knight](https://github.com/Tanish-Desai/Dot-Knight)

**Detailed description:**
A small Godot-based metroidvania prototype featuring a knight character. The project explores platforming, enemy/level design and modular scene organization typical of small action-platformer prototypes.

**Tech / stack:** Godot (GDScript), 2D platformer mechanics.

---

## Meteor-Shower-mini

**URL:** [https://github.com/Tanish-Desai/Meteor-Shower-mini](https://github.com/Tanish-Desai/Meteor-Shower-mini)

**Detailed description:**
A minimal survival-style game — a compact take on the meteor-shower concept where the player tries to survive as long as possible. Useful as a quick playable demo showcasing spawn patterns and difficulty scaling.

**Tech / stack:** Godot / GDScript (MIT-licensed example project).

---

## battery-notifier

**URL:** [https://github.com/Tanish-Desai/battery-notifier](https://github.com/Tanish-Desai/battery-notifier)

**Detailed description:**
A tiny Python executable that monitors your laptop battery and sends an alert when it crosses a configured threshold. Ideal as a small automation utility to preserve battery life or prevent unexpected shutdowns.

**Tech / stack:** Python (simple CLI/executable).

---

## Auto-Socket

**URL:** [https://github.com/Tanish-Desai/Auto-Socket](https://github.com/Tanish-Desai/Auto-Socket)

**Detailed description:**
A WiFi-enabled home automation demonstration using an ESP32 DevKit board to control appliances through a relay. The project pairs ESP32 firmware (Arduino/PlatformIO) with Python scripts that use MediaPipe/OpenCV for gesture-based control. It was built as a mini-project to illustrate both the electromagnetic principles behind WiFi and practical IoT integrations.

**Tech / stack:** ESP32 (C++/Arduino), Python, MediaPipe, OpenCV, WiFi IoT.

---