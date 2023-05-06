import { OrbitControls, Stage } from "@react-three/drei";
import React from "react";
import Chair from "./Chair";
import { Canvas } from "@react-three/fiber";

export const WebDesign = () => {
  return (
    <Canvas>
      <Stage>
        <Chair environment="city" intencity={0.6} />
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default WebDesign;
