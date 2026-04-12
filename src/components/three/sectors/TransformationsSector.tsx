import { useRef, useEffect, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Image, Text, Float } from "@react-three/drei";
import * as THREE from "three";
import { supabase } from "@/lib/supabase";

import t1 from "@/assets/transform-1.jpeg";
import t2 from "@/assets/transform-2.jpeg";
import t3 from "@/assets/transform-3.jpeg";
import t4 from "@/assets/transform-4.jpeg";
import t5 from "@/assets/transform-5.jpeg";
import t6 from "@/assets/transform-6.jpeg";
import t7 from "@/assets/transform-7.jpeg";
import t8 from "@/assets/transform-8.jpeg";
import t9 from "@/assets/transform-9.jpeg";

const localImages = [t1, t2, t3, t4, t5, t6, t7, t8, t9];

interface Transformation {
  id: string;
  image_url: string;
  title: string;
  description: string;
}

const TransformationsSector = () => {
  const [items, setItems] = useState<Transformation[]>([]);
  const groupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("transformations")
        .select("*")
        .order("created_at", { ascending: false });
      
      if (!error && data && data.length > 0) {
        setItems(data);
      } else {
        // Fallback to local transformation photos
        const fallbackItems = localImages.map((url, i) => ({
          id: `local-${i}`,
          image_url: url,
          title: `Transformation ${i + 1}`,
          description: "Success Story"
        }));
        setItems(fallbackItems);
      }
    };
    fetchData();
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
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
  const spacing = 7; // Increased spacing for better visibility
  const yOffset = (index - (total - 1) / 2) * -spacing;

  return (
    <group position={[0, yOffset, 0]}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh ref={meshRef}>
          <planeGeometry args={[4.5, 4.5]} />
          <meshBasicMaterial color="#ff0000" transparent opacity={0.1} />
          
          <Image 
            url={item.image_url} 
            scale={[4.3, 4.3]} 
            toneMapped={false}
            transparent
            side={THREE.DoubleSide}
          />

          <mesh position={[0, 0, -0.01]}>
            <planeGeometry args={[4.6, 4.6]} />
            <meshBasicMaterial color="#ff0000" />
          </mesh>
        </mesh>

        <Text
          position={[0, -2.8, 0]}
          fontSize={0.4}
          color="#ff0000"
          anchorX="center"
          anchorY="middle"
        >
          {item.title.toUpperCase()}
        </Text>
      </Float>
    </group>
  );
};

export default TransformationsSector;
