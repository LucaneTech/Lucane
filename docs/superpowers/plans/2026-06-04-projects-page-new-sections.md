# Projects Page — 4 New Sections Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ajouter 4 nouvelles sections à la page Projects — TechDNA, ProjectTimeline, ImpactStrip, GeographicReach — sans toucher aux autres pages.

**Architecture:** Les composants TechDNA et ProjectTimeline consomment les données projets via un fichier partagé `src/data/projects.ts` (extrait depuis `AllProjects.tsx`). ImpactStrip et GeographicReach sont entièrement statiques. Les 4 composants sont insérés dans `Projects.tsx` entre `AllProjects` et `Testamonals`.

**Tech Stack:** React 18, TypeScript, Tailwind CSS v4, Framer Motion v12, Lucide React

---

## File Structure

| Action | Chemin | Rôle |
|--------|--------|------|
| Create | `src/data/projects.ts` | Source unique des données projets |
| Modify | `src/components/projects/AllProjects.tsx` | Importer depuis `src/data/projects.ts` |
| Create | `src/components/projects/TechDNA.tsx` | Constellation de bulles technologies |
| Create | `src/components/projects/ProjectTimeline.tsx` | Frise chronologique des projets |
| Create | `src/components/projects/ImpactStrip.tsx` | Bande sombre métriques dev |
| Create | `src/components/projects/GeographicReach.tsx` | Carte SVG empreinte internationale |
| Modify | `src/pages/Projects.tsx` | Brancher les 4 nouveaux composants |

---

## Task 1: Extraire les données projets dans un fichier partagé

**Files:**
- Create: `src/data/projects.ts`
- Modify: `src/components/projects/AllProjects.tsx`

- [ ] **Step 1.1 — Créer `src/data/projects.ts`**

```typescript
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  videoUrl?: string;
  featured?: boolean;
  date?: string;
  bgColor?: string;
  category?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "KFK Agrobusiness",
    description:
      "Site vitrine de KFK Agro Business, une entreprise spécialisée dans l'agriculture et l'élevage en République Démocratique du Congo. La plateforme présente les activités et les solutions de l'entreprise à destination des professionnels et entrepreneurs du secteur agroalimentaire congolais.",
    image: "",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    githubUrl: "https://github.com/LucaneTech/agrobusiness",
    liveUrl: "https://www.kfkagrobusiness.com/",
    featured: false,
    category: "web",
    date: "Mai 2026",
    bgColor: "",
  },
  {
    id: 2,
    title: "Active Rise",
    description:
      "Site vitrine d'Active Rise, une agence de marketing stratégique accompagnant les entreprises dans leur développement et leur visibilité digitale. Le site met en avant les expertises, les offres de services et les réalisations de l'agence pour aider ses clients à accroître leur croissance commerciale.",
    image: "",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    githubUrl: "https://github.com/LucaneTech/Active_rise",
    liveUrl: "https://activerise.netlify.app",
    featured: false,
    category: "web",
    date: "Mai 2026",
    bgColor: "",
  },
  {
    id: 3,
    title: "Folio Francisco",
    description:
      "Portfolio professionnel de Francisco Mouanda, développeur web full-stack spécialisé dans des technologies modernes telles que Django, Laravel, Python et JavaScript. Le site met en valeur ses projets, ses compétences techniques et son parcours, à destination d'entreprises à la recherche d'un développeur web expérimenté.",
    image: "",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Daisyui"],
    githubUrl: "https://github.com/LucaneTech/Portofolio",
    liveUrl: "https://francisco.lucane.tech/",
    featured: false,
    category: "web",
    date: "Avril 2025",
    bgColor: "",
  },
  {
    id: 4,
    title: "Trip Manager",
    description:
      "Application web de réservation et de gestion de voyages touristiques conçue pour simplifier l'organisation des séjours et améliorer l'expérience des voyageurs. La plateforme permet de rechercher des destinations, réserver des circuits et hébergements, gérer les itinéraires, suivre les réservations et centraliser les informations des clients via une interface moderne, fluide et sécurisée avec système d'authentification intégré.",
    image: "#",
    technologies: ["Django", "React TS", "Tailwindcss", "JwT", "Axios"],
    githubUrl: "https://github.com/LucaneTech/trip_management",
    videoUrl:
      "https://res.cloudinary.com/dvjwcal8e/video/upload/v1779129908/Trip_app_zuwcpj.mp4",
    featured: false,
    category: "Web App",
    date: "Mai 2026",
    bgColor: "bg-white",
  },
  {
    id: 5,
    title: "Oralise",
    description:
      "Site web moderne de l'établissement scolaire Oralise, conçu pour présenter l'institution, ses programmes pédagogiques, son corps enseignant et ses actualités. La plateforme offre une interface claire et professionnelle facilitant la communication entre l'école, les élèves et les familles.",
    image: "",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    githubUrl: "https://github.com/LucaneTech/Oralise",
    liveUrl: "https://oralise.pro/",
    featured: false,
    category: "Frontend",
    date: "Mai 2026",
    bgColor: "",
  },
  {
    id: 6,
    title: "Lucane Filter",
    description:
      "Application web de filtrage et gestion de contacts développée pour optimiser les opérations des équipes de call center. L'outil permet de trier, filtrer et organiser efficacement des listes de contacts grâce à une interface simple et sécurisée, avec système d'authentification intégré pour protéger l'accès aux données.",
    image: "#",
    technologies: [
      "Full Django",
      "Docker",
      "Celery",
      "Pandas",
      "Django-tailwind",
      "Pillow",
    ],
    githubUrl: "https://github.com/LucaneTech/contact_filter2026",
    videoUrl:
      "https://res.cloudinary.com/dvjwcal8e/video/upload/v1779128287/Demo_contactFilter_lwlnyj.mp4",
    featured: false,
    category: "Mobile App",
    date: "Mars 2026",
    bgColor: "bg-white",
  },
];
```

