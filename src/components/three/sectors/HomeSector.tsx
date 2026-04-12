import { Float } from "@react-three/drei";
import ParticleField from "../ParticleField";

const GlowingSphere = () => (
  <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
    <mesh>
      <icosahedronGeometry args={[1.5, 4]} />
      <meshStandardMaterial
        color="#ff2200"
        emissive="#ff0000"
        emissiveIntensity={0.4}
        wireframe
        transparent
        opacity={0.15}
      />
    </mesh>
  </Float>
);

const HomeSector = () => {
  return (
    <group position={[0, 0, 0]}>
      <ambientLight intensity={0.1} />
      <pointLight position={[5, 5, 5]} color="#ff3333" intensity={2} distance={20} />
      <pointLight position={[-5, -3, 3]} color="#ff0000" intensity={1} distance={15} />
      <pointLight position={[0, 3, -5]} color="#330000" intensity={0.5} distance={10} />
      <GlowingSphere />
      <ParticleField count={400} />
    </group>
  );
};

export default HomeSector;
