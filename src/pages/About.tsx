/**
 * À propos : en-tête avec la constellation de l'équipe, raison d'être (mission et vision illustrées),
 * repères vérifiables, notre modèle d'équipe, collaboration à distance, valeurs illustrées,
 * où nous sommes (carte), projets déjà en ligne, FAQ et appel final.
 */
import FaqAccordion from "../ui/FaqAccordion";
import FinalCta from "../components/home/v2/FinalCta";
import { AboutHero, Delivered, HowWeWork, Landmarks, Purpose, Values, WhereWeAre, WhyTeam } from "../components/about/v2/AboutSections";
import { faqFor } from "../data/faq";
import { useSeo } from "../ui/useSeo";
import { PAGES } from "../seo/pages";

export default function About() {
  useSeo(PAGES.about);
  return (
    <>
      <AboutHero />
      <Purpose />
      <Landmarks />
      <WhyTeam />
      <HowWeWork />
      <Values />
      <WhereWeAre />
      <Delivered />
      <FaqAccordion items={faqFor("about")} />
      <FinalCta />
    </>
  );
}
