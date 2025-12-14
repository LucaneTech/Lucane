import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../ui/accordion'

const faqs = [
  {
    question: "Avec quels types de clients travaillez-vous ?",
    answer:
      "Nous accompagnons principalement des startups, PME, entrepreneurs et porteurs de projets digitaux. Que vous lanciez un MVP, modernisiez un outil existant ou développiez une solution à grande échelle, nous adaptons notre approche à votre stade de maturité et à vos objectifs business.",
  },
  {
    question: "Quels types de projets développez-vous ?",
    answer:
      "Nous développons des sites web professionnels, des applications web et mobiles, des plateformes sur mesure, des outils internes et des solutions SaaS. Chaque projet est conçu pour être performant, sécurisé, évolutif et aligné avec vos besoins réels.",
  },
  {
    question: "Combien de temps faut-il pour réaliser un projet ?",
    answer:
      "La durée dépend de la complexité du projet. Un site vitrine peut prendre quelques semaines, tandis qu’une application ou une plateforme sur mesure nécessite généralement plusieurs mois. Après analyse de vos besoins, nous vous fournissons un planning clair et réaliste.",
  },
  {
    question: "Comment se déroule un projet avec votre équipe ?",
    answer:
      "Nous commençons par une phase d’analyse et de cadrage. Ensuite, nous concevons l’architecture et les interfaces, puis passons au développement avec des points de suivi réguliers. Vous êtes impliqué à chaque étape, avec une communication transparente et structurée.",
  },
  {
    question: "Quels sont vos tarifs ?",
    answer:
      "Nos tarifs sont adaptés à la nature et à l’envergure du projet. Nous proposons des devis clairs, sans coûts cachés, basés sur vos besoins réels. L’objectif est de trouver le meilleur équilibre entre performance, qualité et budget.",
  },
  {
    question: "Travaillez-vous uniquement à distance ?",
    answer:
      "Nous travaillons principalement à distance, ce qui nous permet d’être flexibles et réactifs. Selon votre localisation et vos besoins, des réunions physiques peuvent également être envisagées. L’essentiel reste une collaboration fluide et efficace.",
  },
  {
    question: "Quelles technologies utilisez-vous ?",
    answer:
      "Nous utilisons des technologies modernes et éprouvées comme React, Next.js, Node.js, Django, React Native, Supabase, Firebase et d’autres selon le projet. Les choix techniques sont toujours guidés par la performance, la sécurité et l’évolutivité.",
  },
  {
    question: "Le projet est-il évolutif après livraison ?",
    answer:
      "Oui. Nous concevons nos solutions pour qu’elles puissent évoluer facilement. Vous pourrez ajouter de nouvelles fonctionnalités, intégrer d’autres services ou faire évoluer votre produit sans repartir de zéro.",
  },
  {
    question: "Proposez-vous un support après la livraison ?",
    answer:
      "Nous proposons un accompagnement post-livraison incluant maintenance, mises à jour et support technique. Vous pouvez choisir une assistance ponctuelle ou un suivi régulier selon vos besoins.",
  },
  {
    question: "Serai-je propriétaire du code et du projet ?",
    answer:
      "Oui, à la fin du projet vous êtes pleinement propriétaire du code, des livrables et des accès. La transparence et l’indépendance du client font partie de nos engagements.",
  },
];


export function FAQ() {
  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
            <motion.h2
        className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 dark:text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        {'Questions Fréquentes'.split(" ").map((word, i) =>
          i === 1 ? (
            <span key={i} className="main-color"> {word} </span>
          ) : (
            word + " "
          )
        )}
      </motion.h2>
         <motion.p
        className="text-base max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.4, duration: 0.7 }}
      >
                    Trouvez rapidement les réponses à vos questions. Besoin de plus
            d'informations ? N'hésitez pas à nous contacter.
      </motion.p>
        
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left main-color text-lg font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 dark:text-white text-md ">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}