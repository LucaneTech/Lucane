import React from "react";
import { motion, useInView } from "framer-motion";
import { Globe, Smartphone, Cloud, ArrowUpRight } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Expertise {
  id: string;
  icon: React.ElementType;
  label: string;
  title: string;
  description: string;
  stack: string[];
  kpis: { value: string; label: string }[];
  caseStudy: string;
  image: string; // URL image représentative
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const expertises: Expertise[] = [
  {
    id: "web",
    icon: Globe,
    label: "01 — Web & Frontend",
    title: "Des interfaces qui convertissent et durent.",
    description:
      "Nous développons des applications web performantes, accessibles et optimisées pour le référencement naturel. Nos équipes maîtrisent les derniers standards du développement frontend moderne.",
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite", "GraphQL"],
    kpis: [
      { value: "−40%", label: "Temps d'interaction" },
      { value: ">90", label: "Lighthouse Score" },
      { value: "100%", label: "Core Web Vitals" },
    ],
    caseStudy:
      "Refonte d'une plateforme e-learning : migration React + Next.js, −60% sur les temps de chargement et +35% de taux de complétion.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
  },
  {
    id: "mobile",
    icon: Smartphone,
    label: "02 — Mobile iOS & Android",
    title: "Du natif cross-platform, sans compromis.",
    description:
      "Applications mobiles cross-platform pensées pour la performance et une expérience utilisateur de premier rang, disponibles sur App Store et Google Play.",
    stack: ["React Native", "Flutter", "Expo", "Firebase", "Push Notifications", "Offline-first"],
    kpis: [
      { value: "4.8★", label: "Note App Store" },
      { value: ">45%", label: "Rétention J7" },
      { value: "<0.1%", label: "Crash rate" },
    ],
    caseStudy:
      "App e-commerce B2C : 10 000 téléchargements en 3 mois, note 4.9★ App Store, panier moyen +22% vs site web.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
  },
  {
    id: "cloud",
    icon: Cloud,
    label: "03 — Cloud & Architecture",
    title: "Une infrastructure qui scale avec votre ambition.",
    description:
      "Conception et déploiement d'infrastructures cloud scalables, sécurisées et résilientes. Nous couvrons l'ensemble du cycle DevOps, du code à la production en continu.",
    stack: ["AWS", "GCP", "Docker", "Kubernetes", "PostgreSQL", "Redis", "CI/CD"],
    kpis: [
      { value: "99.9%", label: "Uptime SLA" },
      { value: "<5 min", label: "Déploiement" },
      { value: "−30%", label: "Coûts infra" },
    ],
    caseStudy:
      "Migration monolithe → microservices AWS : −70% d'incidents, scalabilité ×10 lors des pics de charge.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
  },
];

// ─── KPI Card ─────────────────────────────────────────────────────────────────
const KpiCard: React.FC<{ value: string; label: string; delay: number }> = ({
  value,
  label,
  delay,
}) => (
  <motion.div
    className="flex flex-col gap-0.5 px-4 py-3 rounded-md bg-surface dark:bg-dark/50 border border-slate-100 dark:border-slate-700/50"
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay }}  
  >
    <span className="text-xl font-bold text-primary leading-none">{value}</span>
    <span className="text-xs text-ink-muted dark:text-slate-300">{label}</span>
  </motion.div>
);

// ─── Expertise Row ────────────────────────────────────────────────────────────
const ExpertiseRow: React.FC<{ exp: Expertise; index: number }> = ({ exp, index }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = exp.icon;
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      } gap-10 lg:gap-16 items-center`}
      initial={{ opacity: 0, y: 48 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* ── Colonne texte ────────────────────────────────────────────────── */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        {/* Label numéroté + icône */}
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
            <Icon className="w-4 h-4 text-primary" />
          </div>
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            {exp.label}
          </span>
        </div>

        {/* Titre */}
        <h3 className="text-2xl md:text-3xl font-bold text-ink dark:text-white leading-snug">
          {exp.title}
        </h3>

        {/* Description */}
        <p className="text-ink-muted dark:text-slate-300 leading-relaxed text-sm md:text-base">
          {exp.description}
        </p>

        {/* KPIs */}
        <div className="grid grid-cols-3 gap-2">
          {exp.kpis.map((kpi, i) => (
            <KpiCard key={kpi.label} {...kpi} delay={0.1 + i * 0.07} />
          ))}
        </div>

        {/* Stack badges */}
        <div className="flex flex-wrap gap-2">
          {exp.stack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 bg-surface text-ink-muted text-xs font-medium rounded-sm dark:text-slate-900 dark:border-slate-600"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Cas client */}
        <div className="border-l-2 border-primary pl-4">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1.5">
            Cas client
          </p>
          <p className="text-sm text-ink-muted dark:text-slate-300 leading-relaxed">{exp.caseStudy}</p>
        </div>
      </div>

      {/* ── Colonne image ─────────────────────────────────────────────────── */}
      <div className="w-full lg:w-1/2">
        <motion.div
          className="relative rounded-sm overflow-hidden aspect-[4/3] shadow-xl group"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <img
            src={exp.image}
            alt={exp.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />

          {/* Overlay gradient bas */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          {/* Glow blur primary au hover */}
          <div
            className="
              absolute bottom-0 left-1/2 -translate-x-1/2
              w-3/4 h-16 bg-primary rounded-full blur-2xl
              opacity-0 translate-y-4
              group-hover:opacity-50 group-hover:translate-y-2
              transition-all duration-500 ease-out
              pointer-events-none
            "
          />

          {/* Badge flottant */}
          <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-pill px-3 py-1.5 shadow-sm">
            <Icon className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-semibold text-ink">{exp.title}</span>
            <ArrowUpRight className="w-3 h-3 text-ink-muted" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

// ─── Section principale ───────────────────────────────────────────────────────
const ExpertiseDeepDive: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">

        {/* Header centré */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-ink dark:text-white">
            Nos <span className="text-primary">Domaines d'Excellence</span>
          </h2>
          <p className="mt-4 text-lg text-ink-muted dark:text-slate-300 max-w-xl mx-auto leading-relaxed">
            Chaque expertise est une spécialisation profonde — stack, KPIs et
            cas clients à l'appui.
          </p>
        </motion.div>

        {/* Rows alternées */}
        <div className="flex flex-col gap-24 lg:gap-32">
          {expertises.map((exp, index) => (
            <ExpertiseRow key={exp.id} exp={exp} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExpertiseDeepDive;