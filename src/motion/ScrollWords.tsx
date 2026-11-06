import { useRef } from "react";
import type { ElementType } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";

function Word({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  const y = useTransform(progress, range, [6, 0]);
  return (
    <motion.span style={{ opacity, y }} className="inline-block will-change-transform">
      {children}&nbsp;
    </motion.span>
  );
}

/** Phrase qui s'allume mot à mot au fil du défilement de la section. */
export default function ScrollWords({ text, as: Tag = "p", className }: { text: string; as?: ElementType; className?: string }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.4"] });
  const words = text.split(" ");

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      <span aria-hidden>
        {words.map((word, i) => (
          <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
            {word}
          </Word>
        ))}
      </span>
    </Tag>
  );
}
