/**
 * Services (phase 6.1) : en-tête, défilé des technologies, 7 expertises ancrées, formules,
 * méthode, pourquoi nous, FAQ, appel final. Chaque expertise a son illustration animée et ses réalisations.
 */
import { ArrowUpRight } from "lucide-react";
import PageHero from "../ui/PageHero";
import Button from "../ui/Button";
import FaqAccordion from "../ui/FaqAccordion";
import AutoScrollElement from "../components/services/AutoScrollElement";
import ExpertiseRows from "../components/services/v2/ExpertiseRows";
import Offers from "../components/services/v2/Offers";
import ProcessTimeline from "../components/home/v2/ProcessTimeline";
import WhyUs from "../components/services/WhyUs";
import FinalCta from "../components/home/v2/FinalCta";
import { faqFor } from "../data/faq";
import { useSeo } from "../ui/useSeo";
import { PAGES } from "../seo/pages";

export default function Services() {
  useSeo(PAGES.services);
  return (
    <>
      <PageHero
        eyebrow="Services"
        light="Des solutions"
        bold="sur mesure."
        lead="De la conception au déploiement, nous couvrons tous les aspects de votre transformation digitale avec une approche 100 % sur mesure."
      >
        <div className="flex flex-wrap gap-4">
          <Button to="/contact" label="Demander un devis gratuit" size="lg" iconRight={<ArrowUpRight className="h-5 w-5" />} />
          <Button to="/services#formules" label="Voir les formules" size="lg" variant="outline" />
        </div>
      </PageHero>
      <AutoScrollElement />
      <ExpertiseRows />
      <Offers />
      <ProcessTimeline />
      <WhyUs />
      <FaqAccordion items={faqFor("services")} />
      <FinalCta />
    </>
  );
}
