import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion"; 
import Card from "../ui/Card";

export interface ServiceProp {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  imageUrl?: string;
  color?: string;
  bgColor?: string;
  borderColor?: string;
}

interface ServicesCarouselProps {
  services: ServiceProp[];
  title?: string;
  description?: string;
}

const CardSection: React.FC<ServicesCarouselProps> = ({
  services,
  title = "Nos services",
  description,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [autoScroll, setAutoScroll] = useState(true);

  useEffect(() => {
    if (!scrollRef.current || !autoScroll) return;
    const container = scrollRef.current;
    let scrollPos = 0;
    let animationFrame: number;

    const scroll = () => {
      if (!autoScroll) return;
      scrollPos += 1;
      if (scrollPos >= container.scrollWidth - container.clientWidth) {
        scrollPos = 0;
      }
      container.scrollLeft = scrollPos;
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrame);
  }, [autoScroll]);

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
    <motion.section
      className="flex flex-col px-4 py-4 md:py-10 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 dark:text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        {title.split(" ").map((word, i) =>
          i === 1 ? (
            <span key={i} className="main-color">
              {" "}
              {word}{" "}
            </span>
          ) : (
            word + " "
          )
        )}
      </motion.h2>

      <motion.p
        className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-3 dark:text-white"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        {description}
      </motion.p>

      <motion.div
        className="flex items-center justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <div
          ref={scrollRef}
          className="
            flex flex-nowrap overflow-x-auto md:flex-wrap md:overflow-visible
            gap-6 max-w-6xl w-full scroll-smooth py-4
            snap-x snap-mandatory scrollbar-hide
          "
        >
          {services.map((item, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-4/5 sm:w-[45%] lg:w-[30%] flex justify-center snap-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
              whileHover={{ scale: 1.03 }} 
            >
              <Card {...item} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="md:hidden flex justify-center mt-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        
      </motion.div>
    </motion.section>
  );
};

export default CardSection;
