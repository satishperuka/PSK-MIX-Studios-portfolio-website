export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">

      <p className="mb-4 text-cyan-400 uppercase tracking-[0.3em]">
        Film Audio Post Production
      </p>

      <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
        Crafting Cinematic Sound For Stories That Matter
      </h1>

      <p className="mt-8 max-w-3xl text-lg text-gray-400">
        With nearly three decades of experience, P. Satish Kumar
        delivers professional Film Mixing, Mastering, Foley and
        Sound Design for films, OTT content and commercials.
      </p>

      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <span className="rounded-full border border-white/20 px-4 py-2">
          Film Mixing
        </span>

        <span className="rounded-full border border-white/20 px-4 py-2">
          Mastering
        </span>

        <span className="rounded-full border border-white/20 px-4 py-2">
          Foley
        </span>

        <span className="rounded-full border border-white/20 px-4 py-2">
          Sound Design
        </span>
      </div>
    </section>
  );
}