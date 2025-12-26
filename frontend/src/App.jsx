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
    <div>
      <h2 style={{ textAlign: "center" }}>CNC G-Code Simulator</h2>

      <p style={{ textAlign: "center", color: "#555" }}>
        Select a predefined CNC toolpath and visualize tool motion.
      </p>

      {/* Path selector */}
      <div style={{ textAlign: "center", marginBottom: "10px" }}>
        <label>
          Toolpath:&nbsp;
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

      <Animator path={TOOLPATHS[selectedPath]} />
    </div>
  );
}
