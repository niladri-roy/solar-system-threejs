import './App.css';

import React, { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { TextureLoader } from 'three';
import sun_texture from './assets/sun.jpg'

// Sun Component
const Sun = () => {

  const sunTexture = useLoader(TextureLoader, sun_texture); // Load sun texture

  return (
    <mesh>
      <sphereGeometry args={[2, 32, 32]} />
      <meshBasicMaterial map={sunTexture} />
      <pointLight intensity={2} />
    </mesh>
  );
};

// Planet Component
const Planet = ({ size, color, distance, speed }) => {
  const planetRef = useRef();
  const pivotRef = useRef();

  // Rotate the planet on its axis and revolve around the sun
  useFrame(() => {
    if (planetRef.current) planetRef.current.rotation.y += 0.01; // Rotation
    if (pivotRef.current) pivotRef.current.rotation.y += speed; // Revolution
  });

  return (
    <group ref={pivotRef}>
      <mesh ref={planetRef} position={[distance, 0, 0]}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </group>
  );
};

// App Component
const App = () => {
  return (
    <Canvas
      style={{ height: "100vh", width: "100vw" }}
      camera={{ position: [0, 0, 400], fov: 75, near: 0.1, far: 2000 }}
    >
      {/* Sun */}
      <Sun />
      {/* Planets */}
      <Planet size={0.5} color="blue" distance={5.79} speed={0.1} />{" "}
      {/* Earth */}
      <Planet size={0.87} color="red" distance={45} speed={0.008} />{" "}
      {/* Mars */}
      {/* Lights */}
      <ambientLight intensity={0.5} />
      {/* OrbitControls */}
      <OrbitControls enableDamping={true} />
    </Canvas>
  );
};

export default App;

