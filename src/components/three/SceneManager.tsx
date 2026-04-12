import { useThree } from "@react-three/fiber";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import gsap from "gsap";

const SceneManager = () => {
  const { camera } = useThree();
  const location = useLocation();

  useEffect(() => {
    const targets: Record<string, { x: number, y: number, z: number }> = {
      "/": { x: 0, y: 0, z: 10 },
      "/about": { x: 10, y: 2, z: 5 },
      "/transformations": { x: -10, y: 0, z: 15 },
      "/packages": { x: 0, y: -10, z: 20 },
      "/contact": { x: 5, y: -5, z: 5 },
    };

    const target = targets[location.pathname] || targets["/"];
    gsap.to(camera.position, {
      x: target.x,
      y: target.y,
      z: target.z,
      duration: 1.5,
      ease: "power2.inOut"
    });
  }, [location.pathname, camera]);

  return null;
};

export default SceneManager;
