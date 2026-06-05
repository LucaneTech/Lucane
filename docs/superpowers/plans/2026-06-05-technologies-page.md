# Technologies Page — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remplacer la section OurTechnologies par 4 nouvelles sections premium (StackTopography, Arbitrages, TechInProd, Veille) sur la page Technologies.

**Architecture:** Chaque section est un composant autonome dans `src/components/technologies/`. La page `Technologies.tsx` les importe et les câble en séquence. Aucune logique partagée entre sections — chaque composant est indépendant.

**Tech Stack:** React 19, TypeScript, Tailwind CSS v4 (`@theme` in `tokens.css`), Framer Motion 12, `useInView` from framer-motion.

---

## File Map

| Fichier | Action | Rôle |
|---|---|---|
| `src/components/technologies/StackTopography.tsx` | Créer | Section 02 — Layers visuels + lignes SVG |
| `src/components/technologies/Arbitrages.tsx` | Créer | Section 03 — Tableau de choix assumés |
| `src/components/technologies/TechInProd.tsx` | Créer | Section 04 — Data sheet éditoriale |
| `src/components/technologies/Veille.tsx` | Créer | Section 05 — Timeline + stats |
| `src/pages/Technologies.tsx` | Modifier | Câbler les 4 sections, retirer OurTechnologies |

---

## Task 1: StackTopography

**Files:**
- Create: `src/components/technologies/StackTopography.tsx`

- [ ] **Step 1: Créer le composant**

```tsx
// src/components/technologies/StackTopography.tsx
import React, { useRef, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";

interface ChipData {
  label: string;
  tooltip: string;
}

interface LayerData {
  name: string;
  chips: ChipData[];
}

const LAYERS: LayerData[] = [
  {
    name: "Surface",
    chips: [
      { label: "React", tooltip: "UI composants & state management" },
      { label: "Tailwind CSS", tooltip: "Design system utilitaire" },
      { label: "React Native", tooltip: "Apps mobiles cross-platform" },
    ],
  },
  {
    name: "Logique",
    chips: [
      { label: "Node.js", tooltip: "API REST & temps réel" },
      { label: "Django", tooltip: "Backend Python robuste & admin" },
      { label: "Python", tooltip: "Data processing & scripting" },
    ],
  },
  {
    name: "Données & Infra",
    chips: [
      { label: "PostgreSQL", tooltip: "Base relationnelle principale" },
      { label: "MongoDB", tooltip: "Documents & données flexibles" },
      { label: "AWS", tooltip: "Cloud hosting & services" },
      { label: "Docker", tooltip: "Conteneurisation & déploiements" },
    ],
  },
];

const CONNECTIONS: [string, string][] = [
  ["React", "Node.js"],
  ["React", "Django"],
  ["Node.js", "PostgreSQL"],
  ["Node.js", "MongoDB"],
  ["Django", "PostgreSQL"],
  ["AWS", "Docker"],
];

interface SvgLine {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  length: number;
}

interface ChipProps {
  chip: ChipData;
  delay: number;
}

const ChipElement = React.forwardRef<HTMLDivElement, ChipProps>(
  ({ chip, delay }, ref) => {
    const [showTooltip, setShowTooltip] = useState(false);
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35, delay }}
        className="relative"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <div className="rounded-md border border-primary/25 bg-primary/10 text-white/80 font-medium px-4 py-2 text-sm cursor-default select-none">
          {chip.label}
        </div>
        {showTooltip && (
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-dark-elevated text-white text-[11px] px-3 py-1.5 rounded-md shadow-sm whitespace-nowrap pointer-events-none z-20">
            {chip.tooltip}
          </div>
        )}
      </motion.div>
    );
  }
);
ChipElement.displayName = "ChipElement";

const StackTopography: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const chipRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const [lines, setLines] = useState<SvgLine[]>([]);
  const [ready, setReady] = useState(false);

  const calculateLines = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const containerRect = container.getBoundingClientRect();
    const newLines: SvgLine[] = [];

    for (const [fromLabel, toLabel] of CONNECTIONS) {
      const fromEl = chipRefs.current.get(fromLabel);
      const toEl = chipRefs.current.get(toLabel);
      if (!fromEl || !toEl) continue;

      const fromRect = fromEl.getBoundingClientRect();
      const toRect = toEl.getBoundingClientRect();

      const x1 = fromRect.left + fromRect.width / 2 - containerRect.left;
      const y1 = fromRect.top + fromRect.height / 2 - containerRect.top;
      const x2 = toRect.left + toRect.width / 2 - containerRect.left;
      const y2 = toRect.top + toRect.height / 2 - containerRect.top;
      const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

      newLines.push({ x1, y1, x2, y2, length });
    }

    setLines(newLines);
    setReady(true);
  }, []);

  useEffect(() => {
    // Wait for chips to animate in before calculating
    const timer = setTimeout(calculateLines, 600);
    const observer = new ResizeObserver(calculateLines);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [calculateLines]);

  return (
    <section className="py-20 px-6 bg-dark overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs uppercase tracking-[0.2em] font-mono text-primary mb-3">
            Architecture
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Topographie du stack
          </h2>
        </motion.div>

        <div ref={containerRef} className="relative space-y-10">
          {/* SVG overlay — drawn after chips appear */}
          {ready && (
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ zIndex: 0 }}
            >
              {lines.map((line, i) => (
                <motion.line
                  key={i}
                  x1={line.x1}
                  y1={line.y1}
                  x2={line.x2}
                  y2={line.y2}
                  stroke="rgba(0,128,128,0.25)"
                  strokeWidth="1"
                  strokeDasharray={line.length}
                  initial={{ strokeDashoffset: line.length }}
                  whileInView={{ strokeDashoffset: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 + i * 0.05 }}
                />
              ))}
            </svg>
          )}

          {/* Layer rows */}
          {LAYERS.map((layer, layerIdx) => (
            <div key={layer.name} className="flex items-center gap-6 relative z-10">
              <div className="w-36 flex-shrink-0">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary/50">
                  {layer.name}
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                {layer.chips.map((chip, chipIdx) => (
                  <ChipElement
                    key={chip.label}
                    chip={chip}
                    delay={layerIdx * 0.2 + chipIdx * 0.05}
                    ref={(el) => {
                      if (el) chipRefs.current.set(chip.label, el);
                      else chipRefs.current.delete(chip.label);
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StackTopography;
```

