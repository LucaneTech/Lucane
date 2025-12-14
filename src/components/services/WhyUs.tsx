import { motion } from "framer-motion";
import React from "react";

const items = [
  {
    title: "Ingénierie de Prompt",
    description:
      "Nous concevons des prompts précis et performants pour aligner l’intention humaine avec les capacités des modèles IA.",
    imageUrl:
      "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=900&auto=format&fit=crop",
    // femme black travaillant sur IA / ordinateur
  },
  {
    title: "Data Science",
    description:
      "Analyse, structuration et valorisation des données pour produire des décisions mesurables et exploitables.",
    imageUrl:
      "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=900&auto=format&fit=crop",
    // homme black analysant données / dashboard
  },
  {
    title: "Développement Logiciel",
    description:
      "Architecture logicielle robuste, évolutive et pensée pour la performance à long terme.",
    imageUrl:
      "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?q=80&w=900&auto=format&fit=crop",
    // développeur black en environnement pro
  },
  {
    title: "Solutions IA",
    description:
      "Conception et intégration de systèmes intelligents adaptés à vos enjeux métiers.",
    imageUrl:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=900&auto=format&fit=crop",
    // profil black + visuels IA / tech avancée
  },
];


const WhyUs: React.FC = () => {
  return (
    <section className="py-20 px-4 ">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16 "
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 dark:text-white">
            Pourquoi nous choisir
          </h2>
          <p className="mt-5 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Une équipe experte, des choix techniques réfléchis et une exigence
            constante de qualité pour construire des produits durables.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {items.map((item, index) => (
            <motion.article
              key={index}
              className="group relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-600 bg-white dark:bg-gray-900/70"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
