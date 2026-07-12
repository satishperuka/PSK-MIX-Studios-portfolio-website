"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import WhyCard from "./whycard";
import EquipmentCard from "./equipmentcard";

import {
  Film,
  Clapperboard,
  Headphones,
  Speaker,
  Building2,
} from "lucide-react";

export default function WhyChoose() {
  const points = [
    {
      number: "01",
      bg: "EXPERIENCE",
      title: "25+ Years of Industry Experience",
      description:
        "Over two decades of professional expertise in feature films, OTT productions, commercials and animation projects.",
      icon: (
        <Film
          size={30}
          strokeWidth={1.5}
          className="text-zinc-300"
        />
      ),
    },

    {
      number: "02",
      bg: "EQUIPMENT",
      title: "World-Class Studio Equipment",
      description:
        "Powered by industry-leading cinema and audio technology trusted for professional film production.",
      equipment: true,
      icon: (
        <Speaker
          size={30}
          strokeWidth={1.5}
          className="text-zinc-300"
        />
      ),
    },

    {
      number: "03",
      bg: "FILMS",
      title: "Feature Films, OTT & Animation",
      description:
        "Contributed to Feature Films, Green Gold Productions, Usha Kiran Movies and numerous commercial productions.",
      icon: (
        <Clapperboard
          size={30}
          strokeWidth={1.5}
          className="text-zinc-300"
        />
      ),
    },

    {
      number: "04",
      bg: "MIXING",
      title: "Complete Mixing Solutions",
      description:
        "Professional Stereo Mixing, 5.1 Surround Mixing and Dolby Atmos Mixing using industry-standard workflows.",
      icon: (
        <Headphones
          size={30}
          strokeWidth={1.5}
          className="text-zinc-300"
        />
      ),
    },

    {
      number: "05",
      bg: "LEGACY",
      title: "Professional Experience at Ramoji Film City",
      description:
        "Built upon years of experience at Ramoji Film City before establishing PSK Mix Studios.",
      icon: (
        <Building2
          size={30}
          strokeWidth={1.5}
          className="text-zinc-300"
        />
      ),
    },
  ];

  const autoplay = useRef(
    Autoplay({
      delay: 6000,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    })
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      slidesToScroll: 1,
      skipSnaps: false,
      dragFree: false,
      containScroll: false,
    },
    [autoplay.current]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;

    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();

    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);


  useEffect(() => {
  if (!emblaApi) return;

  autoplay.current.play();
}, [emblaApi]);



  return (
    <section
    id="whychoose"
    className="w-full py-24 overflow-hidden"

    >
      <div className="text-center">

        <p className="uppercase tracking-[0.35em] text-zinc-500">
          Why Choose Us
        </p>

        <h2 className="mt-4 text-4xl font-bold md:text-6xl">
          Why
          <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
            {" "}PSK MIX STUDIOS
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg text-zinc-400">
          Delivering world-class film audio post-production
          backed by decades of industry experience.
        </p>

      </div>
    {/* Carousel */}
<div className="relative mt-24">

  {/* Background Glow */}
  <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-white/[0.05] via-zinc-400/[0.06] to-white/[0.05] blur-[180px]" />

  {/* Embla Viewport */}
  <div
    ref={emblaRef}
    className="overflow-hidden"
  >

    {/* Embla Container */}
    <div className="flex items-center">

      {points.map((point, index) => (

        <div
          key={point.number}
          className="flex-[0_0_560px] px-6"
        >

          <div
            className={`
              transition-all
              duration-700
              ease-[cubic-bezier(.22,1,.36,1)]
              ${
                selectedIndex === index
                  ? "scale-100 opacity-100"
                  : "scale-[0.82] opacity-35"
              }
            `}
          >

            {point.equipment ? (

              <EquipmentCard />

            ) : (

              <WhyCard
                number={point.number}
                bg={point.bg}
                title={point.title}
                description={point.description}
                icon={point.icon}
              />

            )}

          </div>

        </div>

      ))}

    </div>

  </div>

</div>

   
    
    </section>
  );
}