import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { followSpring, hasFinePointer } from "./presets";

/** Décale l'enfant verticalement selon le défilement. speed > 0 : plus lent que la page ; < 0 : plus rapide. */
export function Parallax({ children, speed = 0.2, className }: { children: ReactNode; speed?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [speed * -160, speed * 160]);
  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

/** Décale l'enfant selon la position de la souris dans la fenêtre. depth = amplitude en pixels. */
export function MouseParallax({ children, depth = 20, className }: { children: ReactNode; depth?: number; className?: string }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(useTransform(mx, (v) => v * depth), followSpring);
  const y = useSpring(useTransform(my, (v) => v * depth), followSpring);

  useEffect(() => {
    if (!hasFinePointer()) return;
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <motion.div style={{ x, y }} className={className}>
      {children}
    </motion.div>
  );
}
