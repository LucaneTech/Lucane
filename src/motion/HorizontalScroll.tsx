import { useLayoutEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "../ui/utils";

/**
 * Section fixée qui défile horizontalement pendant que la page descend.
 * Sous 1024 px ou sur tactile : carrousel natif à glisser.
 */
export default function HorizontalScroll({
  children,
  className,
  trackClassName,
}: {
  children: ReactNode;
  className?: string;
  trackClassName?: string;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);
  const [pinned, setPinned] = useState(true);

  useLayoutEffect(() => {
    const measure = () => {
      setPinned(window.matchMedia("(min-width: 1024px) and (pointer: fine)").matches);
      if (trackRef.current) setDistance(Math.max(0, trackRef.current.scrollWidth - window.innerWidth));
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);

  if (!pinned) {
    return (
      <section ref={sectionRef} className={className}>
        <div
          ref={trackRef}
          className={cn("flex snap-x snap-mandatory overflow-x-auto [scrollbar-width:none]", trackClassName)}
          data-lenis-prevent
        >
          {children}
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className={cn("relative", className)} style={{ height: `calc(100vh + ${distance}px)` }}>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div ref={trackRef} style={{ x }} className={cn("flex will-change-transform", trackClassName)}>
          {children}
        </motion.div>
      </div>
    </section>
  );
}
