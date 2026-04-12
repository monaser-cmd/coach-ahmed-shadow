import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Box, Float, Text, MeshWobbleMaterial } from "@react-three/drei";
import * as THREE from "three";

const PackagesSector = () => {
  return (
    <group position={[0, -10, 0]}>
      <PackageCube position={[-5, 0, 0]} color="#330000" label="BASIC" price="1.5k" />
      <PackageCube position={[0, 0, 0]} color="#ff0000" label="PRO" price="3.5k" isFeatured />
      <PackageCube position={[5, 0, 0]} color="#660000" label="ELITE" price="6k" />
    </group>
  );
};

const PackageCube = ({ position, color, label, price, isFeatured = false }: any) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group position={position}>
        <Box ref={meshRef} args={[2.5, 2.5, 2.5]}>
          <MeshWobbleMaterial 
            color={color} 
            factor={isFeatured ? 0.4 : 0.1} 
            speed={1} 
            wireframe 
            emissive={color}
            emissiveIntensity={isFeatured ? 3 : 0.5}
          />
        </Box>
        
        <Text
          position={[0, 2.5, 0]}
          fontSize={0.6}
          color="#ff0000"
          anchorX="center"
          anchorY="middle"
        >
          {label}
        </Text>
        <Text
          position={[0, 1.8, 0]}
          fontSize={0.4}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          opacity={0.8}
          transparent
        >
          {price} LE
        </Text>

        {isFeatured && (
          <mesh position={[0, 0, 0]}>
            <sphereGeometry args={[3, 32, 32]} />
            <meshBasicMaterial color="#ff0000" transparent opacity={0.03} wireframe />
          </mesh>
        )}
      </group>
    </Float>
  );
};

export default PackagesSector;
