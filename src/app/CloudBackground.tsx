"use client";
import * as THREE from "three";
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Clouds,
  Cloud,
  CameraControls,
  Sky as SkyImpl,
  Loader,
  Stars,
} from "@react-three/drei";

export default function CloudBackground() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <Canvas
        className={`canvas ${loaded ? "fade-in bg-[#20639d]" : ""}`}
        onCreated={() => setLoaded(true)}
      >
        <Sky />
        <ambientLight intensity={4} color="#fef1f3" />
        {/* <ambientLight intensity={4} color="#ffb6c1" /> */}
        {/* <spotLight
        color='white'
          position={[0, 40, 0]}
          decay={0}
          distance={45}
          penumbra={1}
          intensity={100}
        /> */}
        <CameraControls
          distance={80}
          maxDistance={100}
          azimuthAngle={130}
          // minPolarAngle={Math.PI / 3}
          // maxPolarAngle={Math.PI / 1.2}
          polarAngle={2.2}
        />
      </Canvas>
      <Loader />
    </>
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
        <Clouds material={THREE.MeshLambertMaterial} limit={300}>
          {/* <Cloud ref={addCloudRef} color="#eed0d0" seed={8} position={[12, -10, 0]} volume={150} /> */}
          {/* <Cloud ref={addCloudRef} color="#ffffff" seed={8} position={[50, -80, 0]} volume={180} /> */}
          {/* <Cloud ref={addCloudRef} color="#d0e0d0" seed={3} position={[-15, -40, 100]} />
          <Cloud ref={addCloudRef} color="#a0b0d0" seed={4} position={[0, -20, -12]} /> */}
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