- [ ] **Step 2: Vérifier TypeScript**

```bash
npx tsc --noEmit
```

Attendu : aucune erreur.

- [ ] **Step 3: Commit**

```bash
git add src/components/technologies/StackTopography.tsx
git commit -m "feat(technologies): add StackTopography section — layers + SVG connections"
```

---

## Task 2: Arbitrages

**Files:**
- Create: `src/components/technologies/Arbitrages.tsx`

- [ ] **Step 1: Créer le composant**

```tsx
// src/components/technologies/Arbitrages.tsx
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Arbitrage {
  domain: string;
  rejected: string;
  chosen: string;
  reason: string;
}

const ARBITRAGES: Arbitrage[] = [
  {
    domain: "Frontend",
    rejected: "Vue.js",
    chosen: "React",
    reason: "Maturité, ecosystem, React Native en bonus",
  },
  {
    domain: "Base de données",
    rejected: "MySQL",
    chosen: "PostgreSQL",
    reason: "JSON natif, transactions, performances",
  },
  {
    domain: "Backend",
    rejected: "FastAPI",
    chosen: "Django",
    reason: "Admin, ORM, ecosystem Python complet",
  },
  {
    domain: "CI/CD",
    rejected: "Jenkins",
    chosen: "GitHub Actions",
    reason: "DX supérieur et intégration native Git",
  },
  {
    domain: "Mobile",
    rejected: "Flutter",
    chosen: "React Native",
    reason: "Réutilisation du code React web",
  },
  {
    domain: "Styling",
    rejected: "CSS Modules",
    chosen: "Tailwind CSS",
    reason: "Vélocité de dev et cohérence du design system",
  },
];

function StrikethroughText({
  text,
  animate,
  delay,
}: {
  text: string;
  animate: boolean;
  delay: number;
}) {
  return (
    <span className="relative inline-block">
      <span className="text-white/30 italic">{text}</span>
      <motion.span
        className="absolute left-0 top-1/2 -translate-y-1/2 h-px bg-white/40 origin-left"
        style={{ width: "100%" }}
        initial={{ scaleX: 0 }}
        animate={animate ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.6, delay, ease: "easeOut" }}
      />
    </span>
  );
}

function ArbitrageRow({
  item,
  index,
}: {
  item: Arbitrage;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 py-6 border-b border-white/8 hover:bg-white/[0.02] transition-colors duration-150 px-2 -mx-2 rounded"
    >
      {/* Domain label */}
      <motion.span
        initial={{ x: -20, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: index * 0.06 }}
        className="font-mono text-xs uppercase tracking-widest text-primary w-36 flex-shrink-0"
      >
        {item.domain}
      </motion.span>

      {/* Rejected */}
      <div className="flex-1 sm:text-right">
        <StrikethroughText
          text={item.rejected}
          animate={isInView}
          delay={index * 0.06 + 0.2}
        />
      </div>

      {/* VS separator */}
      <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
        <div className="w-10 border-t border-primary/15" />
        <span className="font-mono text-xs text-primary/40">VS</span>
        <div className="w-10 border-t border-primary/15" />
      </div>

      {/* Chosen + pill */}
      <div className="flex-1 flex items-center gap-3">
        <span className="text-white font-semibold">{item.chosen}</span>
        <span className="bg-primary/15 text-primary border border-primary/30 rounded-full text-[10px] px-2 py-0.5 font-mono uppercase tracking-wide flex-shrink-0">
          Retenu
        </span>
      </div>

      {/* Reason */}
      <p className="text-white/55 text-sm flex-1 sm:text-right max-w-xs sm:ml-auto">
        {item.reason}
      </p>
    </motion.div>
  );
}

const Arbitrages: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-dark-surface">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs uppercase tracking-[0.2em] font-mono text-primary mb-3">
            Décisions techniques
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Nos choix, assumés.
          </h2>
        </motion.div>

        <div className="border-t border-white/8">
          {ARBITRAGES.map((item, i) => (
            <ArbitrageRow key={item.domain} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Arbitrages;
```

