import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Box, Float, Text, MeshWobbleMaterial } from "@react-three/drei";
import * as THREE from "three";

const PackagesSector = () => {
  return (
    <group position={[0, -10, 0]}>
      <PackageCube position={[-4, 0, 0]} color="#330000" label="BASIC" price="$49" />
      <PackageCube position={[0, 0, 0]} color="#ff0000" label="PRO" price="$99" isFeatured />
      <PackageCube position={[4, 0, 0]} color="#660000" label="ELITE" price="$199" />
    </group>
  );
};

const PackageCube = ({ position, color, label, price, isFeatured = false }: any) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group position={position}>
        <Box ref={meshRef} args={[2, 2, 2]}>
          <MeshWobbleMaterial 
            color={color} 
            factor={isFeatured ? 0.4 : 0.1} 
            speed={1} 
            wireframe 
            emissive={color}
            emissiveIntensity={isFeatured ? 2 : 0.5}
          />
        </Box>
        
        <Text
          position={[0, 2, 0]}
          fontSize={0.5}
          color="#ff0000"
          font="/fonts/SpaceGrotesk-Bold.ttf"
          anchorX="center"
          anchorY="middle"
        >
          {label}
        </Text>
        <Text
          position={[0, 1.4, 0]}
          fontSize={0.3}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          {price}/MO
        </Text>

        {isFeatured && (
          <mesh position={[0, 0, 0]}>
            <sphereGeometry args={[2.5, 32, 32]} />
            <meshBasicMaterial color="#ff0000" transparent opacity={0.05} wireframe />
          </mesh>
        )}
      </group>
    </Float>
  );
};

export default PackagesSector;
