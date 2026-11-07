import type { ReactNode } from "react";
import { motion } from "framer-motion";
import IrisOrb from "./IrisOrb";
import SplitText from "../motion/SplitText";
import { MouseParallax } from "../motion/Parallax";
import { dur, ease } from "../motion/presets";

interface PageHeroProps {
  /** Ancien badge en tête de page : n'est plus affiché. */
  eyebrow?: string;
  /** Ligne fine puis ligne grasse du titre géant. */
  light: string;
  bold: string;
  lead?: string;
  children?: ReactNode;
  tone?: "teal" | "sunset" | "indigo";
}

/** En-tête commun des pages intérieures : titre géant fin + gras, chapeau, formes irisées qui suivent la souris. */
export default function PageHero({ light, bold, lead, children, tone = "teal" }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pb-16 pt-36 md:pb-24 md:pt-44" aria-labelledby="page-title">
      <MouseParallax depth={26} className="pointer-events-none absolute right-[5%] top-[16%]">
        <IrisOrb className="relative h-48 w-48 md:h-80 md:w-80" tone={tone} />
      </MouseParallax>
      <MouseParallax depth={-18} className="pointer-events-none absolute bottom-[6%] right-[32%] hidden md:block">
        <IrisOrb className="relative h-28 w-28 md:h-36 md:w-36" tone={tone === "teal" ? "sunset" : "teal"} duration={11} />
      </MouseParallax>

      <div className="relative mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-16">
        <h1 id="page-title" className="max-w-5xl font-display text-[clamp(2.4rem,6vw,6rem)] leading-[0.92] tracking-[-0.045em] text-ink">
          <SplitText text={light} by="char" className="block font-light" stagger={0.02} immediate />
          <SplitText text={bold} by="char" className="block font-extrabold" delay={0.3} stagger={0.02} immediate />
        </h1>
        {lead && (
          <motion.p
            className="lead mt-8 max-w-2xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: dur.slow, ease: ease.out, delay: 0.7 }}
          >
            {lead}
          </motion.p>
        )}
        {children && (
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: dur.slow, ease: ease.out, delay: 0.85 }}
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