- [ ] **Step 1.2 — Mettre à jour `AllProjects.tsx` pour importer depuis le fichier partagé**

Remplacer le bloc `interface Project { ... }` et le tableau `const projects: Project[] = [...]` par :

```tsx
import { projects } from "../../data/projects";
import type { Project } from "../../data/projects";
```

Le reste du fichier `AllProjects.tsx` reste identique. Le type `Project` est maintenant importé au lieu d'être défini localement.

- [ ] **Step 1.3 — Vérifier le dev server**

```bash
cd /home/lucane/myprojects/Lucane && npm run dev
```

Aller sur `/projects`. La grille de projets doit s'afficher identiquement à avant. Aucune erreur TypeScript dans la console.

- [ ] **Step 1.4 — Commit**

```bash
git add src/data/projects.ts src/components/projects/AllProjects.tsx
git commit -m "refactor: extract projects data to shared src/data/projects.ts"
```

---

## Task 2: Composant TechDNA

**Files:**
- Create: `src/components/projects/TechDNA.tsx`

- [ ] **Step 2.1 — Créer `src/components/projects/TechDNA.tsx`**

```tsx
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { projects } from "../../data/projects";

const TechDNA: React.FC = () => {
  const techCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    projects.forEach((p) => {
      p.technologies.forEach((tech) => {
        counts[tech] = (counts[tech] || 0) + 1;
      });
    });
    return Object.entries(counts).sort((a, b) => b[1] - a[1]);
  }, []);

  const maxCount = Math.max(...techCounts.map(([, c]) => c));

  const getBubbleSize = (count: number) => {
    const ratio = count / maxCount;
    if (ratio >= 0.7) return "text-sm px-5 py-2.5 font-semibold";
    if (ratio >= 0.4) return "text-sm px-4 py-2";
    return "text-xs px-3 py-1.5";
  };

  return (
    <section className="py-20 px-6 bg-surface dark:bg-transparent overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs uppercase tracking-[0.2em] font-medium text-primary mb-3">
            Stack technique
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-ink dark:text-white">
            Notre TechDNA
          </h2>
          <p className="text-ink-muted dark:text-slate-400 mt-3 max-w-md mx-auto text-sm leading-relaxed">
            Toutes les technologies que nous maîtrisons, à travers nos projets.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-3 justify-center items-center">
          {techCounts.map(([tech, count], i) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              whileHover={{ scale: 1.12, transition: { duration: 0.15 } }}
              className={`relative group cursor-default rounded-full border border-primary/25 bg-primary/5 dark:bg-primary/10 text-primary font-medium transition-colors duration-150 hover:bg-primary/15 hover:border-primary/50 ${getBubbleSize(count)}`}
            >
              {tech}
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-ink dark:bg-white text-white dark:text-ink text-[10px] px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10 shadow-sm">
                {count} projet{count > 1 ? "s" : ""}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechDNA;
```

