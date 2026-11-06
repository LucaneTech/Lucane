/**
 * À propos (phase 6.2) : en-tête, mission et vision (conservées), chiffres sourcés, équipe et valeurs,
 * où nous sommes (Maroc + relais à Brazzaville), FAQ, appel final.
 */
import { ArrowUpRight } from "lucide-react";
import PageHero from "../ui/PageHero";
import Button from "../ui/Button";
import FaqAccordion from "../ui/FaqAccordion";
import Mission from "../components/about/Mission";
import StatsSection from "../components/about/State";
import TeamSection from "../components/home/v2/TeamSection";
import WhereWeAre from "../components/about/v2/WhereWeAre";
import FinalCta from "../components/home/v2/FinalCta";
import { faqFor } from "../data/faq";
import { useSeo } from "../ui/useSeo";

export default function About() {
  useSeo("À propos", "Lucane Tech, une équipe de développeurs basée au Maroc avec un relais à Brazzaville : mission, valeurs et équipe.");
  return (
    <>
      <PageHero
        eyebrow="À propos de Lucane"
        light="Une équipe passionnée,"
        bold="un impact réel."
        lead="La technologie est le meilleur levier pour développer l'Afrique. Notre mission est de la rendre accessible à tous les entrepreneurs."
        tone="indigo"
      >
        <Button to="/contact" label="Travaillons ensemble" size="lg" iconRight={<ArrowUpRight className="h-5 w-5" />} />
      </PageHero>
      <Mission />
      <StatsSection />
      <TeamSection />
      <WhereWeAre />
      <FaqAccordion items={faqFor("about")} />
      <FinalCta />
    </>
  );
}
