import React from "react";
import { motion } from "framer-motion";
import { Globe, Smartphone, Cloud } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../ui/accordion";

const expertises = [
  {
    id: "web",
    icon: Globe,
    title: "Web & Frontend",
    description:
      "Nous développons des applications web performantes, accessibles et optimisées pour le référencement naturel. Nos équipes maîtrisent les derniers standards du développement frontend moderne.",
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite", "GraphQL"],
    kpis: ["TTI réduit de 40%", "Lighthouse Score > 90", "Core Web Vitals au vert"],
    caseStudy:
      "Refonte complète d'une plateforme e-learning : migration vers React + Next.js, gain de 60% sur les temps de chargement et +35% de taux de complétion des cours.",
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile iOS & Android",
    description:
      "Applications mobiles natives et cross-platform pensées pour la performance, l'accessibilité et une expérience utilisateur de premier rang, disponibles sur App Store et Google Play.",
    stack: ["React Native", "Flutter", "Expo", "Firebase", "Push Notifications", "Offline-first"],
    kpis: ["4.8★ note App Store moyenne", "Rétention J7 > 45%", "Crash rate < 0.1%"],
    caseStudy:
      "Application mobile e-commerce B2C : 10 000 téléchargements en 3 mois, note 4.9★ sur App Store, panier moyen +22% vs site web.",
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "Cloud & Architecture",
    description:
      "Conception et déploiement d'infrastructures cloud scalables, sécurisées et résilientes. Nous couvrons l'ensemble du cycle DevOps, du code à la production en continu.",
    stack: ["AWS", "GCP", "Docker", "Kubernetes", "PostgreSQL", "Redis", "CI/CD"],
    kpis: ["99.9% uptime SLA", "Déploiement continu < 5 min", "Coûts infra réduits de 30%"],
    caseStudy:
      "Migration d'un monolithe vers une architecture microservices sur AWS : réduction des incidents de 70%, scalabilité ×10 lors des pics de charge.",
  },
];

const ExpertiseDeepDive: React.FC = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-ink">
            Nos{" "}
            <span className="text-primary">Domaines d'Excellence</span>
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            Chaque expertise est une spécialisation profonde — stack, KPIs et
            cas clients à l'appui.
          </p>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-0 divide-y divide-slate-100">
          {expertises.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem
                  value={exp.id}
                  className="border-b border-slate-100 last:border-b-0 px-2 data-[state=open]:border-l-4 data-[state=open]:border-l-primary data-[state=open]:pl-4 transition-all duration-200"
                >
                  <AccordionTrigger className="hover:no-underline py-6">
                    <div className="flex items-center gap-4">
                      <div className="p-2.5 rounded-lg bg-primary/10 flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-lg font-bold text-ink text-left">
                        {exp.title}
                      </span>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="pb-6">
                    <p className="text-ink-muted mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      {/* Stack */}
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-ink-muted mb-3">
                          Stack technologique
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.stack.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-pill"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* KPIs */}
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-ink-muted mb-3">
                          KPIs typiques
                        </h4>
                        <ul className="space-y-1.5">
                          {exp.kpis.map((kpi) => (
                            <li
                              key={kpi}
                              className="flex items-center gap-2 text-sm text-ink"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                              {kpi}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Case study */}
                    <div className="bg-surface rounded-xl p-4 border-l-4 border-primary">
                      <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">
                        Cas client
                      </p>
                      <p className="text-sm text-ink-muted leading-relaxed">
                        {exp.caseStudy}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
};

export default ExpertiseDeepDive;
