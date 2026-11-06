/**
 * Accueil (phase 3 de la refonte) — un parcours en sections, chacune avec son « moment signature ».
 * Contenus : src/data/*. Mouvements : src/motion/*. Direction artistique : plan, section 0.1.
 */
import Hero from "../components/home/v2/Hero";
import TrustBand from "../components/home/v2/TrustBand";
import Manifesto from "../components/home/v2/Manifesto";
import ServicesSticky from "../components/home/v2/ServicesSticky";
import Sectors from "../components/home/v2/Sectors";
import FeaturedWork from "../components/home/v2/FeaturedWork";
import ProcessTimeline from "../components/home/v2/ProcessTimeline";
import DesignStudio from "../components/home/v2/DesignStudio";
import TeamSection from "../components/home/v2/TeamSection";
import Guarantees from "../components/home/v2/Guarantees";
import Testimonials from "../components/home/v2/Testimonials";
import QuickQuote from "../components/home/v2/QuickQuote";
import FinalCta from "../components/home/v2/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBand />
      <Manifesto />
      <ServicesSticky />
      <Sectors />
      <FeaturedWork />
      <ProcessTimeline />
      <DesignStudio />
      <TeamSection />
      <Guarantees />
      <Testimonials />
      <QuickQuote />
      <FinalCta />
    </>
  );
}