- [ ] **Step 2: Vérifier TypeScript**

```bash
npx tsc --noEmit
```

Attendu : aucune erreur.

- [ ] **Step 3: Commit**

```bash
git add src/components/technologies/Arbitrages.tsx
git commit -m "feat(technologies): add Arbitrages section — decision rationale rows"
```

---

## Task 3: TechInProd

**Files:**
- Create: `src/components/technologies/TechInProd.tsx`

- [ ] **Step 1: Créer le composant**

> **Note :** Les métriques ci-dessous (`< 1.5s`, `50k+`, etc.) sont des exemples. Remplacer par les vraies données de production avant mise en ligne.

```tsx
// src/components/technologies/TechInProd.tsx
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface DomainMetric {
  prefix?: string;
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
}

interface Domain {
  name: string;
  primary: DomainMetric;
  secondary: string;
  stack: string[];
}

// ⚠️ Remplacer par les vraies métriques de production
const DOMAINS: Domain[] = [
  {
    name: "Frontend",
    primary: { prefix: "< ", value: 1.5, suffix: "s", label: "TTI moyen", decimals: 1 },
    secondary: "Lighthouse 95+",
    stack: ["React", "Tailwind"],
  },
  {
    name: "Backend",
    primary: { value: 50, suffix: "k+", label: "req/jour" },
    secondary: "p95 < 120ms",
    stack: ["Node.js", "Django"],
  },
  {
    name: "Infra",
    primary: { prefix: "< ", value: 3, suffix: "min", label: "deploy Docker" },
    secondary: "Zero-downtime",
    stack: ["AWS", "GitHub CI"],
  },
];

function AnimatedCounter({
  target,
  prefix = "",
  suffix,
  active,
  decimals = 0,
}: {
  target: number;
  prefix?: string;
  suffix: string;
  active: boolean;
  decimals?: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let frame = 0;
    const total = 60;
    const id = setInterval(() => {
      frame++;
      const raw = (frame / total) * target;
      setCount(parseFloat(raw.toFixed(decimals)));
      if (frame >= total) clearInterval(id);
    }, 1000 / 60);
    return () => clearInterval(id);
  }, [active, target, decimals]);

  const display =
    decimals > 0
      ? count.toFixed(decimals)
      : count.toLocaleString("fr-FR");

  return (
    <span className="font-mono text-5xl font-bold text-white tabular-nums">
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

const TechInProd: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 px-6 bg-dark">
      <div className="max-w-6xl mx-auto">
        <motion.span
          className="inline-block text-xs uppercase tracking-[0.2em] font-mono text-primary mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
        >
          En production
        </motion.span>

        <div className="border-t border-white/8">
          {DOMAINS.map((domain, i) => (
            <motion.div
              key={domain.name}
              initial={{ opacity: 0, x: -8 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-wrap sm:flex-nowrap items-center gap-4 sm:gap-6 py-8 border-b border-white/8 hover:bg-white/[0.03] transition-colors duration-150"
            >
              {/* Domain */}
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary w-28 flex-shrink-0">
                {domain.name}
              </span>

              {/* Primary metric */}
              <div className="flex items-end gap-3">
                <AnimatedCounter
                  target={domain.primary.value}
                  prefix={domain.primary.prefix}
                  suffix={domain.primary.suffix}
                  active={isInView}
                  decimals={domain.primary.decimals}
                />
                <span className="text-sm text-white/40 pb-2 max-w-[140px] leading-tight">
                  {domain.primary.label}
                </span>
              </div>

              {/* Dot separator */}
              <span className="hidden sm:inline text-white/20 font-mono text-lg flex-shrink-0">
                ·
              </span>

              {/* Secondary metric */}
              <span className="font-mono text-base text-white/55 flex-shrink-0">
                {domain.secondary}
              </span>

              {/* Stack pills — pushed to the right */}
              <div className="sm:ml-auto flex gap-2 flex-shrink-0">
                {domain.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] text-white/30 border border-white/10 px-2 py-0.5 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechInProd;
```

