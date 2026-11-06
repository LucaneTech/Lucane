import { useRef } from "react";
import type { ReactNode, MouseEvent } from "react";
import { motion, useSpring } from "framer-motion";
import { hasFinePointer } from "./presets";

const spring = { stiffness: 180, damping: 14, mass: 0.4 };

/** L'élément est attiré par le curseur (strength = part de la distance suivie), retour élastique. */
export default function Magnetic({ children, strength = 0.3, className }: { children: ReactNode; strength?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(0, spring);
  const y = useSpring(0, spring);

  const onMove = (e: MouseEvent) => {
    if (!ref.current || !hasFinePointer()) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div ref={ref} style={{ x, y }} onMouseMove={onMove} onMouseLeave={onLeave} className={className ?? "inline-flex"}>
      {children}
    </motion.div>
  );
}
