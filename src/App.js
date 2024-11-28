import './App.css';

import { Canvas } from '@react-three/fiber';

const Sun = () => {
  return (
    <mesh>
      <sphereGeometry args={[2, 32, 32]} />
      <meshBasicMaterial color="yellow" />
      <pointLight intensity={2} />
    </mesh>
  );
};

const SolarSystem = () => {
  return (
    <Canvas
      camera={{ position: [0, 10, 20], fov: 75 }}
    >

      <Sun />
    </Canvas>
  );
};

function App() {
  return (
    <SolarSystem />
  );
}

export default App;
