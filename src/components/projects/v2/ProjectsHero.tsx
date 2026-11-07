import IrisOrb from "../../../ui/IrisOrb";
import SplitText from "../../../motion/SplitText";
import Counter from "../../../motion/Counter";
import { MouseParallax } from "../../../motion/Parallax";
import { projects } from "../../../data/projects";

/** En-tête de la page Réalisations : titre géant, compteur de projets en ligne, formes irisées. */
export default function ProjectsHero() {
  const sectors = new Set(projects.map((p) => p.sector).filter(Boolean)).size;
  return (
    <section className="relative overflow-hidden pb-12 pt-36 md:pb-16 md:pt-44" aria-labelledby="projects-title">
      <MouseParallax depth={26} className="pointer-events-none absolute right-[6%] top-[18%]">
        <IrisOrb className="relative h-48 w-48 md:h-72 md:w-72" tone="teal" />
      </MouseParallax>
      <MouseParallax depth={-18} className="pointer-events-none absolute bottom-0 right-[30%]">
        <IrisOrb className="relative h-24 w-24 md:h-36 md:w-36" tone="sunset" duration={11} />
      </MouseParallax>

      <div className="relative mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-16">
        <h1 id="projects-title" className="max-w-5xl font-display text-[clamp(2.4rem,6vw,6rem)] leading-[0.92] tracking-[-0.045em] text-ink">
          <SplitText text="Des projets qui" by="char" className="block font-light" stagger={0.02} immediate />
          <SplitText text="propulsent." by="char" className="block font-extrabold" delay={0.3} stagger={0.02} immediate />
        </h1>
        <div className="mt-12 flex flex-wrap gap-4">
          {[
            { value: projects.length, label: "projets publics" },
            { value: sectors, label: "secteurs d'activité" },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-4 rounded-md border border-glass-line bg-glass py-2 pl-2 pr-6 backdrop-blur-xl">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary font-display text-xl font-bold text-on-primary">
                <Counter value={s.value} />
              </span>
              <span className="text-ink-muted">{s.label}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 max-w-xl text-sm text-ink-faint">Projets publics uniquement : les projets privés et les outils internes réalisés pour nos clients ne sont pas comptés.</p>
      </div>
    </section>
  );
}
