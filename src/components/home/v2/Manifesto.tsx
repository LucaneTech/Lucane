import ScrollWords from "../../../motion/ScrollWords";
import Eyebrow from "../../../ui/Eyebrow";
import IrisOrb from "../../../ui/IrisOrb";
import { Parallax } from "../../../motion/Parallax";

/** Manifeste : une phrase immense qui s'allume mot à mot au défilement, avec deux formes irisées. */
export default function Manifesto() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32" aria-labelledby="manifesto">
      <Parallax speed={0.4} className="pointer-events-none absolute -left-24 top-10">
        <IrisOrb className="relative h-64 w-64 md:h-80 md:w-80" tone="sunset" />
      </Parallax>
      <Parallax speed={-0.3} className="pointer-events-none absolute -right-20 bottom-0">
        <IrisOrb className="relative h-56 w-56 md:h-72 md:w-72" tone="indigo" duration={18} />
      </Parallax>

      <div className="relative mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-16">
        <Eyebrow index="02">Qui nous sommes</Eyebrow>
        <h2 id="manifesto" className="sr-only">
          Qui nous sommes
        </h2>
        <ScrollWords
          className="mt-10 max-w-6xl font-display text-[clamp(1.5rem,3.4vw,3.25rem)] font-light leading-[1.05] tracking-[-0.035em] text-ink"
          text="Nous sommes une équipe de développeurs qui conçoit des sites, des applications web et mobiles et des logiciels sur mesure — pour que votre entreprise soit trouvée, crue et choisie."
        />
      </div>
    </section>
  );
}
