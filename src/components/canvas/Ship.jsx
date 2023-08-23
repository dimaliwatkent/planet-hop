import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import { SpotLightHelper } from "three";
import { useHelper } from "@react-three/drei";

import CanvasLoader from "../../Loader";

const Ship = () => {
  const ship = useGLTF("./ship/scene.gltf");

  const spotLightRef = useRef();
  useHelper(spotLightRef, SpotLightHelper, "white");

  return (
    <mesh>
      <hemisphereLight intensity={4} groundColor="black" />
      <spotLight
        ref={spotLightRef}
        position={[0, 40, 0]}
        rotation={[0, 0, 0]}
        angle={0.8}
        penumbra={1}
        intensity={5000}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={100} />
      <primitive
        object={ship.scene}
        scale={1}
        position-y={0}
        position-x={-23}
        position-z={0}
        rotation-y={9.45}
        rotation-x={0}
      />
    </mesh>
  );
};

const ShipCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 50,
        near: 0.1,
        far: 200,
        position: [0, 0, 60],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          // autoRotate
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Ship />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default ShipCanvas;
