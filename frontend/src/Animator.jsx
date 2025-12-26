import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Animator() {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);

    // Camera
    const camera = new THREE.PerspectiveCamera(75, 600 / 400, 0.1, 1000);
    camera.position.set(0, 5, 8);
    camera.lookAt(0, 0, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(600, 400);
    mountRef.current.appendChild(renderer.domElement);

    // Grid (like CNC bed)
    const grid = new THREE.GridHelper(10, 10);
    scene.add(grid);

    // --- TOOLPATH POINTS (THIS IS THE CNC MAGIC) ---
    const pathPoints = [
  new THREE.Vector3(-3, 0, -3),
  new THREE.Vector3(3, 0, -3),
  new THREE.Vector3(3, 0, -2),
  new THREE.Vector3(-3, 0, -2),
  new THREE.Vector3(-3, 0, -1),
  new THREE.Vector3(3, 0, -1),
];

    // Draw toolpath line
    const geometry = new THREE.BufferGeometry().setFromPoints(pathPoints);
    const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
    const toolpathLine = new THREE.Line(geometry, material);
    scene.add(toolpathLine);

    // Tool (small sphere)
    const toolGeometry = new THREE.SphereGeometry(0.15, 16, 16);
    const toolMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const tool = new THREE.Mesh(toolGeometry, toolMaterial);
    scene.add(tool);

    let index = 0;
    let progress = 0;

    function animate() {
      requestAnimationFrame(animate);

      // Move tool between points
      const start = pathPoints[index];
      const end = pathPoints[index + 1];

      if (end) {
        progress += 0.01;
        tool.position.lerpVectors(start, end, progress);

        if (progress >= 1) {
          progress = 0;
          index++;
          if (index >= pathPoints.length - 1) {
            index = 0; // loop motion
          }
        }
      }

      renderer.render(scene, camera);
    }

    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ display: "flex", justifyContent: "center" }} />;
}

const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);
