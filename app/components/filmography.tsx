export default function Filmography() {
  const projects = [
    {
      title: "Baahubali",
      category: "Feature Film Series",
    },
    {
      title: "Businessman",
      category: "Feature Film",
    },
    {
      title: "Dookudu",
      category: "Feature Film",
    },
    {
      title: "Usha Kiran Movies",
      category: "Multiple Productions",
    },
    {
      title: "Green Gold Productions",
      category: "Animation Projects",
    },
    {
      title: "Chhota Bheem",
      category: "Animation Series",
    },
    {
      title: "Krishna: Rise of Kirmada",
      category: "Animated Feature",
    },
  ];

  return (
    <section
      id="filmography"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <div className="text-center">
        <p className="uppercase tracking-[0.35em] text-zinc-500">
          Selected Works
        </p>

        <h2 className="mt-4 text-4xl font-bold md:text-6xl">
          A Legacy of{" "}
          <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
            Storytelling Through Sound
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
          Over 25 years of contributions to feature films,
          animation projects and premium entertainment content,
          delivering world-class audio post-production for
          theatrical releases, OTT platforms and television.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="group rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900/80 to-black p-8 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-zinc-500"
          >
            <div className="flex items-start gap-6">
              <span className="text-4xl font-bold text-zinc-700">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div>
                <h3 className="text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="mt-2 text-zinc-400">
                  {project.category}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900/60 to-black p-10 text-center">
        <h3 className="text-3xl font-bold">
          Career Highlights
        </h3>

        <div className="mt-10 grid gap-6 md:grid-cols-4">

          <div>
            <h4 className="bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-4xl font-bold text-transparent">
              25+
            </h4>

            <p className="mt-2 text-zinc-500">
              Years Experience
            </p>
          </div>

          <div>
            <h4 className="bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-4xl font-bold text-transparent">
              RFC
            </h4>

            <p className="mt-2 text-zinc-500">
              Professional Experience
            </p>
          </div>

          <div>
            <h4 className="bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-4xl font-bold text-transparent">
              5.1
            </h4>

            <p className="mt-2 text-zinc-500">
              Surround Mixing
            </p>
          </div>

          <div>
            <h4 className="bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-4xl font-bold text-transparent">
              Atmos
            </h4>

            <p className="mt-2 text-zinc-500">
              Dolby Atmos Mixing
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}