- [ ] **Step 2.2 — Brancher temporairement dans Projects.tsx pour vérifier visuellement**

Dans `src/pages/Projects.tsx`, ajouter :
```tsx
import TechDNA from "../components/projects/TechDNA";
// et dans le JSX, après <AllProjects filter={filter} />:
<TechDNA />
```

Vérifier dans le navigateur : les bulles apparaissent, les tailles varient, le hover affiche le tooltip avec le nombre de projets. Vérifier en dark mode aussi.

- [ ] **Step 2.3 — Commit**

```bash
git add src/components/projects/TechDNA.tsx src/pages/Projects.tsx
git commit -m "feat(projects): add TechDNA tech stack constellation section"
```

---

## Task 3: Composant ProjectTimeline

**Files:**
- Create: `src/components/projects/ProjectTimeline.tsx`

- [ ] **Step 3.1 — Créer `src/components/projects/ProjectTimeline.tsx`**

```tsx
import React from "react";
import { motion } from "framer-motion";
import { projects } from "../../data/projects";

const MONTHS: Record<string, number> = {
  Janvier: 0, Février: 1, Mars: 2, Avril: 3, Mai: 4, Juin: 5,
  Juillet: 6, Août: 7, Septembre: 8, Octobre: 9, Novembre: 10, Décembre: 11,
};

function parseDate(dateStr: string): number {
  const [month, year] = dateStr.split(" ");
  return new Date(parseInt(year), MONTHS[month] ?? 0).getTime();
}

const sorted = [...projects]
  .filter((p) => p.date)
  .sort((a, b) => parseDate(a.date!) - parseDate(b.date!));

const ProjectTimeline: React.FC = () => (
  <section className="py-20 px-6 bg-surface-alt dark:bg-dark-surface overflow-hidden">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="inline-block text-xs uppercase tracking-[0.2em] font-medium text-primary mb-3">
          Historique
        </span>
        <h2 className="text-3xl lg:text-4xl font-bold text-ink dark:text-white">
          Notre parcours
        </h2>
      </motion.div>

      {/* Desktop — alternating above/below timeline */}
      <div className="hidden md:block relative">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-primary/20 -translate-y-1/2" />
        <div
          className="grid"
          style={{ gridTemplateColumns: `repeat(${sorted.length}, 1fr)` }}
        >
          {sorted.map((project, i) => {
            const above = i % 2 === 0;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: above ? -20 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <div
                  className={`h-24 flex items-end justify-center px-2 pb-2 ${
                    !above ? "invisible" : ""
                  }`}
                >
                  <div className="text-center">
                    <p className="text-xs font-bold text-ink dark:text-white line-clamp-2 leading-tight">
                      {project.title}
                    </p>
                    <span className="inline-block mt-1 text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium capitalize">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  {above && <div className="w-px h-5 bg-primary/30" />}
                  <div className="w-3 h-3 rounded-full bg-primary border-2 border-white dark:border-dark-surface z-10 flex-shrink-0" />
                  {!above && <div className="w-px h-5 bg-primary/30" />}
                </div>

                <div
                  className={`h-24 flex items-start justify-center px-2 pt-2 ${
                    above ? "invisible" : ""
                  }`}
                >
                  <div className="text-center">
                    <p className="text-xs font-bold text-ink dark:text-white line-clamp-2 leading-tight">
                      {project.title}
                    </p>
                    <span className="inline-block mt-1 text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium capitalize">
                      {project.category}
                    </span>
                  </div>
                </div>

                <p className="text-[10px] text-ink-muted dark:text-slate-500 mt-1">
                  {project.date}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Mobile — vertical list */}
      <div className="md:hidden relative pl-6 border-l border-primary/20 space-y-8">
        {sorted.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="relative"
          >
            <div className="absolute -left-[1.65rem] top-1 w-3 h-3 rounded-full bg-primary border-2 border-white dark:border-dark-surface" />
            <p className="text-[10px] text-ink-muted dark:text-slate-500 mb-0.5">
              {project.date}
            </p>
            <p className="text-sm font-bold text-ink dark:text-white">
              {project.title}
            </p>
            <span className="inline-block mt-1 text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium capitalize">
              {project.category}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectTimeline;
```

