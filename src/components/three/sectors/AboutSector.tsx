import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Float } from "@react-three/drei";
import * as THREE from "three";

const AboutSector = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.z += 0.002;
    }
  });

  return (
    <group position={[10, 2, 0]}>
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <Sphere args={[3, 32, 32]} ref={meshRef}>
          <MeshDistortMaterial
            color="#ff0000"
            speed={2}
            distort={0.4}
            wireframe
            emissive="#ff0000"
            emissiveIntensity={2}
          />
        </Sphere>
      </Float>
      
      {/* Decorative Blueprint Rings */}
      <group rotation={[Math.PI / 4, 0, 0]}>
        <mesh>
          <torusGeometry args={[4, 0.02, 16, 100]} />
          <meshBasicMaterial color="#ff0000" transparent opacity={0.3} />
        </mesh>
      </group>
      <group rotation={[-Math.PI / 4, Math.PI / 4, 0]}>
        <mesh>
          <torusGeometry args={[4.5, 0.02, 16, 100]} />
          <meshBasicMaterial color="#ff0000" transparent opacity={0.2} />
        </mesh>
      </group>
    </group>
  );
};

export default AboutSector;
