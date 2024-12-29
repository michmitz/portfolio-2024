"use client";
import * as THREE from "three";
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Clouds, Cloud, CameraControls, Sky as SkyImpl, Loader } from "@react-three/drei";

export default function CloudBackground() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <Canvas
        className={`canvas ${loaded ? "fade-in" : ""}`}
        onCreated={() => setLoaded(true)}
      >
        <Sky />
        <ambientLight intensity={Math.PI / 1.5} />
        <spotLight
          position={[0, 40, 0]}
          decay={0}
          distance={45}
          penumbra={1}
          intensity={100}
        />
        <spotLight
          position={[-20, 0, 10]}
          color="red"
          angle={0.15}
          decay={0}
          penumbra={-1}
          intensity={30}
        />
        <spotLight
          position={[20, -10, 10]}
          color="red"
          angle={0.2}
          decay={0}
          penumbra={-1}
          intensity={20}
        />
        <CameraControls
          minZoom={0}
          maxZoom={0}
          minDistance={0.5}
          maxDistance={10}
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
      <SkyImpl />
      <group ref={ref}>
        <Clouds material={THREE.MeshLambertMaterial} limit={400}>
          <Cloud ref={addCloudRef} />
          <Cloud ref={addCloudRef} color="#eed0d0" seed={2} position={[12, 0, 0]} />
          <Cloud ref={addCloudRef} color="#d0e0d0" seed={3} position={[-15, 40, 100]} />
          <Cloud ref={addCloudRef} color="#a0b0d0" seed={4} position={[0, 0, -12]} />
          <Cloud ref={addCloudRef} color="#c0c0dd" seed={5} position={[0, 0, 12]} />
          <Cloud
            ref={addCloudRef}
            concentrate="outside"
            growth={100}
            color="#ffccdd"
            opacity={1.25}
            seed={0.3}
            bounds={200}
            volume={200}
          />
        </Clouds>
      </group>
    </>
  );
}