- [ ] **Step 3.2 — Brancher dans Projects.tsx et vérifier**

Dans `src/pages/Projects.tsx`, ajouter après `<TechDNA />` :
```tsx
import ProjectTimeline from "../components/projects/ProjectTimeline";
// ...
<ProjectTimeline />
```

Vérifier : frise visible sur desktop (alternance haut/bas), liste verticale sur mobile. Les projets sont triés chronologiquement (Avril 2025 → Mars 2026 → Mai 2026).

- [ ] **Step 3.3 — Commit**

```bash
git add src/components/projects/ProjectTimeline.tsx src/pages/Projects.tsx
git commit -m "feat(projects): add ProjectTimeline chronological section"
```

---

## Task 4: Composant ImpactStrip

**Files:**
- Create: `src/components/projects/ImpactStrip.tsx`

- [ ] **Step 4.1 — Créer `src/components/projects/ImpactStrip.tsx`**

```tsx
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface Metric {
  value: number;
  prefix?: string;
  suffix: string;
  label: string;
}

const METRICS: Metric[] = [
  { value: 2400, suffix: "+", label: "commits GitHub" },
  { value: 6, suffix: "", label: "pays couverts" },
  { prefix: "< ", value: 10, suffix: "j", label: "délai moy. livraison" },
  { value: 6, suffix: "", label: "repos open source" },
];

function AnimatedCounter({
  target,
  prefix,
  suffix,
  active,
}: {
  target: number;
  prefix?: string;
  suffix: string;
  active: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let frame = 0;
    const total = 60;
    const id = setInterval(() => {
      frame++;
      setCount(Math.round((frame / total) * target));
      if (frame >= total) clearInterval(id);
    }, 1000 / 60);
    return () => clearInterval(id);
  }, [active, target]);

  return (
    <span className="font-mono text-4xl lg:text-5xl font-bold text-primary tabular-nums">
      {prefix}
      {count.toLocaleString("fr-FR")}
      {suffix}
    </span>
  );
}

const ImpactStrip: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 px-6 bg-dark">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-xs uppercase tracking-[0.25em] font-mono text-slate-500 mb-10">
          &gt;_ impact en chiffres
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {METRICS.map((m, i) => (
            <div
              key={m.label}
              className={`flex flex-col items-center text-center ${
                i < METRICS.length - 1
                  ? "lg:border-r lg:border-slate-700/50"
                  : ""
              }`}
            >
              <AnimatedCounter
                target={m.value}
                prefix={m.prefix}
                suffix={m.suffix}
                active={isInView}
              />
              <p className="font-mono text-slate-400 text-sm mt-2">
                // {m.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStrip;
```

- [ ] **Step 4.2 — Brancher dans Projects.tsx et vérifier**

Dans `src/pages/Projects.tsx`, ajouter après `<ProjectTimeline />` :
```tsx
import ImpactStrip from "../components/projects/ImpactStrip";
// ...
<ImpactStrip />
```

Vérifier : fond toujours sombre (indépendant du thème), compteurs partent de 0 et montent jusqu'à la valeur cible au scroll, police monospace, séparateurs verticaux visibles sur desktop.

- [ ] **Step 4.3 — Commit**

```bash
git add src/components/projects/ImpactStrip.tsx src/pages/Projects.tsx
git commit -m "feat(projects): add ImpactStrip animated dev metrics section"
```

---

## Task 5: Composant GeographicReach

