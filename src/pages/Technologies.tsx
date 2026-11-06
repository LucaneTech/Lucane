/**
 * Technologies (phase 7) : les 5 sections conservées (pile technique, choix techniques, en production, veille),
 * recolorées pour les deux thèmes ; les sections sombres deviennent de grands panneaux arrondis.
 */
import Hero from "../components/technologies/Hero";
import StackTopography from "../components/technologies/StackTopography";
import Arbitrages from "../components/technologies/Arbitrages";
import TechInProd from "../components/technologies/TechInProd";
import Veille from "../components/technologies/Veille";
import FinalCta from "../components/home/v2/FinalCta";
import { useSeo } from "../ui/useSeo";

export default function Technologies() {
  useSeo("Technologies", "React, TypeScript, Django, Node.js, PostgreSQL, Docker : la pile technique de Lucane Tech et les raisons de chaque choix.");
  return (
    <>
      <Hero />
      <StackTopography />
      <Arbitrages />
      <TechInProd />
      <Veille />
      <FinalCta />
    </>
  );
}
