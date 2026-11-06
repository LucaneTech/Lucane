import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import HorizontalScroll from "../../../motion/HorizontalScroll";
import ProjectVisual from "../../../ui/ProjectVisual";
import Eyebrow from "../../../ui/Eyebrow";
import { featuredProjects, projects } from "../../../data/projects";
import type { Project } from "../../../data/projects";
import { ease } from "../../../motion/presets";

function WorkCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      className="group relative w-[82vw] shrink-0 snap-center overflow-hidden rounded-md border border-glass-line bg-panel p-4 shadow-glow md:w-[64vw] lg:w-[58vw]"
      data-cursor="Voir"
      initial={{ y: 60, opacity: 0, rotate: index % 2 ? 2 : -2 }}
      whileInView={{ y: 0, opacity: 1, rotate: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: ease.out }}
    >
      {/* Fenêtre de navigateur : vidéo, aperçu réel ou affiche */}
      <ProjectVisual project={project} />

      <div className="flex flex-wrap items-end justify-between gap-4 px-4 pb-3 pt-6">
        <div>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-on-primary">{project.category}</span>
            {project.sector && <span className="rounded-full border border-glass-line px-3 py-1 text-xs text-ink-muted">{project.sector}</span>}
          </div>
          <h3 className="mt-3 font-display text-xl font-bold tracking-[-0.03em] text-ink md:text-2xl">
            <Link to={`/realisations/${project.slug}`} className="after:absolute after:inset-0">
              {project.title}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-ink-muted">{project.technologies.slice(0, 4).join(" · ")}</p>
        </div>
        <div className="flex gap-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-ink text-canvas transition-transform duration-500 hover:rotate-45"
              aria-label={`Voir le site ${project.title}`}
            >
              <ArrowUpRight className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

/** Réalisations (plan 3.6) : défilement horizontal fixé des projets en vedette. */
export default function FeaturedWork() {
  const featured = featuredProjects();
  return (
    <div className="relative" aria-labelledby="work-title">
      <div className="mx-auto flex w-full max-w-[1440px] flex-wrap items-end justify-between gap-6 px-5 pt-24 md:px-10 lg:px-16">
        <div>
          <Eyebrow index="05">Réalisations</Eyebrow>
          <h2 id="work-title" className="display-2 mt-6 text-ink">
            Notre travail <span className="font-light">parle pour nous.</span>
          </h2>
        </div>
        <p className="max-w-sm text-ink-muted">
          {projects.length} projets en ligne, consultables dès maintenant. Voici une sélection.
        </p>
      </div>

      <HorizontalScroll trackClassName="items-center gap-8 px-5 md:px-10 lg:px-16">
        {featured.map((p, i) => (
          <WorkCard key={p.slug} project={p} index={i} />
        ))}
        <Link
          to="/realisations"
          className="group flex h-[50vh] w-[70vw] shrink-0 snap-center flex-col items-center justify-center gap-6 rounded-md border border-dashed border-line-strong/30 md:w-[30vw]"
          data-cursor="Voir"
        >
          <span className="flex h-24 w-24 items-center justify-center rounded-full bg-primary text-on-primary transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-45">
            <ArrowRight className="h-8 w-8" />
          </span>
          <span className="font-display text-2xl font-bold text-ink">Toutes les réalisations</span>
          <span className="text-ink-muted">{projects.length} projets</span>
        </Link>
      </HorizontalScroll>
    </div>
  );
}
