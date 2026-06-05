import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// ─── Constants ────────────────────────────────────────────────────────────────
const IFRAME_DESKTOP_WIDTH = 1440;
const IFRAME_DESKTOP_HEIGHT = 900;

// ─── Types ────────────────────────────────────────────────────────────────────
interface Project {
  title: string;
  tag: string;
  tagColor: string;
  image: string;
  desc: string;
  stack: string[];
  link: string;
  liveUrl?: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const projects: Project[] = [
  {
    title: "KFK Agrobusiness",
    tag: "Site vitrine",
    tagColor: "text-dev bg-dev/10",
    image: "#",
    desc: "Site vitrine de KFK Agro Business, une entreprise spécialisée dans l'agriculture et l'élevage en République Démocratique du Congo. La plateforme présente les activités et les solutions de l'entreprise à destination des professionnels et entrepreneurs du secteur agroalimentaire congolais.",
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    link: "/projets",
    liveUrl: "https://kfkagrobusiness.com",
  },
  {
    title: "Folio",
    tag: "Portfolio",
    tagColor: "text-cloud bg-cloud/10",
    image: "images/home/second.avif",
    desc: "SPortfolio professionnel de Francisco Mouanda, développeur web full-stack spécialisé dans des technologies modernes telles que Django, Laravel, Python et JavaScript. Le site met en valeur ses projets, ses compétences techniques et son parcours, à destination d'entreprises à la recherche d'un développeur web expérimenté.",
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Daisyui'],
    link: "/projets",
    liveUrl: "https://francisco.lucane.tech",
  },
  {
    title: "Oralise",
    tag: "Site Vitrine",
    tagColor: "text-growth bg-growth/10",
    image: "#",
    desc: "Site web moderne de l'établissement scolaire Oralise, conçu pour présenter l'institution, ses programmes pédagogiques, son corps enseignant et ses actualités. La plateforme offre une interface claire et professionnelle facilitant la communication entre l'école, les élèves et les familles..",
    stack:['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    link: "/projets",
    liveUrl: "https://oralise.pro",
  },
];

// ─── LivePreview ───────────────────────────────────────────────────────────────
interface LivePreviewProps {
  liveUrl: string;
  title: string;
}

const LivePreview: React.FC<LivePreviewProps> = ({ liveUrl, title }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState<number>(0.3);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new ResizeObserver(([entry]) => {
      const { width } = entry.contentRect;
      setScale(width / IFRAME_DESKTOP_WIDTH);
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const scaledHeight = Math.round(IFRAME_DESKTOP_HEIGHT * scale);

  return (
    <div ref={containerRef} className="w-full overflow-hidden">
      <div style={{ height: scaledHeight }} className="relative w-full">
        <iframe
          src={liveUrl}
          title={`Preview – ${title}`}
          scrolling="no"
          style={{
            width: IFRAME_DESKTOP_WIDTH,
            height: IFRAME_DESKTOP_HEIGHT,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
            border: 0,
            pointerEvents: "none",
          }}
          className="absolute top-0 left-0"
        />
      </div>
    </div>
  );
};

// ─── FeaturedProjects ──────────────────────────────────────────────────────────
const FeaturedProjects: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 xl:px-24 bg-surface-alt dark:bg-dark-surface">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">
            Notre travail
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-ink dark:text-white mb-4">
            Projets <span className="text-primary">en vedette</span>
          </h2>
      <p className="text-ink-muted dark:text-slate-300 max-w-xl mx-auto leading-relaxed">
            Des solutions concrètes livrées pour des clients exigeants. Voici une sélection de nos réalisations.
          </p>
        </motion.div>

        {/* Zigzag layout */}
        <div className="flex flex-col gap-16 md:gap-24">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className={`flex flex-col lg:flex-row ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              } gap-8 lg:gap-12 items-center`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {/* Mockup */}
              <div className="w-full lg:w-3/5">
                <motion.div
                  className="relative rounded-md overflow-hidden shadow-xl border border-slate-200 dark:border-slate-700/50"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Browser chrome */}
                  <div className="flex items-center justify-between gap-3 px-4 py-2.5 bg-slate-100 dark:bg-dark-elevated border-b border-slate-200 dark:border-slate-700/50">
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="flex-1 mx-3 bg-surface-alt dark:bg-dark-elevated rounded-sm h-5 py-2 border border-slate-200 dark:border-slate-700/50 px-3 flex items-center">
                      <span className="text-[10px] text-slate-500 dark:text-slate-300 ">
                       {project.liveUrl}
                      </span>
                    </div>
                  </div>

                  {/* Preview */}
                  <div className="hover:shadow-glow transition-shadow duration-300">
                    {project.liveUrl ? (
                      <LivePreview liveUrl={project.liveUrl} title={project.title} />
                    ) : (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto object-cover"
                      />
                    )}
                  </div>
                </motion.div>
              </div>

              {/* Info */}
              <div className="w-full lg:w-2/5">
                <span
                  className={`text-xs font-semibold uppercase tracking-wide rounded-pill px-3 py-1 ${project.tagColor}`}
                >
                  {project.tag}
                </span>
                <h3 className="text-2xl lg:text-3xl font-bold text-ink dark:text-white mt-3 mb-3">
                  {project.title}
                </h3>
                <p className="text-ink-muted dark:text-slate-300 leading-relaxed mb-4">{project.desc}</p>

                {/* Stack badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs bg-surface dark:bg-dark-surface text-ink-muted dark:text-slate-300 rounded-md px-3 py-1 border border-slate-200 dark:border-slate-700/50"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <Link
                  to={project.link}
                  className="inline-flex items-center gap-2 text-primary font-medium group"
                >
                  Voir le projet{" "}
                  <motion.span
                    className="inline-block"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    →
                  </motion.span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;