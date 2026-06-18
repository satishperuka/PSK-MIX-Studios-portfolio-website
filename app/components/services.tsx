export default function Services() {
  const services = [
    {
      title: "Film Mixing",
      description:
        "Professional cinematic mixing for feature films, short films and OTT content.",
    },
    {
      title: "Mastering",
      description:
        "Final audio polishing and delivery-ready masters with industry standards.",
    },
    {
      title: "Foley",
      description:
        "Custom Foley recordings to bring realism and depth to every scene.",
    },
    {
      title: "Sound Design",
      description:
        "Creative soundscapes, effects and audio storytelling for visual media.",
    },
  ];

  return (
    <section id="services"className="mx-auto max-w-7xl px-6 py-24">
      <div className="text-center">
        <p className="text-cyan-400 uppercase tracking-[0.3em]">
          Services
        </p>

        <h2 className="mt-4 text-4xl font-bold">
          Professional Audio Services
        </h2>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-2xl border border-white/10 p-6 transition hover:border-cyan-400"
          >
            <h3 className="text-2xl font-semibold">
              {service.title}
            </h3>

            <p className="mt-4 text-gray-400">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}