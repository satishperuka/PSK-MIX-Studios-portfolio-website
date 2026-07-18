"use client";

import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

 type Props = {
  offset?: number;
};

export default function RibbonField({
  offset = 0,
}: Props) {
  const ref = useRef<THREE.Points>(null!);

  const positions = useMemo(() => {
    const arr = [];

    for (let x = -10; x <= 10; x += 0.08) {
      for (let i = -3; i <= 3; i++) {

        const y =
          Math.sin(x * 0.8 + i + offset) * 0.5 +
          i * 0.35;

        const z =
  Math.sin(x * 0.25 + i) * 0.9;

arr.push(x);
arr.push(y);
arr.push(z);

      }
    }

    return new Float32Array(arr);

  }, [offset]);

  useFrame(({ clock }) => {

    const t = clock.getElapsedTime();

    const pos = ref.current.geometry.attributes.position.array as Float32Array;

    let index = 0;

    for (let x = -10; x <= 10; x += 0.08) {
      for (let i = -3; i <= 3; i++) {

        pos[index + 1] =
  Math.sin(x * 0.8 + t + i + offset) * 0.5 +
  i * 0.35;

pos[index + 2] =
  Math.sin(x * 0.35 + t * 0.6 + i + offset) * 0.8;

        index += 3;

      }
    }

    ref.current.geometry.attributes.position.needsUpdate = true;

  });

  return (
    <Points
      ref={ref}
      positions={positions}
    >
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.018}
        opacity={0.55}
        depthWrite={false}
      />
    </Points>
  );
}