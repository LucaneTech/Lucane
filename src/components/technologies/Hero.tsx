import React from "react";
import { motion, useAnimation,type Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "../../ui/Button";

const Hero: React.FC = () => {
  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });

  React.useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [controls, inView]);

  // Variants typés TS pour fadeUp
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: (custom: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.42, 0, 0.58, 1], // Bézier pour TS
        delay: custom,
      },
    }),
  };

  return (
    <motion.section
      ref={ref}
      className="relative flex flex-col items-center justify-center text-center text-gray-700 px-4 overflow-hidden mt-48"
      initial="hidden"
      animate={controls}
    >
      {/* Heading */}
      <motion.h1
        className="text-3xl sm:text-5xl md:text-6xl font-bold max-w-4xl main-color leading-tight"
        variants={fadeUp}
        custom={0}
      >
        <span className="text-black dark:text-white">
          Le moyen le plus rapide{" "}
        </span>
        de passer de l’idée à l’impact...
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="max-w-xl mt-6 text-gray-600 dark:text-gray-200"
        variants={fadeUp}
        custom={0.3}
      >
        Notre plateforme vous aide à créer, tester et livrer plus rapidement,
        afin que vous puissiez vous concentrer sur ce qui compte.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="flex flex-row justify-center items-center gap-6 mt-8"
        variants={fadeUp}
        custom={0.6}
      >
        <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
          <Button label="Nous contactez" changeColor="primary" to="/contact" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
          <Button label="Découvrez nos projets" changeColor="secondary" to="/projets" />
        </motion.div>
      </motion.div>

      {/* Hero image */}
      <motion.div
        className="w-full max-w-7xl mt-10"
        variants={fadeUp}
        custom={0.9}
      >
        <motion.img
          src="images/technologies/hero.png"
          alt="Hero"
          loading="lazy"
          className="w-full h-[450px] object-cover rounded-xl shadow-2xl cursor-pointer"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.4, ease: [0.42, 0, 0.58, 1] }}
        />
      </motion.div>

      {/* Subtle glow overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.2 } : { opacity: 0 }}
        transition={{ duration: 1.2, ease: [0.42, 0, 0.58, 1] }}
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,255,255,0.05), transparent 70%)",
        }}
      />
    </motion.section>
  );
};

export default Hero;
