export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/70 backdrop-blur-2xl shadow-[0_0_40px_rgba(255,255,255,0.03)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        <div>
          <h1 className="bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-xl font-bold tracking-[0.2em] text-transparent">
            PSK MIX STUDIOS
          </h1>

          <p className="text-xs text-zinc-500">
            Film Audio Post Production
          </p>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#about" className="text-zinc-400 transition hover:text-white">
            About
          </a>

          <a href="#services" className="text-zinc-400 transition hover:text-white">
            Services
          </a>

          <a href="#filmography" className="text-zinc-400 transition hover:text-white">
            Filmography
          </a>

          <a href="#contact" className="text-zinc-400 transition hover:text-white">
            Contact
          </a>
        </div>

      </div>
    </nav>
  );
}