import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Reveal from "./components/reveal";
import About from "./components/about";
import WhyChoose from "./components/whychoose";
import Services from "./components/services";
import Filmography from "./components/filmography";
import Contact from "./components/contact";
import Footer from "./components/footer";
import WhatsappButton from "./components/whatsappbutton";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black text-white">

      {/* Metallic Ambient Glow */}
      <div className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-white/[0.03] blur-[180px]"></div>

      <div className="absolute right-0 top-[400px] h-[500px] w-[500px] rounded-full bg-zinc-400/[0.05] blur-[180px]"></div>

      <Navbar />
      <Hero />
      <Reveal>
      <About />
      </Reveal>
      <Reveal>
      <WhyChoose />
      </Reveal>
      <Reveal>
      <Services />
      </Reveal>
      <Reveal>
      <Filmography />
      </Reveal>
      <Reveal>
      <Contact />
      </Reveal>
      <Footer />
      <WhatsappButton />
    </main>
  );
}