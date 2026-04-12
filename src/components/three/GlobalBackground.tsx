import { Grid } from "@react-three/drei";

const GlobalBackground = () => {
  return (
    <group>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#ff0000" />
      <Grid 
        infiniteGrid 
        fadeDistance={50} 
        fadeStrength={5} 
        sectionColor="#ff0000" 
        cellColor="#330000" 
      />
    </group>
  );
};

export default GlobalBackground;
