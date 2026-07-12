export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/91XXXXXXXXXX"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/90 px-5 py-3 backdrop-blur-xl transition hover:scale-110 hover:border-zinc-400"
    >
      <span className="text-xl">💬</span>

      <span className="font-medium">
        WhatsApp
      </span>
    </a>
  );
}