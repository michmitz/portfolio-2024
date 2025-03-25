"use client";
import * as THREE from "three";
import { useRef } from "react";
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

  return (
    <CameraControls
      ref={cameraRef}
      distance={80}
      maxDistance={100}
      azimuthAngle={130}
      polarAngle={2.2}
    />
  );
}

function Sky() {
  const ref = useRef<THREE.Group>(null);
  const cloudRefs = useRef<THREE.Group[]>([]);

  const addCloudRef = (cloud: THREE.Group | null) => {
    if (cloud && !cloudRefs.current.includes(cloud)) {
      cloudRefs.current.push(cloud);
    }
  };

  useFrame((_, delta: number) => {
    cloudRefs.current.forEach((cloud) => {
      if (cloud) {
        cloud.position.x += delta * 0.5;
        if (cloud.position.x > 50) {
          cloud.position.x = -50;
        }
      }
    });
  });

  return (
    <>
      <Stars radius={100} depth={10} count={600} factor={6} fade />
      <group ref={ref}>
        <SkyImpl
          sunPosition={[15, 30, 15]}
          turbidity={1}
          rayleigh={0.06}
          mieCoefficient={0.01}
          mieDirectionalG={0.99}
          azimuth={-50}
          distance={800}
        />
        <Clouds material={THREE.MeshPhongMaterial} limit={300}>
          <Cloud
            ref={addCloudRef}
            color="#ffffff"
            seed={8}
            position={[50, -80, 0]}
            volume={100}
          />
          <Cloud
            ref={addCloudRef}
            color="#d0e0d0"
            seed={3}
            position={[-15, -40, 100]}
          />
          <Cloud
            ref={addCloudRef}
            color="#a0b0d0"
            seed={4}
            position={[0, -20, -12]}
          />
          <Cloud
            ref={addCloudRef}
            color="#c0c0dd"
            seed={5}
            position={[0, -50, 12]}
          />
          <Cloud
            ref={addCloudRef}
            concentrate="outside"
            growth={40}
            color="#ffffff"
            opacity={1.25}
            seed={0.3}
            bounds={200}
            volume={100}
          />
        </Clouds>
      </group>
    </>
  );
}