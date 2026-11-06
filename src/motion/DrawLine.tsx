import { useRef } from "react";
import { motion, useInView, useScroll } from "framer-motion";
import { cn } from "../ui/utils";
import { dur, ease } from "./presets";

interface DrawLineProps {
  orientation?: "horizontal" | "vertical";
  /** "view" : se trace à l'entrée ; "scroll" : suit la progression du défilement. */
  mode?: "view" | "scroll";
  className?: string;
  delay?: number;
}

/** Filet de 1 px qui se trace (par échelle, donc fluide). Couleur = currentColor. */
export default function DrawLine({ orientation = "horizontal", mode = "view", className, delay = 0 }: DrawLineProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.9", "end 0.5"] });
  const horizontal = orientation === "horizontal";

  const scrollStyle = horizontal ? { scaleX: scrollYProgress } : { scaleY: scrollYProgress };
  const hidden = horizontal ? { scaleX: 0 } : { scaleY: 0 };
  const shown = horizontal ? { scaleX: 1 } : { scaleY: 1 };

  return (
    <div ref={ref} className={cn(horizontal ? "h-px w-full" : "h-full w-px", className)}>
      <motion.div
        className={cn("h-full w-full bg-current", horizontal ? "origin-left" : "origin-top")}
        style={mode === "scroll" ? scrollStyle : undefined}
        initial={mode === "view" ? hidden : undefined}
        animate={mode === "view" && inView ? shown : undefined}
        transition={{ duration: dur.xslow, ease: ease.out, delay }}
      />
    </div>
  );
}
