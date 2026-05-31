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
    question: "Quels sont vos délais de livraison typiques ?",
    answer:
      "Les délais varient selon la complexité du projet. Un site vitrine prend généralement 3 à 6 semaines. Une application web ou mobile complète nécessite entre 2 et 6 mois. Nous établissons un planning détaillé dès la phase de découverte, avec des jalons clairs et des livrables intermédiaires validés ensemble.",
  },
  {
    question: "Comment sont structurés vos tarifs ?",
    answer:
      "Nous travaillons selon deux modèles : forfait fixe pour les projets avec un périmètre bien défini, ou régie au jour/homme pour les projets évolutifs. Chaque devis est personnalisé après une session de découverte gratuite. Nos engagements tarifaires sont transparents — aucuns frais cachés.",
  },
  {
    question: "Comment se déroule le suivi de projet ?",
    answer:
      "Vous bénéficiez d'un accès direct à votre chef de projet via un espace dédié (Notion, Linear ou Jira selon vos préférences). Des points d'avancement hebdomadaires sont planifiés. Chaque sprint se conclut par une démonstration en direct et votre validation avant de passer à l'étape suivante.",
  },
  {
    question: "Quelles technologies maîtrisez-vous ?",
    answer:
      "Notre stack principale couvre React / Next.js et Django / FastAPI pour le développement web, React Native et Flutter pour le mobile, PostgreSQL et MongoDB pour les bases de données, et AWS / GCP pour le cloud. Nous maîtrisons également Docker, Kubernetes et l'ensemble de la chaîne CI/CD.",
  },
  {
    question: "Proposez-vous de la maintenance post-livraison ?",
    answer:
      "Oui. Nous proposons des contrats de maintenance évolutive : corrections de bugs, mises à jour de sécurité, évolutions fonctionnelles et monitoring applicatif. La maintenance peut être incluse dans votre contrat dès le départ ou souscrite séparément après la livraison.",
  },
  {
    question: "Travaillez-vous sous NDA / accord de confidentialité ?",
    answer:
      "Absolument. La confidentialité de vos projets est une priorité. Nous signons systématiquement un accord de non-divulgation (NDA) avant toute présentation d'éléments sensibles : business plan, maquettes, données techniques ou stratégiques. La protection de votre propriété intellectuelle est garantie contractuellement.",
  },
];

const FAQ: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white">
            Questions <span className="text-[#008080]">fréquentes</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Tout ce que vous devez savoir avant de démarrer votre projet avec nous.
          </p>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <AccordionItem
                value={`faq-${index}`}
                className="border border-slate-200 dark:border-slate-700 rounded-xl px-6 bg-white dark:bg-slate-800/50"
              >
                <AccordionTrigger className="hover:no-underline text-left font-semibold text-slate-800 dark:text-white py-5 text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
                  {faq.answer}
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
