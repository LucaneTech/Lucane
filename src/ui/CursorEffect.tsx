import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorEffect() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 28, stiffness: 180, mass: 0.5 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hasPointer, setHasPointer] = useState(false);

  useEffect(() => {
    const pointerQuery = window.matchMedia("(pointer: fine)");
    const pointerAvailable = pointerQuery.matches;
    setHasPointer(pointerAvailable);

    if (!pointerAvailable) return;

    // Hide the system cursor on pointer-fine devices only
    document.body.style.cursor = "none";

    const onMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const onEnterClickable = (e: MouseEvent) => {
      if ((e.target as Element).closest("a, button, [data-cursor='pointer']")) {
        setIsHovering(true);
      }
    };
    const onLeaveClickable = () => setIsHovering(false);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onEnterClickable);
    document.addEventListener("mouseout", onLeaveClickable);

    return () => {
      // Restore system cursor on cleanup
      document.body.style.cursor = "";
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onEnterClickable);
      document.removeEventListener("mouseout", onLeaveClickable);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!hasPointer) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        width: isHovering ? 40 : 12,
        height: isHovering ? 40 : 12,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.2 }}
    >
      <div className="w-full h-full rounded-full bg-primary" />
    </motion.div>
  );
}
