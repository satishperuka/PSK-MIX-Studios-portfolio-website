"use client";

import { motion } from "framer-motion";

export default function SoundWaveBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">

      {/* Metallic Glow */}

      <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.03] blur-[180px]" />

      <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-300/[0.05] blur-[120px]" />

      {/* Wave 1 */}

      <motion.svg
        initial={{ x: -250 }}
        animate={{ x: 250 }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 12,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 left-0 w-[220%] opacity-20"
        viewBox="0 0 1800 400"
        fill="none"
      >
        <path
          d="
          M0 220
          C150 120 300 320 450 220
          S750 120 900 220
          S1200 320 1350 220
          S1650 120 1800 220
          "
          stroke="#cfcfcf"
          strokeWidth="2"
        />
      </motion.svg>

      {/* Wave 2 */}

      <motion.svg
        initial={{ x: 250 }}
        animate={{ x: -250 }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 18,
          ease: "easeInOut",
        }}
        className="absolute bottom-32 left-0 w-[220%] opacity-15"
        viewBox="0 0 1800 400"
        fill="none"
      >
        <path
          d="
          M0 220
          C150 300 300 120 450 220
          S750 300 900 220
          S1200 120 1350 220
          S1650 300 1800 220
          "
          stroke="#ffffff"
          strokeWidth="1.5"
        />
      </motion.svg>

      {/* Wave 3 */}

      <motion.svg
        initial={{ x: -150 }}
        animate={{ x: 150 }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 9,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 left-0 w-[220%] opacity-10"
        viewBox="0 0 1800 400"
        fill="none"
      >
        <path
          d="
          M0 220
          C180 150 360 290 540 220
          S900 150 1080 220
          S1440 290 1620 220
          S1800 150 1980 220
          "
          stroke="#d6d6d6"
          strokeWidth="3"
        />
      </motion.svg>

      {/* Floating Particles */}

      <motion.div
        animate={{
          y: [-20, 20, -20],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
        }}
        className="absolute left-[15%] top-[25%] h-2 w-2 rounded-full bg-white/30 blur-sm"
      />

      <motion.div
        animate={{
          y: [15, -15, 15],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
        }}
        className="absolute right-[18%] top-[40%] h-3 w-3 rounded-full bg-zinc-300/20 blur-md"
      />

      <motion.div
        animate={{
          y: [-10, 25, -10],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
        }}
        className="absolute left-[65%] bottom-[18%] h-2 w-2 rounded-full bg-white/20 blur"
      />

    </div>
  );
}
