/**
 * Étude de cas (phase 5) : /realisations/:slug.
 * Hero plein écran avec le visuel qui se dévoile, fiche (secteur, année, technologies),
 * puis Contexte → Défi → Solution → Résultat quand ces textes sont fournis, et le projet suivant.
 */
import { useMemo, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { projectBySlug, projects } from "../data/projects";
import type { Project } from "../data/projects";
import ProjectVisual from "../ui/ProjectVisual";
import Button from "../ui/Button";
import Eyebrow from "../ui/Eyebrow";
import IrisOrb from "../ui/IrisOrb";
import SplitText from "../motion/SplitText";
import { M } from "../motion/kit";
import { ease } from "../motion/presets";
import NotFound from "./NotFound";
import FinalCta from "../components/home/v2/FinalCta";
import { useSeo } from "../ui/useSeo";
import { projectMeta } from "../seo/pages";

const STEPS = [
  { key: "context", label: "Contexte" },
  { key: "challenge", label: "Défi" },
  { key: "solution", label: "Solution" },
  { key: "result", label: "Résultat" },
] as const;

export default function CaseStudy() {
  const { slug = "" } = useParams();
  const project = projectBySlug(slug);
  if (!project) return <NotFound />;
  // clé = slug : la page repart de zéro (animations comprises) en passant au projet suivant
  return <CaseStudyView key={project.slug} project={project} />;
}

function CaseStudyView({ project }: { project: Project }) {
  const seo = useMemo(() => projectMeta(project), [project]);
  useSeo(seo, project);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const visualScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const visualY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];
  const caseSteps = STEPS.filter((s) => project.caseStudy && project.caseStudy[s.key] && project.caseStudy[s.key] !== "À FOURNIR");

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative overflow-hidden pb-16 pt-36 md:pt-44" aria-labelledby="case-title">
        <IrisOrb className="-right-20 top-20 h-64 w-64 md:h-96 md:w-96" tone="indigo" />
        <div className="relative mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-16">
          <Link to="/realisations" className="mb-8 inline-flex items-center gap-2 rounded-full border border-glass-line bg-glass px-4 py-2 text-sm text-ink-muted backdrop-blur-xl transition-colors hover:text-ink">
            <ArrowLeft className="h-4 w-4" /> Toutes les réalisations
          </Link>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-on-primary">{project.category}</span>
            {project.sector && <span className="rounded-full border border-glass-line bg-glass px-4 py-1.5 text-sm text-ink">{project.sector}</span>}
            {project.year && <span className="rounded-full border border-glass-line bg-glass px-4 py-1.5 font-sans text-sm text-ink">{project.year}</span>}
          </div>
          <h1 id="case-title" className="mt-6 max-w-6xl font-display text-[clamp(2.4rem,6.4vw,6.5rem)] font-extrabold leading-[0.9] tracking-[-0.05em] text-ink">
            <SplitText text={project.title} by="char" stagger={0.025} immediate />
          </h1>
        </div>

        <motion.div
          style={{ scale: visualScale, y: visualY }}
          initial={{ clipPath: "inset(30% 8% 0% 8% round 10px)", opacity: 0 }}
          animate={{ clipPath: "inset(0% 0% 0% 0% round 10px)", opacity: 1 }}
          transition={{ duration: 1.4, ease: ease.out, delay: 0.3 }}
          className="relative mx-auto mt-14 w-full max-w-[1440px] px-3 md:px-10 lg:px-16"
        >
          <ProjectVisual project={project} className="rounded-md shadow-glow" />
        </motion.div>
      </section>

      {/* Fiche + description */}
      <section className="relative py-16 md:py-24" aria-label="Présentation du projet">
        <div className="mx-auto grid w-full max-w-[1440px] gap-10 px-5 md:px-10 lg:grid-cols-[1fr_2fr] lg:gap-20 lg:px-16">
          <div className="space-y-6 lg:sticky lg:top-32 lg:self-start">
            <Eyebrow>Fiche projet</Eyebrow>
            <dl className="space-y-4 rounded-md border border-glass-line bg-panel p-7">
              {[
                ["Catégorie", project.category],
                ["Secteur", project.sector],
                ["Année", project.year?.toString() ?? project.date],
              ]
                .filter(([, v]) => v)
                .map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4 border-b border-line pb-3 last:border-0 last:pb-0">
                    <dt className="text-ink-muted">{k}</dt>
                    <dd className="font-semibold text-ink">{v}</dd>
                  </div>
                ))}
              <div>
                <dt className="mb-3 text-ink-muted">Technologies</dt>
                <dd className="flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span key={t} className="rounded-full border border-glass-line bg-canvas-alt px-3 py-1 text-sm text-ink">
                      {t}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
            <div className="flex flex-wrap gap-3">
              {project.liveUrl && <Button href={project.liveUrl} label="Voir le site en ligne" iconRight={<ArrowUpRight className="h-4 w-4" />} />}
              {project.githubUrl && <Button href={project.githubUrl} variant="outline" label="Code source" />}
            </div>
          </div>

          <div>
            <M.P className="!text-[clamp(1.15rem,1.8vw,1.5rem)] !leading-[1.4] text-ink">{project.description}</M.P>

            {caseSteps.length > 0 && (
              <div className="mt-16 space-y-6">
                {caseSteps.map((s, i) => (
                  <M.Card key={s.key} index={i}>
                    <p className="font-sans text-sm text-primary-ink">0{i + 1} — {s.label}</p>
                    <p className="mt-3 text-lg leading-relaxed text-ink">{project.caseStudy![s.key]}</p>
                  </M.Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Projet suivant */}
      <section className="relative px-3 pb-10 md:px-6" aria-label="Projet suivant">
        <Link
          to={`/realisations/${next.slug}`}
          className="group relative mx-auto flex max-w-[1440px] flex-col overflow-hidden rounded-md bg-canvas-inverse px-8 py-14 text-on-inverse md:flex-row md:items-center md:justify-between md:px-16 md:py-20"
          data-cursor="Suivant"
        >
          <IrisOrb className="-right-10 -top-16 h-72 w-72 opacity-70" tone="sunset" />
          <div className="relative">
            <p className="kicker text-base opacity-70">Projet suivant</p>
            <p className="mt-4 font-display text-[clamp(2rem,5vw,4.25rem)] font-extrabold leading-none tracking-[-0.05em] transition-transform duration-700 group-hover:translate-x-4">
              {next.title}
            </p>
          </div>
          <span className="relative mt-8 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-on-primary transition-transform duration-700 group-hover:-rotate-45 group-hover:scale-110 md:mt-0">
            <ArrowRight className="h-8 w-8" />
          </span>
        </Link>
      </section>

      <FinalCta />
    </>
  );
}
