"use client";
import SoundField from "./SoundField";
import { useEffect, useState } from "react";
import SoundWaveBackground from "./SoundWaveBackground";

export default function Hero() {
  const quotes = [
    "Engineering Sound For Stories That Last",
    "Where Every Story Finds Its Sound",
    "Crafting Emotion Through Sound",
    "Professional Audio For Film • OTT • Animation",
    "Precision. Passion. Perfection.",
  ];

  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-[550px] w-[550px] rounded-full bg-white/5 blur-[180px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-zinc-400/5 blur-[180px]" />
      </div>

      {/* Rotating Quote */}
      <p className="mb-8 text-sm uppercase tracking-[0.35em] text-zinc-500 transition-all duration-500">
        {quotes[currentQuote]}
      </p>

      <SoundField />
      
      {/* Hero Title */}

<div className="relative mt-4 flex h-[320px] w-full items-center justify-center">

  <SoundWaveBackground />

  <h1 className="relative z-20 text-8xl font-bold md:text-8xl xl:text-9xl">
    <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
      PSK MIX STUDIOS
    </span>
  </h1>

</div>

      {/* Tagline */}
      <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400 md:text-xl">
        Crafting immersive audio experiences for
        <br />
        Feature Films • OTT • Animation
      </p>

      {/* Service Tags */}
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <span className="rounded-full border border-zinc-700 px-5 py-2">
          Stereo Mixing
        </span>

        <span className="rounded-full border border-zinc-700 px-5 py-2">
          5.1 Mixing
        </span>

        <span className="rounded-full border border-zinc-700 px-5 py-2">
          Dolby Atmos
        </span>

        <span className="rounded-full border border-zinc-700 px-5 py-2">
          Foley
        </span>

        <span className="rounded-full border border-zinc-700 px-5 py-2">
          Sound Design
        </span>
      </div>

      {/* Buttons */}
      <div className="mt-12 flex flex-wrap justify-center gap-4">
        <a
          href="#contact"
          className="rounded-lg bg-gradient-to-r from-zinc-200 to-zinc-400 px-8 py-4 font-semibold text-black transition hover:scale-105"
        >
          Let's Talk
        </a>

        <a
          href="#filmography"
          className="rounded-lg border border-zinc-700 px-8 py-4 transition hover:border-zinc-400"
        >
          View Works
        </a>
      </div>
    </section>
  );
}