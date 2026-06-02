import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../ui/accordion";

const faqs = [
  {
    q: "Quels types de projets réalisez-vous ?",
    a: "Nous développons des sites vitrines, applications web et mobiles, plateformes SaaS, outils métiers et solutions cloud. Chaque projet est traité sur mesure, de la conception au déploiement.",
  },
  {
    q: "Quels sont vos délais habituels ?",
    a: "Un MVP peut être livré en 4 à 8 semaines selon la complexité. Un site vitrine prend généralement 3 à 6 semaines. Nous établissons un planning détaillé avec des jalons clairs dès la phase de découverte.",
  },
  {
    q: "Travaillez-vous avec des clients à l'international ?",
    a: "Oui, nous travaillons avec des clients en France, en Afrique et dans la diaspora africaine. Nos outils collaboratifs et notre organisation permettent une collaboration fluide à distance.",
  },
  {
    q: "Comment se déroule la collaboration ?",
    a: "Nous utilisons une approche agile avec des sprints bimensuels. Vous bénéficiez d'un accès direct à votre chef de projet, de points d'avancement hebdomadaires et de démonstrations régulières.",
  },
  {
    q: "Proposez-vous de la maintenance ?",
    a: "Oui, nous proposons des contrats de maintenance évolutive : corrections de bugs, mises à jour de sécurité, évolutions fonctionnelles et monitoring applicatif. La maintenance peut être incluse dès le départ.",
  },
  {
    q: "Quelles sont vos technologies de prédilection ?",
    a: "React, TypeScript, Node.js, Django, React Native pour le développement. AWS, GCP, Docker pour le cloud. PostgreSQL et MongoDB pour les bases de données. Nous choisissons la stack la plus adaptée à vos besoins.",
  },
];

const FAQ: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-surface-alt">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-ink">
            Questions <span className="text-primary">fréquentes</span>
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            Tout ce que vous devez savoir avant de démarrer votre projet avec nous.
          </p>
        </motion.div>

        <Accordion type="single" collapsible className="bg-white rounded-xl border border-ink-faint/20 overflow-hidden divide-y divide-slate-100">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
            >
              <AccordionItem
                value={`faq-${index}`}
                className="border-b border-slate-100 last:border-b-0 px-6"
              >
                <AccordionTrigger className="hover:no-underline text-left font-semibold text-ink py-5 text-base">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-ink-muted leading-relaxed text-sm">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
