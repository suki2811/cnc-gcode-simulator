import React, { useEffect, useRef } from "react";
import * as THREE from "three";

function ToolpathViewer({ path }) {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!path || path.length === 0) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);

    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.set(0, -120, 100);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(500, 500);
    mountRef.current.innerHTML = "";
    mountRef.current.appendChild(renderer.domElement);

    // Axes helper
    const axes = new THREE.AxesHelper(50);
    scene.add(axes);

    // Toolpath line
    const points = path.map(p => new THREE.Vector3(p.x, p.y, p.z));
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({ color: 0x00aa00 });
    const line = new THREE.Line(geometry, material);
    scene.add(line);

    renderer.render(scene, camera);
  }, [path]);

  return (
    <div>
      <h3>Toolpath Visualization</h3>
      <div ref={mountRef}></div>
    </div>
  );
}

export default ToolpathViewer;