- [ ] **Step 2: Vérifier TypeScript**

```bash
npx tsc --noEmit
```

Attendu : aucune erreur.

- [ ] **Step 3: Commit**

```bash
git add src/components/technologies/TechInProd.tsx
git commit -m "feat(technologies): add TechInProd section — editorial data sheet with animated counters"
```

---

## Task 4: Veille

**Files:**
- Create: `src/components/technologies/Veille.tsx`

- [ ] **Step 1: Créer le composant**

> **Note :** Les événements de la timeline et les 3 stats sont des exemples. Remplacer avant mise en ligne.

```tsx
// src/components/technologies/Veille.tsx
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

type EventType = "REPO" | "CONTRIB" | "PACKAGE" | "MIGRATION";

interface TimelineEvent {
  year: number;
  type: EventType;
  title: string;
  description: string;
}

interface Stat {
  value: string;
  label: string;
}

// ⚠️ Remplacer par les vraies données de l'équipe
const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: 2022,
    type: "REPO",
    title: "Premier repo open source",
    description: "Publication du premier projet public sur GitHub",
  },
  {
    year: 2023,
    type: "CONTRIB",
    title: "Contribution upstream",
    description: "PR acceptée sur django-rest-framework",
  },
  {
    year: 2024,
    type: "PACKAGE",
    title: "Package npm publié",
    description: "Librairie React publiée sur le registry npm",
  },
  {
    year: 2025,
    type: "MIGRATION",
    title: "Migration TypeScript strict",
    description: "TS strict mode activé sur 3 projets client",
  },
];

// ⚠️ Remplacer par les vraies données
const STATS: Stat[] = [
  { value: "15+", label: "repos GitHub" },
  { value: "2 400+", label: "commits" },
  { value: "4", label: "technos évaluées / trimestre" },
];

const TYPE_STYLES: Record<EventType, string> = {
  REPO: "bg-primary/10 text-primary",
  CONTRIB: "bg-blue-500/10 text-blue-400",
  PACKAGE: "bg-orange-500/10 text-orange-400",
  MIGRATION: "bg-green-500/10 text-green-400",
};

const Veille: React.FC = () => {
  const axisRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(axisRef, { once: true, margin: "-60px" });

  return (
    <section className="py-20 px-6 bg-surface overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs uppercase tracking-[0.2em] font-mono text-primary mb-3">
            Engagement
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-ink max-w-xl leading-tight">
            On ne consomme pas les technos. On les pratique.
          </h2>
        </motion.div>

        {/* Timeline — horizontally scrollable on mobile */}
        <div
          className="overflow-x-auto -mx-6 px-6 pb-6 [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="min-w-[640px]">
            {/* Axis */}
            <div ref={axisRef} className="relative h-px bg-slate-200 mb-10">
              <motion.div
                className="absolute inset-0 bg-primary origin-left"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>

            {/* Events */}
            <div className="grid grid-cols-4 gap-6">
              {TIMELINE_EVENTS.map((event, i) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
                  className="relative"
                >
                  {/* Dot + year above axis */}
                  <div className="absolute -top-[42px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-0.5">
                    <span className="font-mono text-[10px] text-ink-faint">
                      {event.year}
                    </span>
                    <span className="text-primary text-xs">◉</span>
                  </div>

                  {/* Content */}
                  <span
                    className={`inline-block font-mono text-[9px] uppercase px-1.5 py-0.5 rounded ${TYPE_STYLES[event.type]}`}
                  >
                    {event.type}
                  </span>
                  <p className="text-sm text-ink font-semibold mt-2 leading-snug">
                    {event.title}
                  </p>
                  <p className="text-xs text-ink-muted mt-1 leading-relaxed">
                    {event.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-0">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center ${
                i < STATS.length - 1
                  ? "sm:border-r sm:border-slate-200 sm:pr-12 sm:mr-12"
                  : ""
              }`}
            >
              <span className="font-mono text-3xl font-bold text-ink">
                {stat.value}
              </span>
              <span className="text-xs text-ink-muted font-mono mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Veille;
