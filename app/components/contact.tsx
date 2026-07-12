export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <div className="rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900/80 to-black p-12 backdrop-blur">

        <div className="text-center">

          <p className="uppercase tracking-[0.35em] text-zinc-500">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-6xl">
            Let's Create
            <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
              {" "}Exceptional Sound
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-400">
            From feature films and OTT productions to animation
            projects and commercials, PSK Mix Studios delivers
            professional audio post-production tailored to your story.
          </p>

        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8 text-center">
            <h3 className="text-xl font-semibold">
              📞 Phone
            </h3>

            <p className="mt-3 text-zinc-400">
              +91 XXXXX XXXXX
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8 text-center">
            <h3 className="text-xl font-semibold">
              ✉ Email
            </h3>

            <p className="mt-3 text-zinc-400 break-all">
              contact@pskmixstudio.com
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8 text-center">
            <h3 className="text-xl font-semibold">
              📍 Location
            </h3>

            <p className="mt-3 text-zinc-400">
              Hyderabad, Telangana
            </p>
          </div>

        </div>

        <div className="mt-12 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8 text-center">

          <h3 className="text-2xl font-semibold">
            Available For
          </h3>

          <div className="mt-6 flex flex-wrap justify-center gap-3">

            <span className="rounded-full border border-zinc-700 px-4 py-2">
              Feature Films
            </span>

            <span className="rounded-full border border-zinc-700 px-4 py-2">
              OTT Content
            </span>

            <span className="rounded-full border border-zinc-700 px-4 py-2">
              Animation Projects
            </span>

            <span className="rounded-full border border-zinc-700 px-4 py-2">
              Commercials
            </span>

          </div>

        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <a
            href="tel:+91XXXXXXXXXX"
            className="rounded-lg bg-gradient-to-r from-zinc-200 to-zinc-400 px-8 py-4 font-semibold text-black transition hover:scale-105"
          >
            Call Now
          </a>

          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-zinc-600 px-8 py-4 transition hover:border-zinc-400"
          >
            WhatsApp
          </a>

        </div>

      </div>
    </section>
  );
}