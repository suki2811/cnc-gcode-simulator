import React, { useEffect, useState } from "react";
import ToolpathViewer from "./ToolpathViewer";
import Animator from "./Animator";

function App() {
  const [toolpath, setToolpath] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/simulate", {
      method: "POST",
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(data => setToolpath(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>CNC G-Code Simulator & Visualizer</h1>
      <p>Visualizing CNC toolpath in 3D</p>

      <ToolpathViewer path={toolpath} />
      <Animator path={toolpath} />
    </div>
  );
}

export default App;

