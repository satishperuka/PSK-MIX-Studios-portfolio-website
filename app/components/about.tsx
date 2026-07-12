"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-7xl px-6 py-28 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-zinc-400/5 blur-[150px]" />
      </div>

      {/* Divider */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mb-16 flex items-center justify-center"
      >
        <div className="h-px w-24 bg-zinc-700"></div>

        <div className="mx-4 h-2 w-2 rounded-full bg-zinc-500"></div>

        <div className="h-px w-24 bg-zinc-700"></div>
      </motion.div>

      {/* Heading */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <p className="uppercase tracking-[0.35em] text-zinc-500">
          About
        </p>

        <h2 className="mt-5 text-4xl font-bold md:text-5xl">
          The Story Behind{" "}
          <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
            PSK MIX STUDIOS
          </span>
        </h2>
      </motion.div>

      {/* Image + Paragraph */}

      <div className="mt-20 grid items-center gap-16 lg:grid-cols-2">

        {/* Image */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/st.jpeg"
            alt="P Satish Kumar"
            width={620}
            height={720}
            className="rounded-3xl border border-zinc-800 object-cover shadow-2xl"
          />
        </motion.div>

        {/* Paragraph */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="mt-2 max-w-3xl text-xl leading-10 text-zinc-300 md:text-[24px] md:leading-[44px]">
            P. Satish Kumar is a veteran sound engineer with over
            25 years of experience in film audio post-production.
            Having worked at Ramoji Film City before establishing
            PSK Mix Studios, he has contributed to feature films,
            commercials and professional productions with expertise
            in Stereo Mixing, 5.1 Surround Mixing, Dolby Atmos Mixing,
            Mastering, Foley and Sound Design.
          </p>
        </motion.div>

      </div>

      {/* Cards */}

      <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 backdrop-blur transition hover:-translate-y-2 hover:border-zinc-600"
        >
          <h3 className="text-3xl font-bold">25+</h3>

          <p className="mt-2 text-zinc-400">
            Years Experience
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 backdrop-blur transition hover:-translate-y-2 hover:border-zinc-600"
        >
          <h3 className="text-3xl font-bold">
            RFC
          </h3>

          <p className="mt-2 text-zinc-400">
            Former Professional
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 backdrop-blur transition hover:-translate-y-2 hover:border-zinc-600"
        >
          <h3 className="text-3xl font-bold">
            5.1
          </h3>

          <p className="mt-2 text-zinc-400">
            Surround Mixing
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 backdrop-blur transition hover:-translate-y-2 hover:border-zinc-600"
        >
          <h3 className="text-3xl font-bold">
            Atmos
          </h3>

          <p className="mt-2 text-zinc-400">
            Dolby Atmos Mixing
          </p>
        </motion.div>

      </div>

    </section>
  );
}