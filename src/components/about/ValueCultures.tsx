import React from "react";
import { motion } from "framer-motion";
import { Users, Lightbulb, Globe, Heart } from "lucide-react";

const values = [
  {
    icon: <Lightbulb size={36} className="text-yellow-400" />,
    title: "Innovation",
    description: "Nous cherchons constamment à repousser les limites pour créer des solutions uniques et efficaces.",
  },
  {
    icon: <Users size={36} className="text-indigo-500" />,
    title: "Collaboration",
    description: "Le travail en équipe et l’échange d’idées sont au cœur de nos projets.",
  },
  {
    icon: <Globe size={36} className="text-green-500" />,
    title: "Impact Global",
    description: "Nous développons des produits qui ont un effet concret et positif à l’échelle mondiale.",
  },
  {
    icon: <Heart size={36} className="text-red-500" />,
    title: "Passion & Éthique",
    description: "Chaque ligne de code est guidée par l’excellence et le respect des standards éthiques.",
  },
];

const ValuesCultureSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Nos Valeurs & Notre Culture
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          La manière dont nous travaillons définit qui nous sommes. Voici ce qui nous guide au quotidien.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow cursor-default"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h3>
              <p className="text-gray-600 text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesCultureSection;
