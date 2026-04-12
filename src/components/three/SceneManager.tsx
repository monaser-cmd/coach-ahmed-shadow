import { useThree } from "@react-three/fiber";
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import AboutSector from "./sectors/AboutSector";
import TransformationsSector from "./sectors/TransformationsSector";
import PackagesSector from "./sectors/PackagesSector";
import ContactSector from "./sectors/ContactSector";

const SceneManager = () => {
  const { camera } = useThree();
  const location = useLocation();
  const scrollY = useRef(0);

  useEffect(() => {
    const handleScroll = (e: any) => {
      if (location.pathname === "/transformations") {
        scrollY.current = e.detail;
        camera.position.y = 0 + scrollY.current;
      }
    };

    window.addEventListener("camera-scroll-y", handleScroll);
    return () => window.removeEventListener("camera-scroll-y", handleScroll);
  }, [location.pathname, camera]);

  useEffect(() => {
    const targets: Record<string, { x: number, y: number, z: number }> = {
      "/": { x: 0, y: 0, z: 10 },
      "/about": { x: 10, y: 2, z: 5 },
      "/transformations": { x: -10, y: 0, z: 15 },
      "/packages": { x: 0, y: -10, z: 20 },
      "/contact": { x: 5, y: -5, z: 5 },
    };

    const target = targets[location.pathname] || targets["/"];
    
    if (location.pathname !== "/transformations") {
      scrollY.current = 0;
    }

    gsap.to(camera.position, {
      x: target.x,
      y: target.y + (location.pathname === "/transformations" ? scrollY.current : 0),
      z: target.z,
      duration: 1.5,
      ease: "power2.inOut"
    });
  }, [location.pathname, camera]);

  return (
    <>
      <AboutSector />
      <TransformationsSector />
      <PackagesSector />
      <ContactSector />
    </>
  );
};

export default SceneManager;
