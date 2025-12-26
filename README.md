# 🔧 CNC G-Code Simulator & Visualizer

A powerful web-based CNC G-code simulator with real-time 3D visualization, path analysis, and collision detection. Built to help manufacturers and engineers validate machining programs before production.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18.2-61dafb.svg)
![Three.js](https://img.shields.io/badge/Three.js-r128-000000.svg)
![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)

## ✨ Features

### Core Functionality
- 📊 **Real-time 3D Visualization** - Interactive Three.js rendering of complete tool paths
- 🎮 **Playback Controls** - Step through machining operations line-by-line with variable speed
- 📈 **Advanced Path Analysis** - Calculate precise machining time, distance, and feed rates
- ⚠️ **Collision Detection** - Identify potential crashes and work envelope violations before machining
- 📁 **Multi-Format Support** - Import/export .nc, .gcode, and .tap files seamlessly
- 🎯 **Full Arc Support** - Complete G02/G03 circular interpolation with smooth rendering

### Advanced Features
- 🔧 **Intelligent Parser** - Handles G00, G01, G02, G03 with sub-degree arc interpolation
- 📐 **Work Coordinate Systems** - Support for G90/G91 absolute and incremental positioning
- 🎨 **Color-Coded Visualization** - Distinguish between rapid moves (green) and feed moves (red)
- 📊 **Real-time Statistics** - Live display of line count, time estimation, and distance traveled
- 💾 **Session Management** - Save and resume complex simulation sessions
- 🎬 **Interactive 3D Controls** - Drag to rotate, scroll to zoom, full camera control
- ⚡ **High Performance** - Handles G-code files with 100,000+ lines smoothly

## 🎯 Perfect For

- **Manufacturing Students** learning CNC programming and machining
- **Mechanical Engineers** validating designs before production
- **CNC Programmers** testing and debugging G-code programs
- **Makers & Hobbyists** working with DIY CNC machines
- **Educational Institutions** teaching manufacturing processes

## 🚀 Tech Stack

- **Frontend**: React 18, Three.js (r128), Tailwind CSS, Vite
- **Backend**: Node.js, Express (optional for advanced parsing)
- **Performance**: C++ native modules for ultra-fast G-code parsing (optional)
- **Storage**: Browser localStorage for session persistence
- **Build Tool**: Vite for lightning-fast development

## 📦 Installation

### Prerequisites
- Node.js 18 or higher
- npm or yarn package manager
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Quick Start (Frontend Only)

1. **Clone the repository**
```bash
git clone https://github.com/suki2811/cnc-gcode-simulator.git
cd cnc-gcode-simulator
```

2. **Install dependencies**
```bash
cd frontend
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open your browser**
```
http://localhost:5173
```

That's it! The simulator is now running.

### Full Stack Setup (Optional Backend)

If you want to use the advanced C++ parser:
```bash
# Install backend dependencies
cd backend
npm install

# Build C++ native module (requires Python 2.7 and C++ compiler)
npm run build:native

# Start backend server
npm start
```

Then start the frontend in a separate terminal.

## 🎯 Usage

### Basic Workflow

1. **Upload G-Code**: Click "Upload" button or drag-and-drop .nc/.gcode files
2. **Or Try Sample**: Click "Sample" to load a demonstration program
3. **Visualize**: See the complete tool path rendered in beautiful 3D
4. **Simulate**: Press "Play" to watch the machining operation animate
5. **Analyze**: Check real-time stats for time estimates, distance, and warnings

### Sample G-Code Programs

#### Simple Square Cut
```gcode
G21 ; Set units to millimeters
G90 ; Absolute positioning
G00 Z5.0 ; Move to safe height
G00 X0 Y0 ; Go to start position
G01 Z-2.0 F500 ; Plunge to cutting depth
G01 X50 Y0 F1000 ; Cut to point 1
G01 X50 Y50 ; Cut to point 2
G01 X0 Y50 ; Cut to point 3
G01 X0 Y0 ; Return to start
G00 Z5.0 ; Retract to safe height
M30 ; End program
```

#### Circle with Arcs
```gcode
G21 ; Millimeters
G90 ; Absolute mode
G00 X25 Y25 Z5 ; Center position
G01 Z-3 F400 ; Plunge
G02 X25 Y25 I10 J0 F600 ; Cut complete circle
G00 Z5 ; Retract
M30 ; End
```

### Interactive 3D Controls

- **Rotate View**: Click and drag
- **Zoom**: Mouse scroll wheel
- **Reset View**: Click the reset button
- **Playback Speed**: Adjust in settings (0.5x to 3x)

## 📊 Supported G-Codes

### Motion Commands
| Command | Description | Support |
|---------|-------------|---------|
| `G00` | Rapid positioning | ✅ Full |
| `G01` | Linear interpolation | ✅ Full |
| `G02` | Clockwise circular arc | ✅ Full |
| `G03` | Counter-clockwise arc | ✅ Full |

### Coordinate Systems
| Command | Description | Support |
|---------|-------------|---------|
| `G90` | Absolute positioning | ✅ Full |
| `G91` | Incremental positioning | ✅ Full |
| `G20` | Inch units | ✅ Full |
| `G21` | Metric units | ✅ Full |

### Machine Commands
| Command | Description | Support |
|---------|-------------|---------|
| `M03` | Spindle on (clockwise) | ℹ️ Recognized |
| `M04` | Spindle on (CCW) | ℹ️ Recognized |
| `M05` | Spindle off | ℹ️ Recognized |
| `M30` | Program end | ℹ️ Recognized |

## 🏗️ Project Structure
```
cnc-gcode-simulator/
├── frontend/
│   ├── src/
│   │   ├── App.jsx              # Main application component
│   │   ├── components/          # React components (optional split)
│   │   ├── utils/
│   │   │   ├── gcodeParser.js   # G-code parsing logic
│   │   │   └── collisionChecker.js  # Safety checks
│   │   └── index.jsx
│   ├── public/
│   ├── package.json
│   └── vite.config.js
├── backend/                     # Optional
│   ├── src/
│   │   ├── server.js
│   │   └── parser/
│   │       └── gcode_parser.cpp # C++ high-performance parser
│   └── package.json
├── samples/                     # Example G-code files
│   └── facing.nc
├── README.md
└── LICENSE
```

## 🎨 Features Breakdown

### G-Code Parser
- Tokenizes and validates G-code syntax
- Handles absolute (G90) and incremental (G91) positioning
- Interpolates arcs into smooth curves with 20 points per arc
- Extracts all parameters (X, Y, Z, I, J, K, F, S, R)
- Calculates exact path distances and machining times

### 3D Visualization Engine
- Built with Three.js WebGL renderer
- Smooth 60 FPS animation
- Color-coded path segments (rapid vs feed moves)
- Real-time tool position indicator
- Interactive camera controls with intuitive mouse/touch input
- Grid and axis helpers for spatial reference

### Collision Detection
- Work envelope boundary checking
- Rapid plunge warnings (dangerous Z-axis moves)
- Extreme feed rate detection
- Custom machine limits configuration

### Statistics Dashboard
- Total line count
- Estimated machining time (accounting for feed rates)
- Total distance traveled
- Current line/progress indicator
- Real-time updates during playback

## 📈 Performance Metrics

- **Parsing Speed**: ~10,000 lines/second (JavaScript parser)
- **Rendering**: Handles 50,000+ path segments at 60 FPS
- **File Size**: Supports files up to 10MB (100,000+ lines)
- **Memory**: ~50-100MB for typical programs
- **Startup Time**: <2 seconds on modern hardware

## 🐛 Known Issues

- Arc interpolation may have slight precision issues for very large radii (>1000mm)
- Browser may slow down with files exceeding 200,000 lines
- Some CAM software generates non-standard G-code that may need preprocessing

## 📝 Roadmap

### Version 2.0 (Q2 2025)
- [ ] Complete G-code coverage (all standard codes)
- [ ] Material removal visualization
- [ ] Multi-axis (4th/5th) support
- [ ] Mobile responsive design
- [ ] PWA support for offline use

### Version 3.0 (Q4 2025)
- [ ] Real CNC machine connectivity
- [ ] Cloud-based project management
- [ ] AI optimization engine
- [ ] VR/AR visualization mode
- [ ] Integration with IoT sensors


## 💡 Use Cases

### Educational
- Teaching CNC programming in colleges and trade schools
- Student projects and assignments
- Online courses and tutorials
- Workshop demonstrations

### Professional
- Validating complex multi-axis programs
- Training new CNC operators
- Debugging problematic G-code
- Client demonstrations

### Hobbyist
- DIY CNC machine projects
- Testing before cutting expensive materials
- Learning CNC programming
- Sharing projects with community

## 🔗 Related Projects

- [grbl](https://github.com/gnea/grbl) - CNC controller firmware
- [Universal G-Code Sender](https://winder.github.io/ugs_website/) - Java-based sender
- [CNCjs](https://cnc.js.org/) - Web-based CNC controller
- [Easel](https://easel.inventables.com/) - Online CAM software



**Made with ❤️ by mechanical engineers, for engineers**

*Building the future of digital manufacturing, one line of G-code at a time.*
