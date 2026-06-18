import Image from "next/image";

export default function About() {
  return (
    <section id="about"className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid items-center gap-12 md:grid-cols-2">

        <div>
          <Image
            src="/st.jpeg"
            alt="P Satish Kumar"
            width={600}
            height={700}
            className="rounded-3xl object-cover"
          />
        </div>

        <div>
          <p className="text-cyan-400 uppercase tracking-[0.3em]">
            About PSK Mix Studios
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            30 Years of Excellence in Film Audio
          </h2>

          <p className="mt-6 leading-8 text-gray-400">
            P. Satish Kumar is a veteran sound engineer with nearly
            three decades of experience in film audio post-production.
            After years of contributing to major productions at
            Ramoji Film City, he established PSK Mix Studios to
            provide professional mixing, mastering, Foley and sound
            design services for filmmakers and production houses.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">

            <div className="rounded-xl border border-white/10 p-4">
              <h3 className="text-3xl font-bold">30+</h3>
              <p className="text-gray-400">Years Experience</p>
            </div>

            <div className="rounded-xl border border-white/10 p-4">
              <h3 className="text-3xl font-bold">RFC</h3>
              <p className="text-gray-400">Former Professional</p>
            </div>

            <div className="rounded-xl border border-white/10 p-4">
              <h3 className="text-3xl font-bold">PSK</h3>
              <p className="text-gray-400">Mix Studios</p>
            </div>

            <div className="rounded-xl border border-white/10 p-4">
              <h3 className="text-3xl font-bold">Film</h3>
              <p className="text-gray-400">Audio Specialist</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}