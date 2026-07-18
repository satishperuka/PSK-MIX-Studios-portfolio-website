"use client";

export default function SoundWaveBackground() {
  return (
    <div
      style={{
        position: "fixed",
        top: "100px",
        left: "100px",
        width: "300px",
        height: "300px",
        background: "red",
        zIndex: 999999,
      }}
    />
  );
}