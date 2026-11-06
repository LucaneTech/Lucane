/**
 * Réalisations (phase 5) : en-tête, grille filtrable de tous les projets (chaque carte mène à son
 * étude de cas), puis les sections conservées de l'ancienne page (technologies, frise, chiffres, carte).
 * Les témoignages passent par le filtre d'accord client (src/data/testimonials.ts).
 */
import ProjectsHero from "../components/projects/v2/ProjectsHero";
import ProjectsGrid from "../components/projects/v2/ProjectsGrid";
import TechDNA from "../components/projects/TechDNA";
import ProjectTimeline from "../components/projects/ProjectTimeline";
import ImpactStrip from "../components/projects/ImpactStrip";
import GeographicReach from "../components/projects/GeographicReach";
import Testimonials from "../components/home/v2/Testimonials";
import FinalCta from "../components/home/v2/FinalCta";
import { useSeo } from "../ui/useSeo";

export default function Projects() {
  useSeo("Réalisations", "Les projets en ligne réalisés par Lucane Tech : sites vitrines, applications métier et boutique en ligne pour l'éducation, l'agriculture, le conseil, le tourisme…");
  return (
    <>
      <ProjectsHero />
      <ProjectsGrid />
      <TechDNA />
      <ProjectTimeline />
      <ImpactStrip />
      <Testimonials />
      <GeographicReach />
      <FinalCta />
    </>
  );
}