**Files:**
- Create: `src/components/projects/GeographicReach.tsx`

- [ ] **Step 5.1 — Créer `src/components/projects/GeographicReach.tsx`**

Les coordonnées des points clients sont calculées avec une projection équirectangulaire dans un viewBox 1000×500 :
`x = (lon + 180) / 360 * 1000`, `y = (90 - lat) / 180 * 500`

```tsx
import React from "react";
import { motion } from "framer-motion";

const LOCATIONS = [
  { name: "France", cx: 506, cy: 114 },
  { name: "RD Congo", cx: 542, cy: 262 },
  { name: "Sénégal", cx: 451, cy: 209 },
  { name: "International", cx: 294, cy: 137 },
] as const;

const CONTINENTS = [
  // North America
  "M 75,82 L 290,82 L 302,108 L 295,178 L 262,228 L 222,242 L 178,218 L 128,192 L 75,145 Z",
  // South America
  "M 215,248 L 298,248 L 318,272 L 324,362 L 294,418 L 256,425 L 220,398 L 204,348 L 200,290 Z",
  // Europe
  "M 460,82 L 548,82 L 562,110 L 546,158 L 498,170 L 462,160 L 448,132 Z",
  // Africa
  "M 452,178 L 562,178 L 575,215 L 578,305 L 552,390 L 514,418 L 482,413 L 455,378 L 446,288 L 448,218 Z",
  // Asia
  "M 562,78 L 825,78 L 838,108 L 828,198 L 792,265 L 728,308 L 662,318 L 598,295 L 562,258 L 550,198 L 552,132 Z",
  // Australia
  "M 724,328 L 824,322 L 840,352 L 830,402 L 792,422 L 752,422 L 726,396 L 716,358 Z",
];

const GeographicReach: React.FC = () => (
  <section className="py-20 px-6 bg-surface dark:bg-transparent overflow-hidden">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <span className="inline-block text-xs uppercase tracking-[0.2em] font-medium text-primary mb-3">
          Portée mondiale
        </span>
        <h2 className="text-3xl lg:text-4xl font-bold text-ink dark:text-white">
          Notre empreinte internationale
        </h2>
        <p className="text-ink-muted dark:text-slate-400 mt-3 max-w-md mx-auto text-sm">
          Des clients en France, en Afrique et à l'international.
        </p>
      </motion.div>

      <div className="relative w-full" style={{ paddingTop: "50%" }}>
        <svg
          viewBox="0 0 1000 500"
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Continents */}
          {CONTINENTS.map((d, i) => (
            <path
              key={i}
              d={d}
              className="fill-slate-200 dark:fill-slate-700 stroke-slate-300 dark:stroke-slate-600"
              strokeWidth="1"
            />
          ))}

          {/* Connection lines from France to each other location */}
          {LOCATIONS.slice(1).map((loc, i) => (
            <motion.path
              key={loc.name}
              d={`M ${LOCATIONS[0].cx},${LOCATIONS[0].cy} L ${loc.cx},${loc.cy}`}
              stroke="#008080"
              strokeWidth="1"
              strokeDasharray="4 4"
              strokeOpacity="0.5"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.4 + i * 0.2, ease: "easeInOut" }}
            />
          ))}

          {/* Dots with pulse */}
          {LOCATIONS.map((loc, i) => (
            <g key={loc.name}>
              <motion.circle
                cx={loc.cx}
                cy={loc.cy}
                r={10}
                fill="#008080"
                fillOpacity={0.15}
                animate={{ r: [8, 16, 8], fillOpacity: [0.2, 0, 0.2] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "easeInOut",
                }}
              />
              <motion.circle
                cx={loc.cx}
                cy={loc.cy}
                r={5}
                fill="#008080"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.15 }}
              />
              <motion.text
                x={loc.cx + 8}
                y={loc.cy - 8}
                fontSize="11"
                fontFamily="Sen, system-ui, sans-serif"
                fontWeight="500"
                className="fill-ink-muted dark:fill-slate-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.15 }}
              >
                {loc.name}
              </motion.text>
            </g>
          ))}
        </svg>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-6 mt-4">
        {LOCATIONS.map((loc) => (
          <div key={loc.name} className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary inline-block" />
            <span className="text-sm text-ink-muted dark:text-slate-400">
              {loc.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GeographicReach;
```

