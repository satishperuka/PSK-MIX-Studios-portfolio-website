"use client";

import { useEffect, useRef } from "react";

export default function SoundWaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    let width = canvas.parentElement?.clientWidth || window.innerWidth;
    let height = 320;

    canvas.width = width;
    canvas.height = height;

    const resize = () => {
      width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", resize);

    let time = 0;

    function animate() {
      ctx.clearRect(0, 0, width, height);

      const centerY = height / 2;

const layers = [
  {
    amplitude: 28,
    speed: 1.0,
    opacity: 0.05,
    width: 5,
  },
  {
    amplitude: 18,
    speed: 1.5,
    opacity: 0.12,
    width: 3,
  },
  {
    amplitude: 10,
    speed: 2.1,
    opacity: 0.22,
    width: 2,
  },
];

layers.forEach(layer => {

  ctx.beginPath();

  ctx.lineWidth = layer.width;

  ctx.strokeStyle = `rgba(235,235,235,${layer.opacity})`;

  ctx.shadowBlur = 25;

  ctx.shadowColor = "rgba(255,255,255,0.18)";

  for (let x = 0; x <= width; x++) {

    const y =
      centerY +
      Math.sin((x + time * layer.speed) * 0.012) * layer.amplitude +
      Math.sin((x + time * layer.speed * 1.7) * 0.028) *
        (layer.amplitude * 0.45);

    if (x === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }

  ctx.stroke();

});

      time += 1.4;

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full pointer-events-none"
    />
  );
}