```

- [ ] **Step 2: Vérifier TypeScript**

```bash
npx tsc --noEmit
```

Attendu : aucune erreur.

- [ ] **Step 3: Commit**

```bash
git add src/components/technologies/Veille.tsx
git commit -m "feat(technologies): add Veille section — horizontal timeline + stats"
```

---

## Task 5: Wiring + Retrait OurTechnologies

**Files:**
- Modify: `src/pages/Technologies.tsx`

- [ ] **Step 1: Mettre à jour la page**

Remplacer le contenu de `src/pages/Technologies.tsx` par :

```tsx
import React from "react";
import Hero from "../components/technologies/Hero";
import StackTopography from "../components/technologies/StackTopography";
import Arbitrages from "../components/technologies/Arbitrages";
import TechInProd from "../components/technologies/TechInProd";
import Veille from "../components/technologies/Veille";
import Button from "../ui/Button";
import { motion } from "framer-motion";

const Technologies: React.FC = () => {
  return (
    <>
      <Hero />
      <StackTopography />
      <Arbitrages />
      <TechInProd />
      <Veille />

      {/* CTA */}
      <section className="py-20 md:py-24 px-6 bg-dark">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Prêt à construire quelque chose d'extraordinaire ?
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mb-8">
            Nous combinons ces technologies pour livrer des solutions robustes,
            évolutives et adaptées à votre vision.
          </p>
          <Button
            variant="primary"
            size="lg"
            label="Commençons aujourd'hui"
            to="/contact"
          />
        </motion.div>
      </section>
    </>
  );
};

export default Technologies;
```

- [ ] **Step 2: Vérifier TypeScript**

```bash
npx tsc --noEmit
```

Attendu : aucune erreur.

- [ ] **Step 3: Lancer le dev server et vérifier visuellement**

```bash
npm run dev
```

Ouvrir `http://localhost:5173/technologies` et vérifier :
- [ ] StackTopography : 3 layers visibles, chips animés au scroll, lignes SVG se dessinent après
- [ ] Arbitrages : 6 rows, barré animé sur le rejeté, pill [Retenu] visible
- [ ] TechInProd : 3 rows sans card, chiffres s'animent au scroll
- [ ] Veille : timeline scrollable sur mobile, ligne teal se dessine, stats en bas
- [ ] CTA : existant, inchangé
- [ ] OurTechnologies : absent de la page

Vérifier également en mobile (DevTools responsive, 375px) :
- [ ] Arbitrages rows : lisibles en colonne
- [ ] TechInProd rows : flex wrap sans overflow
- [ ] Timeline : scroll horizontal, pas de coupure

- [ ] **Step 4: Commit final**

```bash
git add src/pages/Technologies.tsx
git commit -m "feat(technologies): wire 4 new sections, remove OurTechnologies"
```
