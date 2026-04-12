import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Text, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

const ContactSector = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <group position={[5, -5, 0]}>
      <Float speed={3} rotationIntensity={0.5} floatIntensity={1}>
        {/* Holographic "Terminal" Plane */}
        <mesh ref={meshRef}>
          <planeGeometry args={[6, 4]} />
          <MeshDistortMaterial
            color="#ff0000"
            speed={2}
            distort={0.1}
            wireframe
            transparent
            opacity={0.3}
            emissive="#ff0000"
            emissiveIntensity={2}
          />
        </mesh>

        {/* Floating Data Streams (Static for now) */}
        <group position={[-2.5, 1.5, 0.1]}>
          <Text fontSize={0.15} color="#ff0000" anchorX="left" font="/fonts/SpaceGrotesk-Regular.ttf">
            {">"} ESTABLISHING SECURE CONNECTION...
          </Text>
        </group>
        <group position={[-2.5, 1.1, 0.1]}>
          <Text fontSize={0.15} color="#ffffff" anchorX="left" opacity={0.6} font="/fonts/SpaceGrotesk-Regular.ttf">
            {">"} SHADOW_REALM_v2.0.4
          </Text>
        </group>
        <group position={[-2.5, 0.7, 0.1]}>
          <Text fontSize={0.15} color="#ff0000" anchorX="left" font="/fonts/SpaceGrotesk-Regular.ttf">
            {">"} READY_FOR_DEPLOYMENT
          </Text>
        </group>

        {/* Central HUD elements */}
        <mesh position={[0, 0, 0.2]}>
          <ringGeometry args={[0.5, 0.55, 32]} />
          <meshBasicMaterial color="#ff0000" transparent opacity={0.5} />
        </mesh>
        <mesh position={[0, 0, 0.2]}>
          <ringGeometry args={[0.7, 0.75, 4]} />
          <meshBasicMaterial color="#ff0000" transparent opacity={0.3} />
        </mesh>
      </Float>
    </group>
  );
};

export default ContactSector;
