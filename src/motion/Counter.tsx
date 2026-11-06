import { useCallback, useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";
import { ease } from "./presets";

interface CounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

/** Compteur animé (0 → valeur) à l'apparition ; rejoue au survol. Écrit dans le DOM, sans re-rendu. */
export default function Counter({ value, prefix = "", suffix = "", duration = 1.6, className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  const format = useCallback(
    (n: number) => `${prefix}${Math.round(n).toLocaleString("fr-FR")}${suffix}`,
    [prefix, suffix]
  );

  const run = useCallback(() => {
    const node = ref.current;
    if (!node) return;
    animate(0, value, { duration, ease: ease.out, onUpdate: (v) => (node.textContent = format(v)) });
  }, [value, duration, format]);

  useEffect(() => {
    if (inView) run();
  }, [inView, run]);

  return (
    <span ref={ref} onMouseEnter={run} className={className} style={{ fontVariantNumeric: "tabular-nums" }}>
      {format(0)}
    </span>
  );
}
