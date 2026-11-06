import { MessageCircle } from "lucide-react";
import Button from "../../../ui/Button";
import SplitText from "../../../motion/SplitText";
import IrisOrb from "../../../ui/IrisOrb";
import { MouseParallax } from "../../../motion/Parallax";
import { whatsappHref } from "../../../data/site";

/** Final (plan 3.13) : « Parlons de votre projet. » en typographie géante, formes irisées autour. */
export default function FinalCta() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32" aria-labelledby="final-title">
      <MouseParallax depth={30} className="pointer-events-none absolute left-[6%] top-[12%]">
        <IrisOrb className="relative h-40 w-40 md:h-56 md:w-56" tone="indigo" />
      </MouseParallax>
      <MouseParallax depth={-24} className="pointer-events-none absolute bottom-[8%] right-[8%]">
        <IrisOrb className="relative h-48 w-48 md:h-72 md:w-72" tone="sunset" duration={17} />
      </MouseParallax>

      <div className="relative mx-auto w-full max-w-[1440px] px-5 text-center md:px-10 lg:px-16">
        <p className="eyebrow text-primary-ink">Notre équipe vous attend</p>
        <h2 id="final-title" className="mt-6 font-display text-[clamp(2.4rem,7vw,6.75rem)] leading-[0.9] tracking-[-0.05em] text-ink">
          <SplitText text="Parlons de" by="char" className="block font-light" stagger={0.03} />
          <SplitText text="votre projet." by="char" className="block font-extrabold" delay={0.25} stagger={0.03} />
        </h2>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <Button label="Démarrer un projet" size="lg" to="/contact" />
          <Button label="WhatsApp" size="lg" variant="outline" href={whatsappHref()} iconLeft={<MessageCircle className="h-5 w-5" />} />
        </div>
      </div>
    </section>
  );
}
