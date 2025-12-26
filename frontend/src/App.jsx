import Animator from "./Animator";
import ToolpathViewer from "./ToolpathViewer";

export default function App() {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>CNC G-Code Simulator</h2>
      <Animator />
      <ToolpathViewer />
    </div>
  );
}
<p style={{ textAlign: "center", color: "#555" }}>
  Simulated CNC toolpath execution using Three.js (blue path) and a moving tool head (red).
</p>
