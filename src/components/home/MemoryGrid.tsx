import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const images = [
  "images/home/memory1.jpeg",
  "images/home/memory2.jpeg",
  "images/home/memory3.jpeg",
  "images/home/memory5.jpeg",
  "images/home/memory4.jpeg",
  "images/home/memory6.jpeg",
];

const MemoryGrid: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 xl:px-24 bg-surface-alt">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">
            Behind the scenes
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-ink mb-4">
            L'équipe <span className="text-primary">en action</span>
          </h2>
          <p className="text-ink-muted max-w-xl mx-auto leading-relaxed">
            Des moments qui illustrent notre façon de travailler, collaborer et livrer.
          </p>
        </motion.div>

        {/* Grid layout */}
        <div ref={ref} className="grid grid-cols-3 gap-2 md:gap-3">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              className={`relative overflow-hidden rounded-md group ${idx === 0 ? "col-span-2 row-span-2" : "col-span-1"}`}
              initial={{ opacity: 0, y: idx % 2 === 0 ? 30 : -30, x: idx % 3 === 0 ? -20 : 20 }}
              animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.img
                src={src}
                alt={`Équipe Lucane — moment ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                style={{ aspectRatio: idx === 0 ? "4/3" : "1/1" }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemoryGrid;
