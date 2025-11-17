import { useRef } from "react";
import { motion, useInView,type Variants,type Transition } from "framer-motion";

const MemoryGrid = () => {
  const images = [
    "images/home/memory1.jpeg",
    "images/home/memory2.jpeg",
    "images/home/memory3.jpeg",
    "images/home/memory5.jpeg",
    "images/home/memory4.jpeg",
    "images/home/memory6.jpeg",
  ];

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const transition: Transition = { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] };

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const getItemVariants = (idx: number): Variants => ({
    hidden: { opacity: 0, y: idx % 2 === 0 ? 30 : -30, x: idx % 3 === 0 ? -20 : 20 },
    visible: { opacity: 1, y: 0, x: 0, transition },
  });

 
  const floatAnimation = {
    y: [0, -8, 0, 8, 0],
    x: [0, 4, 0, -4, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      repeatType: "loop",
      ease: [0.42, 0, 0.58, 1], 
    } as Transition,
  };

  return (
    <div ref={ref} className="w-full flex justify-center p-8 mb-6">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-12 max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {images.map((src, idx) => (
          <motion.div key={idx} variants={getItemVariants(idx)} className="w-full">
            <motion.img
              src={src}
              alt={`template site projets réalisé par lucane: ${idx}`}
              className="w-full h-auto rounded-lg object-cover shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-500"
              whileHover={{ scale: 1.08 }}
              animate={floatAnimation}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default MemoryGrid;
