import { motion, useScroll, useSpring } from "framer-motion";

/** Filet teal de 2 px en haut de l'écran qui suit la progression de lecture (sans re-rendu). */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });
  return (
    <motion.div
      aria-hidden
      className="fixed left-0 right-0 top-0 z-[9500] h-0.5 origin-left bg-primary"
      style={{ scaleX }}
    />
  );
}
