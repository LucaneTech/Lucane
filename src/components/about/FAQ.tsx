import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";

const faqs = [
  {
    q: "Depuis quand Lucane Tech existe-t-elle ?",
    a: "Lucane Tech a été fondée en 2021 par Francisco Mouanda, avec l'ambition de créer un pont technologique entre l'Afrique et le monde.",
  },
  {
    q: "Où êtes-vous basés ?",
    a: "Notre équipe est répartie entre Paris et Brazzaville, ce qui nous permet d'être proches de nos clients en France comme en Afrique centrale.",
  },
  {
    q: "Combien êtes-vous dans l'équipe ?",
    a: "Nous sommes une équipe de 5 experts passionnés — développeurs, designers et chefs de projet — qui travaillent en synergie sur chaque mission.",
  },
  {
    q: "Travaillez-vous à distance ?",
    a: "Oui, 100% remote. Nos outils de collaboration nous permettent de travailler efficacement avec des clients partout dans le monde, sans compromis sur la qualité ou la communication.",
  },
  {
    q: "Quels types de projets accompagnez-vous ?",
    a: "Nous accompagnons des startups, PME et entrepreneurs sur des projets web, mobiles, SaaS et de design. Chaque projet est traité avec la même exigence, quelle que soit son envergure.",
  },
  {
    q: "Comment puis-je commencer à travailler avec vous ?",
    a: "Il suffit de nous contacter via notre formulaire ou par email. Nous organisons ensuite un premier appel gratuit pour cerner vos besoins et vous proposer une solution adaptée.",
  },
];

export function FAQ() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs uppercase tracking-widest text-primary font-medium">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-ink mt-3">
            Questions{" "}
            <span className="text-primary">fréquentes</span>
          </h2>
          <p className="text-ink-muted mt-4 max-w-xl mx-auto">
            Trouvez rapidement les réponses à vos questions. Besoin de plus
            d'informations ? N'hésitez pas à nous contacter.
          </p>
        </motion.div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-ink text-base font-semibold hover:text-primary transition-colors hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-ink-muted text-sm leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
