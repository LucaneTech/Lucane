import { useRef } from "react";
import type { ElementType } from "react";
import { motion, useInView } from "framer-motion";
import { dur, ease, stagger as staggers } from "./presets";

interface SplitTextProps {
  text: string;
  as?: ElementType;
  className?: string;
  /** Découpage : par mot (défaut) ou par lettre. */
  by?: "word" | "char";
  delay?: number;
  stagger?: number;
  /** Rejouer à chaque entrée dans l'écran. */
  repeat?: boolean;
  /** Déclenchement immédiat (hero) au lieu de l'entrée dans l'écran. */
  immediate?: boolean;
  /** Contrôle explicite : si défini, l'animation suit cette valeur (ex. fin de l'ouverture). */
  play?: boolean;
}

/** Texte qui apparaît mot par mot ou lettre par lettre, chaque morceau montant dans son masque. */
export default function SplitText({
  text,
  as: Tag = "span",
  className,
  by = "word",
  delay = 0,
  stagger,
  repeat = false,
  immediate = false,
  play,
}: SplitTextProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: !repeat, amount: 0.3 });
  const show = play ?? (immediate || inView);
  const step = stagger ?? (by === "char" ? staggers.tight : staggers.base);

  const words = text.split(" ");
  let index = 0;

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {words.map((word, w) => (
        <span
          key={w}
          aria-hidden
          className="inline-block overflow-hidden whitespace-nowrap align-bottom pb-[0.1em] -mb-[0.1em]"
        >
          {(by === "char" ? Array.from(word) : [word]).map((piece, p) => {
            const i = index++;
            return (
              <motion.span
                key={p}
                className="inline-block will-change-transform"
                initial={{ y: "115%", rotate: by === "char" ? 8 : 4 }}
                animate={show ? { y: "0%", rotate: 0 } : { y: "115%", rotate: 4 }}
                transition={{ duration: dur.slow, ease: ease.out, delay: delay + i * step }}
              >
                {piece}
              </motion.span>
            );
          })}
          {w < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </Tag>
  );
}
