"use client";
import * as THREE from "three";
import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Clouds,
  Cloud,
  CameraControls,
  Sky as SkyImpl,
  Loader,
  Stars,
} from "@react-three/drei";

interface CloudBackgroundProps {
  loaded: boolean;
  setLoaded: (v: boolean) => void;
  timeOfDay: number;
  setTimeOfDay: React.Dispatch<React.SetStateAction<number>>;
}

export default function CloudBackground({ loaded, setLoaded, timeOfDay, setTimeOfDay }: CloudBackgroundProps) {
  const transitionSpeed = 0.002; // Adjust for smoother transitions

  const directionRef = useRef(1);
  const lastSwitchTimeRef = useRef(Date.now());
  useEffect(() => {
    const delay = 10000; // 10-second delay before transition starts
    const timeout = setTimeout(() => {
      const animateTransition = () => {
        setTimeOfDay((prev) => {
          let newTime = prev + directionRef.current * transitionSpeed;
  
          if (newTime >= 1) {
            newTime = 1;
            if (Date.now() - lastSwitchTimeRef.current > 25000) {
              directionRef.current = -1;
              lastSwitchTimeRef.current = Date.now();
            }
          } else if (newTime <= 0) {
            newTime = 0;
            if (Date.now() - lastSwitchTimeRef.current > 25000) {
              directionRef.current = 1;
              lastSwitchTimeRef.current = Date.now();
            }
          }
  
          return Math.max(0, Math.min(1, newTime));
        });
  
        requestAnimationFrame(animateTransition);
      };
  
      const animationFrameId = requestAnimationFrame(animateTransition);
  
      return () => cancelAnimationFrame(animationFrameId);
    }, delay);
  
    return () => clearTimeout(timeout);
  }, [setTimeOfDay]);  
  

  return (
    <>
      <Canvas className={`canvas ${loaded ? "fade-in bg-[#20639d]" : ""}`} onCreated={(state) => !loaded && setLoaded(true)}>
        <Lighting transition={timeOfDay} />
        <Sky transition={timeOfDay} />
        <RotatingCamera />
      </Canvas>
      <Loader />
    </>
  );
}

function Lighting({ transition }: { transition: number }) {
  const ambientColor = new THREE.Color().lerpColors(
    new THREE.Color("#ffffff"), // White light for night
    new THREE.Color("#ffb6c1"), // Soft pink for day
    transition
  );

  const directionalColor = new THREE.Color().lerpColors(
    new THREE.Color("#aaaaff"), // Cool blue moonlight
    new THREE.Color("#ffcc99"), // Warm sunlight
    transition
  );

  return (
    <>
      <ambientLight intensity={7} color={ambientColor} />
      <directionalLight
        position={[
          THREE.MathUtils.lerp(-50, 50, transition), // Moves from left to right
          THREE.MathUtils.lerp(30, 100, transition), // Moves higher for daytime
          50,
        ]}
        intensity={1}
        color={directionalColor}
        castShadow
      />
    </>
  );
}

function RotatingCamera() {
  const cameraRef = useRef<CameraControls>(null);
  const rotationSpeed = 0.4;

  useFrame((_, delta) => {
    if (cameraRef.current) {
      cameraRef.current.azimuthAngle = THREE.MathUtils.lerp(
        cameraRef.current.azimuthAngle,
        cameraRef.current.azimuthAngle + rotationSpeed * delta,
        0.02
      );
    }
  });

  return <CameraControls ref={cameraRef} distance={80} maxDistance={500} azimuthAngle={130} polarAngle={2.2} />;
}

const CloudsComp = () => {
return (
  <Clouds material={THREE.MeshStandardMaterial} frustumCulled={false} >
     
          <Cloud
            // ref={addCloudRef}
            position={[-50, -400, 70]}
            concentrate="outside"
            growth={30}
            color="#ffffff"
            opacity={.6}
            seed={4}
            bounds={200}
            volume={300}
          />
           <Cloud
            // ref={addCloudRef}
            position={[400, -400, 250]}
            concentrate="outside"
            growth={30}
            color="#ffffff"
            opacity={1}
            seed={8}
            bounds={500}
            volume={450}
          />
           <Cloud
            // ref={addCloudRef}
            position={[100, -500, 250]}
            concentrate="outside"
            growth={30}
            color='#d2acac'
            
            opacity={.75}
            seed={8}
            bounds={500}
            volume={500}
          />
          <Cloud
            // ref={addCloudRef}
            position={[0, -500, 400]}
            concentrate="outside"
            growth={10}
            color="#ebeaea"
            opacity={1}
            seed={7}
            bounds={500}
            volume={600}
            speed={0.05}
          />
          <Cloud
            // ref={addCloudRef}
            position={[-150, -450, 500]}
            concentrate="outside"
            growth={10}
            color="#ebeaea"
            opacity={1}
            seed={10}
            bounds={600}
            volume={400}
            speed={0.05}
          />
          <Cloud
            // ref={addCloudRef}
            position={[-150, -500, 0]}
            concentrate="outside"
            growth={10}
            color="#ebeaea"
            opacity={1}
            seed={9}
            bounds={500}
            volume={300}
            speed={0.1}
          />
    
  </Clouds>
);
}


function Sky({ transition }: { transition: number }) {
  const ref = useRef<THREE.Group>(null);
  const cloudRefs = useRef<THREE.Group[]>([]);

  return (
    <>
      <Stars radius={500}  count={2000} factor={15} fade />
      <group ref={ref}>
        <SkyImpl
          sunPosition={[
            THREE.MathUtils.lerp(15, 30, transition),
            50 + THREE.MathUtils.lerp(-20, 50, transition), // Keep a fixed baseline
            THREE.MathUtils.lerp(15, 30, transition),
          ]}
          
          turbidity={THREE.MathUtils.lerp(1, 0.8, transition)}
          rayleigh={THREE.MathUtils.lerp(0.06, 0.2, transition)}
          mieCoefficient={THREE.MathUtils.lerp(0.01, 0.009, transition)}
          mieDirectionalG={0.99}
          azimuth={-60}
          distance={600}
        />
      </group>
        <CloudsComp />
    </>
  );
}