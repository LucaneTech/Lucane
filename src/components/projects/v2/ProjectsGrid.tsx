import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ProjectVisual from "../../../ui/ProjectVisual";
import { projectCategories, projects } from "../../../data/projects";
import type { Project } from "../../../data/projects";
import { ease } from "../../../motion/presets";

/** Carte de projet : la carte entière mène à l'étude de cas ; le bouton rond ouvre le site réel. */
function ProjectCard({ project, wide }: { project: Project; wide: boolean }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.7, ease: ease.out }}
      className={`group relative rounded-md border border-glass-line bg-panel p-3 transition-shadow duration-700 hover:shadow-glow ${wide ? "md:col-span-2" : ""}`}
      data-cursor="Voir"
    >
      <ProjectVisual project={project} />
      <div className="flex items-end justify-between gap-4 px-4 pb-3 pt-5">
        <div>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-on-primary">{project.category}</span>
            {project.sector && <span className="rounded-full border border-glass-line px-3 py-1 text-xs text-ink-muted">{project.sector}</span>}
            {project.year && <span className="rounded-full border border-glass-line px-3 py-1 font-mono text-xs text-ink-muted">{project.year}</span>}
          </div>
          <h2 className="mt-3 font-display text-xl font-bold tracking-[-0.03em] text-ink md:text-2xl">
            <Link to={`/realisations/${project.slug}`} className="after:absolute after:inset-0 after:rounded-md">
              {project.title}
            </Link>
          </h2>
          <p className="mt-1 text-sm text-ink-muted">{project.technologies.slice(0, 4).join(" · ")}</p>
        </div>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ouvrir le site ${project.title}`}
            className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ink text-canvas transition-transform duration-500 hover:rotate-45"
          >
            <ArrowUpRight className="h-5 w-5" />
          </a>
        )}
      </div>
    </motion.article>
  );
}

/** Filtres en pilules (pastille qui glisse) + grille éditoriale animée (layout). */
export default function ProjectsGrid() {
  const categories = projectCategories();
  const [filter, setFilter] = useState("Tous");
  const list = filter === "Tous" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="relative pb-24 md:pb-36" aria-label="Liste des réalisations">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-16">
        <LayoutGroup>
          <div className="sticky top-24 z-30 mb-10 flex w-fit flex-wrap gap-1 rounded-full border border-glass-line bg-glass p-1.5 backdrop-blur-2xl" role="tablist" aria-label="Filtrer par catégorie">
            {categories.map((c) => {
              const count = c === "Tous" ? projects.length : projects.filter((p) => p.category === c).length;
              const on = filter === c;
              return (
                <button
                  key={c}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  onClick={() => setFilter(c)}
                  className={`relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-300 ${on ? "text-on-primary" : "text-ink-muted hover:text-ink"}`}
                >
                  {on && <motion.span layoutId="filter-pill" className="absolute inset-0 rounded-full bg-primary" transition={{ type: "spring", stiffness: 380, damping: 32 }} />}
                  <span className="relative">
                    {c} <span className="font-mono text-xs opacity-60">{count}</span>
                  </span>
                </button>
              );
            })}
          </div>

          <motion.div layout className="grid gap-6 md:grid-cols-2 lg:gap-8">
            <AnimatePresence mode="popLayout">
              {list.map((p, i) => (
                <ProjectCard key={p.slug} project={p} wide={filter === "Tous" && i % 5 === 0} />
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>
    </section>
  );
}
