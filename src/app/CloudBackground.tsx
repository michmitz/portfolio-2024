"use client";

import * as THREE from "three";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { CameraControls, Cloud, Clouds, Sky, Stars } from "@react-three/drei";

export interface CloudBackgroundProps {
  rotationSpeed?: number;
  starCount?: number;
  interactive?: boolean;
  reducedMotion?: boolean;
  fallbackColor?: string;
  className?: string;
  style?: CSSProperties;
  onReady?: () => void;
}

const INITIAL_AZIMUTH = THREE.MathUtils.degToRad(248);
const INITIAL_POLAR = 2.2;

const SUN_POSITION: [number, number, number] = [15, 30, 15];
const KEY_LIGHT_POSITION: [number, number, number] = [-50, 30, 50];

type CloudSpec = {
  seed: number;
  position: [number, number, number];
  color: string;
  opacity: number;
  bounds: number;
  volume: number;
  growth: number;
};

const CLOUDS: CloudSpec[] = [
  { seed: 4, position: [-50, -400, 70], color: "#ffffff", opacity: 0.6, bounds: 200, volume: 300, growth: 35 },
  { seed: 5, position: [400, -400, 250], color: "#ffffff", opacity: 1, bounds: 500, volume: 600, growth: 35 },
  { seed: 8, position: [100, -500, 250], color: "#d2acac", opacity: 0.75, bounds: 500, volume: 450, growth: 35 },
  { seed: 9, position: [-300, -200, -250], color: "#f4ebeb", opacity: 0.75, bounds: 300, volume: 450, growth: 35 },
  { seed: 7, position: [0, -500, 400], color: "#ebeaea", opacity: 1, bounds: 500, volume: 600, growth: 30 },
];

export default function CloudBackground({
  rotationSpeed = 0.007,
  starCount = 700,
  interactive = false,
  reducedMotion,
  fallbackColor = "#8ab2d5",
  className,
  style,
  onReady,
}: CloudBackgroundProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const still = reducedMotion ?? prefersReducedMotion;
  const [ready, setReady] = useState(false);

  return (
    <div
      aria-hidden
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        background: fallbackColor,
        pointerEvents: interactive ? "auto" : "none",
        ...style,
      }}
    >
      <Canvas
        frameloop={still ? "demand" : "always"}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: false,
          stencil: false,
          powerPreference: "high-performance",
        }}
        style={{ opacity: ready ? 1 : 0, transition: "opacity 1s ease" }}
        onCreated={() => {
          setReady(true);
          onReady?.();
        }}
      >
        <Scene rotationSpeed={rotationSpeed} starCount={starCount} still={still} />
      </Canvas>
    </div>
  );
}

interface SceneProps {
  rotationSpeed: number;
  starCount: number;
  still: boolean;
}

function Scene({ rotationSpeed, starCount, still }: SceneProps) {
  const controls = useRef<CameraControls>(null);

  useFrame((_, delta) => {
    if (!still) {
      controls.current?.rotate(rotationSpeed * delta, 0, false);
    }
  });

  return (
    <>
      <ambientLight intensity={7} color="#ffffff" />
      <directionalLight position={KEY_LIGHT_POSITION} intensity={1} color="#aaaaff" />

      <Sky
        sunPosition={SUN_POSITION}
        turbidity={1}
        rayleigh={0.06}
        mieCoefficient={0.01}
        mieDirectionalG={0.99}
        distance={600}
      />
      <Stars radius={200} count={starCount} factor={12} fade speed={still ? 0 : 1} />

      <Clouds material={THREE.MeshStandardMaterial}>
        {CLOUDS.map((c) => (
          <Cloud key={c.seed} concentrate="outside" {...c} />
        ))}
      </Clouds>

      <CameraControls
        ref={controls}
        distance={60}
        maxDistance={100}
        azimuthAngle={INITIAL_AZIMUTH}
        polarAngle={INITIAL_POLAR}
      />
    </>
  );
}

function usePrefersReducedMotion() {
  const [prefers, setPrefers] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefers(query.matches);
    const onChange = (e: MediaQueryListEvent) => setPrefers(e.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return prefers;
}
