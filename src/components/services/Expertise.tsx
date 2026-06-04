import type React from "react";
import { motion, type Variants } from "framer-motion";
import {
  Globe,
  Smartphone,
  PenTool,
  Cloud,
  TrendingUp,
  Cog,
  Wrench,
} from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../ui/accordion";

type ServiceProp = {
  id: string;
  title: string;
  color: "dev" | "design" | "growth" | "cloud";
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
    desc: "Nous créons des applications web modernes, performantes et accessibles, optimisées pour le référencement naturel et les Core Web Vitals.",
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
    desc: "Conception de maquettes modernes et intuitives basées sur la recherche utilisateur et les meilleures pratiques UX.",
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

const colorMap: Record<
  ServiceProp["color"],
  { header: string; icon: string; badge: string; dot: string }
> = {
  dev: {
    header: "",
    icon: "bg-dev/10 text-primary",
    badge: "bg-dev/10 text-dev",
    dot: "bg-dev",
  },
  design: {
    header: "",
    icon: "bg-design/10 text-design",
    badge: "bg-design/10 text-design",
    dot: "bg-design",
  },
  growth: {
    header: "",
    icon: "bg-growth/10 text-growth",
    badge: "bg-growth/10 text-growth",
    dot: "bg-growth",
  },
  cloud: {
    header: "",
    icon: "bg-cloud/10 text-cloud",
    badge: "bg-cloud/10 text-cloud",
    dot: "bg-cloud",
  },
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Expertise: React.FC = () => {
  return (
    <motion.section
      className="py-20 px-6 bg-surface dark:bg-dark-surface"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-ink dark:text-white">
            Nos <span className="text-primary">Expertises</span>
          </h2>
          <p className="mt-4 text-lg text-ink-muted  dark:text-slate-300 max-w-3xl mx-auto">
            Nous concevons, développons et faisons évoluer des solutions
            digitales modernes, performantes et orientées résultats.
          </p>
        </motion.div>

        {/* Accordion grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {expertises.map((service) => {
            const Icon = service.icon;
            const colors = colorMap[service.color];
            return (
              <motion.div key={service.id} variants={itemVariants}>
                <Accordion type="single" collapsible>
                  <AccordionItem
                    value={service.id}
                    className="border border-ink-faint/30 dark:border-slate-700/50 rounded-md overflow-hidden bg-white dark:bg-dark/40 backdrop-blur-lg shadow-lg"
                  >
                    {/* Gradient header */}
                    <div
                      className={`bg-gradient-to-br ${colors.header} px-5 pt-4 pb-0`}
                    >
                      <AccordionTrigger className="hover:no-underline py-3 pb-4">
                        <div className="flex items-center gap-3">
                          <div
                            className={`p-2.5 rounded-full ${colors.icon} flex-shrink-0`}
                          >
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className="text-base font-bold text-ink dark:text-white text-left">
                            {service.title}
                          </span>
                        </div>
                      </AccordionTrigger>
                    </div>

                    <AccordionContent className="px-5 pb-5 pt-2">
                      <p className="text-ink-muted  dark:text-slate-300 text-sm leading-relaxed mb-4">
                        {service.desc}
                      </p>
                      <ul className="space-y-1.5">
                        {service.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-2 text-sm text-ink-muted  dark:text-slate-300"
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-md ${colors.dot} flex-shrink-0 mt-1.5`}
                            />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Expertise;
