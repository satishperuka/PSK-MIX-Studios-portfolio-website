export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-white/10 bg-black/80 px-6 py-4 backdrop-blur">
      <h1 className="text-xl font-bold">PSK Mix Studios</h1>

      <div className="hidden gap-8 md:flex">
        <a href="#about" className="hover:text-cyan-400">
          About
        </a>

        <a href="#services" className="hover:text-cyan-400">
          Services
        </a>

        <a href="#contact" className="hover:text-cyan-400">
          Contact
        </a>
      </div>
    </nav>
  );
}