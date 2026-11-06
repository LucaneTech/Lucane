import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import { useLocation } from "react-router-dom";
import { hasFinePointer, prefersReducedMotion } from "./presets";

/** Remonte en haut de page à chaque changement d'adresse (remplace ScrollToTop). */
function RouteReset() {
  const { pathname } = useLocation();
  const lenis = useLenis();
  useEffect(() => {
    if (lenis) lenis.scrollTo(0, { immediate: true, force: true });
    else window.scrollTo(0, 0);
  }, [pathname, lenis]);
  return null;
}

/** Défilement inertiel Lenis sur ordinateur ; défilement natif sur tactile ou en mouvement réduit. */
export default function SmoothScroll({ children }: { children: ReactNode }) {
  const [enabled] = useState(() => hasFinePointer() && !prefersReducedMotion());

  if (!enabled) {
    return (
      <>
        <RouteReset />
        {children}
      </>
    );
  }

  return (
    <ReactLenis root options={{ lerp: 0.1, smoothWheel: true }}>
      <RouteReset />
      {children}
    </ReactLenis>
  );
}