- [ ] **Step 5.2 — Vérifier visuellement**

Aller sur `/projects`. Vérifier :
- Les continents s'affichent (silhouettes grises)
- Les 4 points pulsent avec l'effet ping
- Les lignes pointillées se dessinent progressivement au scroll
- Les labels (France, RD Congo, etc.) apparaissent
- Correct en dark mode (continents plus sombres)
- La légende en bas est alignée

- [ ] **Step 5.3 — Commit**

```bash
git add src/components/projects/GeographicReach.tsx
git commit -m "feat(projects): add GeographicReach SVG world map section"
```

---

## Task 6: Câbler toutes les sections dans Projects.tsx

**Files:**
- Modify: `src/pages/Projects.tsx`

- [ ] **Step 6.1 — Mettre à jour `src/pages/Projects.tsx` avec l'ordre final**

Remplacer le contenu complet de `src/pages/Projects.tsx` par :

```tsx
import React, { useState } from "react";
import HeroProject from "../components/projects/HeroProject";
import Testamonals from "../components/projects/Testamonals";
import CallAction from "../components/CallAction";
import AllProjects from "../components/projects/AllProjects";
import TechDNA from "../components/projects/TechDNA";
import ProjectTimeline from "../components/projects/ProjectTimeline";
import ImpactStrip from "../components/projects/ImpactStrip";
import GeographicReach from "../components/projects/GeographicReach";

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>("Tous");

  return (
    <div>
      <HeroProject filter={filter} setFilter={setFilter} />
      <AllProjects filter={filter} />
      <TechDNA />
      <ProjectTimeline />
      <ImpactStrip />
      <Testamonals />
      <GeographicReach />
      <CallAction
        title={"Prêt à construire quelque chose d'extraordinaire ?"}
        description={
          "We are a software development agency passionate about crafting innovative digital solutions that drive growth and transform businesses."
        }
        label={"Commençons aujourd'hui!"}
        to={"/contact"}
      />
    </div>
  );
};

export default Projects;
```

- [ ] **Step 6.2 — Vérification finale complète**

```bash
npm run dev
```

Parcourir `/projects` et vérifier l'ordre et le rendu de chaque section :
1. Hero + filtres ✓
2. Grille projets filtrée ✓
3. TechDNA — bulles technologies ✓
4. ProjectTimeline — frise chronologique ✓
5. ImpactStrip — métriques fond sombre ✓
6. Testimonials ✓
7. GeographicReach — carte SVG ✓
8. CTA ✓

Switcher en dark mode et vérifier que chaque section est cohérente.

- [ ] **Step 6.3 — Vérifier qu'il n'y a pas d'erreurs TypeScript**

```bash
npm run build
```

Expected: build réussi sans erreur TypeScript ni import manquant.

- [ ] **Step 6.4 — Commit final**

```bash
git add src/pages/Projects.tsx
git commit -m "feat(projects): wire TechDNA, ProjectTimeline, ImpactStrip, GeographicReach into page"
```

---

## Self-Review

**Spec coverage:**
- [x] TechDNA — constellation de bulles par fréquence → Task 2
- [x] ProjectTimeline — frise chronologique alternée + mobile vertical → Task 3
- [x] ImpactStrip — fond sombre, monospace, compteurs animés → Task 4
- [x] GeographicReach — SVG carte, points pulsants, lignes animées → Task 5
- [x] Ordre final dans Projects.tsx → Task 6
- [x] Source de données partagée → Task 1

**Placeholders:** Aucun TBD/TODO dans les implémentations.

**Type consistency:**
- `Project` interface définie dans `src/data/projects.ts`, réutilisée via import dans AllProjects
- `LOCATIONS` typé `as const` dans GeographicReach — aucun risque de typo
- `METRICS` / `Metric` interface locale à ImpactStrip — pas de fuite de types
- `AnimatedCounter` props correspondent exactement à l'usage dans la grille
