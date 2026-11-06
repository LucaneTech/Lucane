import { useScroll, useSpring, useTransform, useVelocity } from "framer-motion";

/** Vitesse de défilement lissée, convertie en inclinaison (degrés) pour les titres et bandeaux. */
export function useScrollSkew(maxDeg = 4) {
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smooth = useSpring(velocity, { stiffness: 120, damping: 30, mass: 0.6 });
  return useTransform(smooth, [-2500, 0, 2500], [maxDeg, 0, -maxDeg], { clamp: true });
}

/** Facteur de vitesse lissé pour accélérer / inverser les bandeaux défilants (≈ −1 à 1, non borné). */
export function useScrollVelocityFactor() {
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smooth = useSpring(velocity, { stiffness: 80, damping: 40 });
  return useTransform(smooth, [-2000, 0, 2000], [-1, 0, 1], { clamp: false });
}
