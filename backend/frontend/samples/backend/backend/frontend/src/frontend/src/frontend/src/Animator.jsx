import React, { useEffect, useRef } from "react";
import * as THREE from "three";

function Animator({ path }) {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!path || path.length === 0) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.set(0, -120, 100);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(500, 500);
    mountRef.current.innerHTML = "";
    mountRef.current.appendChild(renderer.domElement);

    // Tool (red sphere)
    const tool = new THREE.Mesh(
      new THREE.SphereGeometry(3),
      new THREE.MeshBasicMaterial({ color: 0xff0000 })
    );
    scene.add(tool);

    let index = 0;

    function animate() {
      if (index < path.length) {
        tool.position.set(
          path[index].x,
          path[index].y,
          path[index].z
        );
        index++;
      }
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }

    animate();
  }, [path]);

  return (
    <div>
      <h3>Tool Animation</h3>
      <div ref={mountRef}></div>
    </div>
  );
}

export default Animator;

