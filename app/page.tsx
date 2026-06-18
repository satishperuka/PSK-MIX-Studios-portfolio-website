import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/about";
import Services from "./components/services";
import Contact from "./components/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl"></div>

<div className="absolute right-0 top-[600px] h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-3xl"></div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
    </main>
  );
}