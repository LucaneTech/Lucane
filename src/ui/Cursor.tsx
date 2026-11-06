import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { hasFinePointer } from "../motion/presets";

/**
 * Curseur personnalisé : un point qui suit exactement la souris et un cadre qui le suit
 * avec un ressort. Sur un élément cliquable, le cadre s'agrandit ; sur un élément portant
 * `data-cursor="Voir"` (ou tout autre libellé), il devient un aplat teal avec ce libellé.
 * Absent sur écran tactile.
 */
export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [pressed, setPressed] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const rx = useSpring(x, { stiffness: 260, damping: 28, mass: 0.6 });
  const ry = useSpring(y, { stiffness: 260, damping: 28, mass: 0.6 });

  useEffect(() => {
    if (!hasFinePointer()) return;
    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    const onOver = (e: MouseEvent) => {
      const target = e.target as Element | null;
      const labelled = target?.closest<HTMLElement>("[data-cursor]");
      const value = labelled?.dataset.cursor;
      if (value && value !== "pointer") {
        setLabel(value);
        setHovering(true);
        return;
      }
      setLabel(null);
      setHovering(Boolean(target?.closest("a, button, [role='button'], label, select, [data-cursor]")));
    };
    const onLeaveWindow = () => setVisible(false);
    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver);
    document.documentElement.addEventListener("mouseleave", onLeaveWindow);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeaveWindow);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, [x, y]);

  if (!enabled) return null;

  const size = label ? 88 : hovering ? 56 : 32;

  return (
    <>
      {/* Cadre qui suit avec un ressort */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[10000] flex items-center justify-center"
        style={{ x: rx, y: ry, translateX: "-50%", translateY: "-50%" }}
        animate={{ width: size, height: size, opacity: visible ? 1 : 0, scale: pressed ? 0.85 : 1, rotate: hovering && !label ? 45 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 26 }}
      >
        <motion.span
          className="absolute inset-0 border"
          animate={{
            backgroundColor: label ? "var(--primary)" : "rgba(0,0,0,0)",
            borderColor: label ? "var(--primary)" : "var(--ink)",
            opacity: label ? 1 : 0.5,
          }}
          transition={{ duration: 0.3 }}
        />
        <AnimatePresence>
          {label && (
            <motion.span
              key={label}
              className="eyebrow relative text-[10px] tracking-[0.14em] text-on-primary"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Point exact */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[10001] h-1.5 w-1.5 rounded-full bg-primary"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        animate={{ opacity: visible && !label ? 1 : 0, scale: hovering ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}
