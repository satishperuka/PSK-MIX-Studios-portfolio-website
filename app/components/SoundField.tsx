"use client";

import RibbonField from "./RibbonField";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

import { Canvas } from "@react-three/fiber";

export default function SoundField() {
  return (
    <div className="absolute inset-0 -z-10">
            <Canvas
        camera={{
            position: [0, 0, 8],
            fov: 45,
        }}
        >
        <ambientLight intensity={0.8} />

        <>
    <RibbonField />
    <RibbonField offset={2.5}/>
</>

<EffectComposer>
  <Bloom
    intensity={1.2}
    luminanceThreshold={0}
    luminanceSmoothing={0.8}
    mipmapBlur
  />
</EffectComposer>

        </Canvas>
    </div>
  );
}