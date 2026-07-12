export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black/50">
      <div className="mx-auto max-w-7xl px-6 py-10">

        <div className="text-center">

          <h3 className="bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-2xl font-bold text-transparent">
            PSK MIX STUDIOS
          </h3>

          <p className="mt-3 text-zinc-500">
            Film Audio Post Production
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-6">

            <a href="#about" className="text-zinc-400 hover:text-white">
              About
            </a>

            <a href="#services" className="text-zinc-400 hover:text-white">
              Services
            </a>

            <a href="#filmography" className="text-zinc-400 hover:text-white">
              Filmography
            </a>

            <a href="#contact" className="text-zinc-400 hover:text-white">
              Contact
            </a>

          </div>

          <p className="mt-8 text-sm text-zinc-600">
            © 2026 PSK Mix Studios. All Rights Reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}