import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Animator({ path }) {
  const mountRef = useRef(null);

  useEffect(() => {
    /* ---------------- SCENE SETUP ---------------- */
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf5f5f5);

    const camera = new THREE.PerspectiveCamera(60, 600 / 400, 0.1, 1000);
    camera.position.set(0, 6, 9);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(600, 400);
    mountRef.current.appendChild(renderer.domElement);

    /* ---------------- CNC BED ---------------- */
    scene.add(new THREE.GridHelper(10, 10));
    scene.add(new THREE.AxesHelper(4));

    /* ---------------- TOOLPATH ---------------- */
    const pathPoints = path.map(
      ([x, y, z]) => new THREE.Vector3(x, y, z)
    );

    const pathGeometry = new THREE.BufferGeometry().setFromPoints(pathPoints);
    const pathMaterial = new THREE.LineBasicMaterial({ color: 0x0000ff });
    const toolpath = new THREE.Line(pathGeometry, pathMaterial);
    scene.add(toolpath);

    /* ---------------- TOOL HEAD ---------------- */
    const tool = new THREE.Mesh(
      new THREE.SphereGeometry(0.15, 16, 16),
      new THREE.MeshBasicMaterial({ color: 0xff0000 })
    );
    scene.add(tool);

    /* ---------------- ANIMATION ---------------- */
    let segmentIndex = 0;
    let progress = 0;
    const speed = 0.01;

    function animate() {
      requestAnimationFrame(animate);

      if (segmentIndex >= pathPoints.length - 1) {
        segmentIndex = 0;
        progress = 0;
      }

      const start = pathPoints[segmentIndex];
      const end = pathPoints[segmentIndex + 1];

      progress += speed;
      tool.position.lerpVectors(start, end, progress);

      if (progress >= 1) {
        progress = 0;
        segmentIndex++;
      }

      renderer.render(scene, camera);
    }

    animate();

    /* ---------------- CLEANUP ---------------- */
    return () => {
      mountRef.current.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, [path]); // IMPORTANT: reruns safely when path changes

  return (
    <div
      ref={mountRef}
      style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
    />
  );
}
