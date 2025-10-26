import React, { useEffect, useRef, useState } from "react";
import { Code, PenTool, BarChart3, Cloud, Cog, Wrench, Play, SquarePause } from "lucide-react";
import Card from "../ui/Card";
interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    title: "Développement Web",
    description: "Sites modernes et responsives.",
    icon: <Code className="w-12 h-12" />,
  },
  {
    title: "Design UX/UI",
    description: "Expériences utilisateurs fluides.",
    icon: <PenTool className="w-12 h-12" />,
  },
  {
    title: "Data Analytics",
    description: "Décisions pilotées par la donnée.",
    icon: <BarChart3 className="w-12 h-12"/>,
  },
  {
    title: "Cloud Services",
    description: "Scalabilité et performance assurées.",
    icon: <Cloud className="w-12 h-12" />,
  },
  {
    title: "Automatisation",
    description: "Gagnez du temps avec des scripts smart.",
    icon: <Cog className="w-12 h-12"/>,
  },
  {
    title: "Maintenance",
    description: "Surveillance et support continu.",
    icon: <Wrench className="w-12 h-12"/>,
  },
];

const ServicesSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [autoScroll, setAutoScroll] = useState(true);

  useEffect(() => {
    if (!scrollRef.current || !autoScroll) return;
    const container = scrollRef.current;
    let scrollPos = 0;
    let animationFrame: number;

    const scroll = () => {
      if (!autoScroll) return;
      scrollPos += 0.5;
      if (scrollPos >= container.scrollWidth - container.clientWidth) {
        scrollPos = 0;
      }
      container.scrollLeft = scrollPos;
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrame);
  }, [autoScroll]);

 //stop the interaction of scroll
  useEffect(() => {
    const stopAutoScroll = () => setAutoScroll(false);
    const container = scrollRef.current;
    if (!container) return;

    container.addEventListener("touchstart", stopAutoScroll);
    container.addEventListener("wheel", stopAutoScroll);
    container.addEventListener("mousedown", stopAutoScroll);

    return () => {
      container.removeEventListener("touchstart", stopAutoScroll);
      container.removeEventListener("wheel", stopAutoScroll);
      container.removeEventListener("mousedown", stopAutoScroll);
    };
  }, []);

  return (
    <section className="flex flex-col bg-white px-4 py-4 md:py-10">
      <h1 className="main-color font-semibold text-center text-2xl md:text-4xl mb-4 md:mb-8">
        Nos services de base
      </h1>

      <div className="flex items-center justify-center">
        <div
          ref={scrollRef}
          className="
            flex flex-nowrap overflow-x-auto md:flex-wrap md:overflow-visible
            gap-6 max-w-6xl w-full scroll-smooth py-4
            snap-x snap-mandatory scrollbar-hide
          "
        >
          {services.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-4/5 sm:w-[45%] lg:w-[30%] flex justify-center snap-center"
            >
              <Card {...item} />
            </div>
          ))}
        </div>
      </div>

      <div className="md:hidden flex justify-center mt-6">
        {autoScroll ? (
          <button
            onClick={() => setAutoScroll(false)}
            className="text-sm text-gray-600 hover:text-indigo-600 transition"
          >
            <span className="flex flex-row items-center gap-2 ">
                 <SquarePause className="main-color w-8 h-8 text-bold" />
                 <p className="text-lg text-gray-800">Arrêter</p>
            </span>
          </button>
        ) : (
          <button
            onClick={() => setAutoScroll(true)}
            className="text-sm text-gray-600 text-hover"
          > 
             <span className="flex flex-row items-center gap-2 ">
                 <Play className="main-color w-8 h-8 text-bold" />
                 <p className="text-lg text-gray-800">Relancer</p>
            </span>
          </button>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
