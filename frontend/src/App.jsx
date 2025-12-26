import { useState } from "react";
import Animator from "./Animator.jsx";

// Predefined safe CNC paths
const TOOLPATHS = {
  square: [
    [-3, 0, -3],
    [3, 0, -3],
    [3, 0, 3],
    [-3, 0, 3],
    [-3, 0, -3],
  ],
  zigzag: [
    [-3, 0, -3],
    [3, 0, -3],
    [3, 0, -2],
    [-3, 0, -2],
    [-3, 0, -1],
    [3, 0, -1],
  ],
  line: [
    [-3, 0, 0],
    [3, 0, 0],
  ],
};

export default function App() {
  const [selectedPath, setSelectedPath] = useState("zigzag");

 return (
  <div className="app-container">
    <h2 className="title">CNC Toolpath Visualizer</h2>

    <p className="subtitle">
      Interactive simulation of CNC-style tool motion using predefined paths
    </p>

    <div className="controls">
      <label>
        Toolpath:
        <select
          value={selectedPath}
          onChange={(e) => setSelectedPath(e.target.value)}
        >
          <option value="zigzag">Zig-Zag Facing</option>
          <option value="square">Square Pocket</option>
          <option value="line">Straight Cut</option>
        </select>
      </label>
    </div>

    <div className="canvas-wrapper">
      <Animator path={TOOLPATHS[selectedPath]} />
    </div>

    <p className="footer-note">
      Blue line = toolpath · Red dot = tool head
    </p>
  </div>
);

}
