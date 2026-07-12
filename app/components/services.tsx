export default function Services() {
  const services = [
    {
      title: "Stereo Mixing",
      description:
        "Professional stereo mixing for OTT platforms, feature films and theatrical releases with clarity, balance and cinematic impact.",
    },
    {
      title: "5.1 Surround Mixing",
      description:
        "Immersive 5.1 surround mixing for OTT content and theatrical films, delivering a rich and engaging cinematic audio experience.",
    },
    {
      title: "Dolby Atmos Mixing",
      description:
        "Advanced Dolby Atmos mixing for OTT productions, creating a highly immersive three-dimensional listening experience.",
    },
    {
      title: "Audio Mastering",
      description:
        "Final mastering and quality control to ensure broadcast, streaming and theatrical delivery standards.",
    },
    {
      title: "Foley",
      description:
        "Custom Foley recording and editing to enhance realism, depth and emotional impact in every scene.",
    },
    {
      title: "Sound Design",
      description:
        "Creative sound design and effects tailored to storytelling, atmosphere and cinematic excellence.",
    },
  ];

  return (
    <section
      id="services"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <div className="text-center">
        <p className="uppercase tracking-[0.3em] text-zinc-400">
          Services
        </p>

        <h2 className="mt-4 text-4xl font-bold md:text-5xl">
          Professional
          <span className="text-zinc-300">
            {" "}Audio Services
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-zinc-400">
          End-to-end film audio post-production services for feature films,
          OTT content, commercials and professional productions.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-zinc-500"
          >
            <h3 className="text-2xl font-semibold">
              {service.title}
            </h3>

            <p className="mt-4 leading-7 text-zinc-400">
              {service.description}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}