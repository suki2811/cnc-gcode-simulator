# CNC G-Code Simulator & Visualizer

A CNC machining simulation tool that parses G-code programs and visualizes toolpaths in 3D.  
The project helps validate CNC programs before actual machining to reduce collisions, tool damage, and machining errors.

---

## 🚀 Features

- Upload and parse CNC G-code files
- 3D visualization of CNC toolpaths
- Step-by-step tool motion animation
- Machining time estimation (logic included)
- Basic collision detection logic
- Sample G-code programs included
- Modular full-stack architecture

---

## 🛠 Tech Stack

- **Frontend:** React, Three.js
- **Backend:** Node.js
- **Core Engine:** C++ (G-code parser)
- **Visualization:** WebGL via Three.js

---

## 🧠 Project Motivation

CNC machines directly execute G-code programs, and any error can cause tool crashes or material damage.  
This simulator visually verifies tool motion before execution, similar to industrial CNC verification software.

---

## 📁 Project Structure
cnc-gcode-simulator/
├── backend/
│ ├── gcode_parser.cpp
│ └── server.js
├── frontend/
│ └── src/
│ ├── App.jsx
│ ├── ToolpathViewer.jsx
│ └── Animator.jsx
├── samples/
│ └── facing.nc
└── README.md
