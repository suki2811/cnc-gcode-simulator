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
