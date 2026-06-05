import { useState } from "react";
import type React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Smartphone,
  PenTool,
  Cloud,
  TrendingUp,
  Cog,
  Wrench,
  Plus,
  Minus,
} from "lucide-react";
import { cn } from "../../ui/utils";

type ServiceColor = "dev" | "design" | "growth" | "cloud";

type ServiceProp = {
  id: string;
  title: string;
  color: ServiceColor;
  icon: React.ElementType;
  bullets: string[];
  desc: string;
};

const expertises: ServiceProp[] = [
  {
    id: "web",
    title: "Développement Web",
    color: "dev",
    icon: Globe,
    bullets: [
      "React, Next.js, TypeScript",
      "APIs REST & GraphQL",
      "Architecture scalable",
      "Performance & SEO",
    ],
    desc: "Applications web modernes, performantes et accessibles, optimisées pour le référencement et les Core Web Vitals.",
  },
  {
    id: "mobile",
    title: "Développement Mobile",
    color: "design",
    icon: Smartphone,
    bullets: [
      "iOS & Android cross-platform",
      "React Native & Expo",
      "Push notifications & Offline-first",
      "Publication App Store & Google Play",
    ],
    desc: "Applications mobiles natives et cross-platform pensées pour la performance et une expérience utilisateur de premier rang.",
  },
  {
    id: "design",
    title: "UX/UI Design",
    color: "design",
    icon: PenTool,
    bullets: [
      "Wireframes & prototypes interactifs",
      "Design system cohérent",
      "Tests utilisateurs & itérations",
      "Figma & Storybook",
    ],
    desc: "Maquettes modernes et intuitives fondées sur la recherche utilisateur et les meilleures pratiques UX.",
  },
  {
    id: "cloud",
    title: "Cloud & Infrastructure",
    color: "cloud",
    icon: Cloud,
    bullets: [
      "AWS / GCP / Azure",
      "CI/CD automatisé",
      "Docker & Kubernetes",
      "Scalabilité & haute disponibilité",
    ],
    desc: "Hébergement cloud, déploiement scalable et optimisation des performances pour accompagner votre croissance.",
  },
  {
    id: "growth",
    title: "Marketing Digital",
    color: "growth",
    icon: TrendingUp,
    bullets: [
      "SEO & SEM avancé",
      "Campagnes multi-canaux",
      "Analytics & reporting mensuel",
      "Acquisition & conversion",
    ],
    desc: "Stratégies digitales pour accroître votre visibilité, générer des leads et renforcer votre présence en ligne.",
  },
  {
    id: "automation",
    title: "Automatisation & Conseil",
    color: "dev",
    icon: Cog,
    bullets: [
      "Scripts & bots métiers",
      "Intégrations API tierces",
      "Tableaux de bord analytiques",
      "Conseil en architecture",
    ],
    desc: "Automatisation de processus et développement d'outils sur mesure pour améliorer votre productivité.",
  },
  {
    id: "support",
    title: "Maintenance & Support",
    color: "cloud",
    icon: Wrench,
    bullets: [
      "Monitoring applicatif 24/7",
      "Corrections garanties < 24h",
      "Mises à jour de sécurité",
      "Évolutions fonctionnelles",
    ],
    desc: "Maintenance évolutive, corrections, mises à jour et support continu pour garantir la stabilité de vos solutions.",
  },
];

const iconColor: Record<ServiceColor, string> = {
  dev: "text-dev",
  design: "text-design",
  growth: "text-growth",
  cloud: "text-cloud",
};

const accentBorder: Record<ServiceColor, string> = {
  dev: "bg-dev",
  design: "bg-design",
  growth: "bg-growth",
  cloud: "bg-cloud",
};

const dotColor: Record<ServiceColor, string> = {
  dev: "bg-dev",
  design: "bg-design",
  growth: "bg-growth",
  cloud: "bg-cloud",
};

const Expertise: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="py-20 px-6 bg-surface dark:bg-dark-surface">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div>
            <span className="text-xs uppercase tracking-widest text-primary font-medium">
              Services
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-ink dark:text-white leading-tight">
              Nos <span className="text-primary">Expertises</span>
            </h2>
          </div>
          <p className="text-ink-muted dark:text-ink-faint text-sm leading-relaxed max-w-[260px] sm:text-right">
            Nous concevons, développons et faisons évoluer des solutions digitales orientées résultats.
          </p>
        </motion.div>

        {/* Service list */}
        <div className="divide-y divide-base-300 dark:divide-slate-800">
          {expertises.map((service, i) => {
            const Icon = service.icon;
            const isOpen = openId === service.id;

            return (
              <motion.div
                key={service.id}
                className="group relative cursor-pointer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.055 }}
                onClick={() => setOpenId(isOpen ? null : service.id)}
              >
                {/* Active left indicator */}
                <span
                  className={cn(
                    "absolute left-0 top-0 w-0.5 transition-all duration-300 rounded-sm",
                    isOpen ? `${accentBorder[service.color]} h-full` : "h-0"
                  )}
                />

                <div className="flex items-start gap-5 py-5 pl-4">
                  {/* Icon — colored, no background */}
                  <Icon
                    className={cn(
                      "w-5 h-5 shrink-0 mt-0.5 transition-colors duration-200",
                      isOpen
                        ? iconColor[service.color]
                        : "text-ink-faint dark:text-ink-muted group-hover:" + iconColor[service.color]
                    )}
                    strokeWidth={1.5}
                  />

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <h3
                        className={cn(
                          "text-base md:text-[17px] font-semibold leading-snug transition-colors duration-200",
                          isOpen
                            ? "text-primary"
                            : "text-ink dark:text-white group-hover:text-primary"
                        )}
                      >
                        {service.title}
                      </h3>

                      <div className="flex items-center gap-3 shrink-0 mt-0.5">
                        <span className="font-mono text-[11px] text-ink-faint dark:text-ink-muted select-none hidden sm:block">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={cn(
                            "w-5 h-5 rounded-md border flex items-center justify-center transition-colors duration-200",
                            isOpen
                              ? `border-${service.color} text-${service.color}`
                              : "border-ink-faint dark:border-slate-700 text-ink-muted dark:text-ink-muted"
                          )}
                        >
                          {isOpen ? <Minus size={10} /> : <Plus size={10} />}
                        </span>
                      </div>
                    </div>

                    {/* Description — always visible */}
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-muted dark:text-ink-faint pr-4">
                      {service.desc}
                    </p>

                    {/* Bullets — revealed on expand */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.24, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 pb-1">
                            {service.bullets.map((b) => (
                              <div key={b} className="flex items-start gap-2.5">
                                <span
                                  className={cn(
                                    "w-1 h-1 rounded-full mt-2 flex-shrink-0",
                                    dotColor[service.color]
                                  )}
                                />
                                <span className="text-sm text-ink-muted dark:text-ink-faint">
                                  {b}
                                </span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
