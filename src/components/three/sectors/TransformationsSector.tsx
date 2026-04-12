import { useRef, useEffect, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Image, Text, Float } from "@react-three/drei";
import * as THREE from "three";
import { supabase } from "@/lib/supabase";

interface Transformation {
  id: string;
  image_url: string;
  title: string;
  description: string;
}

const TransformationsSector = () => {
  const [items, setItems] = useState<Transformation[]>([]);
  const groupRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("transformations")
        .select("*")
        .order("created_at", { ascending: false });
      
      if (!error && data) {
        setItems(data);
      } else {
        // Fallback placeholder data if supabase fails/empty
        setItems([
          { id: "1", image_url: "/placeholder.svg", title: "Transformation 1", description: "12 Weeks" },
          { id: "2", image_url: "/placeholder.svg", title: "Transformation 2", description: "6 Months" },
          { id: "3", image_url: "/placeholder.svg", title: "Transformation 3", description: "1 Year" },
        ]);
      }
    };
    fetchData();
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle floating animation for the whole wall
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <group position={[-10, 0, 0]} ref={groupRef}>
      {items.map((item, index) => (
        <TransformationCard 
          key={item.id} 
          item={item} 
          index={index} 
          total={items.length}
        />
      ))}
    </group>
  );
};

const TransformationCard = ({ item, index, total }: { item: Transformation, index: number, total: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const spacing = 6;
  const yOffset = (index - (total - 1) / 2) * -spacing;

  return (
    <group position={[0, yOffset, 0]}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh ref={meshRef}>
          <planeGeometry args={[4, 5.5]} />
          <meshBasicMaterial color="#ff0000" transparent opacity={0.1} />
          
          {/* Main Image */}
          <Image 
            url={item.image_url} 
            scale={[3.8, 5.3]} 
            toneMapped={false}
            transparent
            side={THREE.DoubleSide}
          />

          {/* Glowing Border */}
          <mesh position={[0, 0, -0.01]}>
            <planeGeometry args={[4.1, 5.6]} />
            <meshBasicMaterial color="#ff0000" />
          </mesh>
        </mesh>

        <Text
          position={[0, -3.2, 0]}
          fontSize={0.4}
          color="#ff0000"
          font="/fonts/SpaceGrotesk-Bold.ttf" // Assuming we follow Pro Max font choice
          anchorX="center"
          anchorY="middle"
        >
          {item.title.toUpperCase()}
        </Text>
        <Text
          position={[0, -3.8, 0]}
          fontSize={0.25}
          color="#ffffff"
          opacity={0.7}
          transparent
          anchorX="center"
          anchorY="middle"
        >
          {item.description}
        </Text>
      </Float>
    </group>
  );
};

export default TransformationsSector;
