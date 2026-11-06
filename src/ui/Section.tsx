import { Children, useRef } from "react";
import type { ReactNode } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { cn } from "./utils";
import { dur, ease } from "../motion/presets";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  /** default = canvas · alt = canvas-alt · inverse = fond inversé (noir en clair, clair en sombre) */
  tone?: "default" | "alt" | "inverse";
  /** Retire le conteneur 1440 px (sections pleine largeur). */
  bleed?: boolean;
  labelledBy?: string;
  /**
   * Animation automatique : les enfants directs entrent en cascade et la section recule
   * légèrement quand elle quitte l'écran. Mettre `false` pour une chorégraphie propre.
   */
  animate?: boolean;
}

const TONES = {
  default: "bg-canvas text-ink",
  alt: "bg-canvas-alt text-ink",
  inverse: "bg-canvas-inverse text-on-inverse",
};

/** Section standard : rythme vertical commun, conteneur 1440 px, fond selon le ton, mouvement automatique. */
export default function Section({ children, id, className, tone = "default", bleed = false, labelledBy, animate = true }: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.12 });

  // Sortie : la section recule (échelle) et s'estompe pendant que la suivante arrive.
  const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.35]);

  const content = animate
    ? Children.toArray(children).map((child, i) => (
        <motion.div
          key={i}
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : undefined}
          transition={{ duration: dur.slow, ease: ease.out, delay: i * 0.1 }}
        >
          {child}
        </motion.div>
      ))
    : children;

  return (
    <section ref={ref} id={id} aria-labelledby={labelledBy} className={cn("relative overflow-clip py-24 md:py-32", TONES[tone], className)}>
      <motion.div style={animate ? { scale, opacity } : undefined} className="origin-top will-change-transform">
        {bleed ? content : <div className="mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-16">{content}</div>}
      </motion.div>
    </section>
  );
}
