import React from "react";
import { motion } from "framer-motion";
import { Users, Lightbulb, Globe, Heart } from "lucide-react";

const values = [
  {
    icon: <Lightbulb size={48} className="text-yellow-400" />,
    title: "Innovation",
    description: "Nous cherchons constamment à repousser les limites pour créer des solutions uniques et efficaces.",
    image: "/images/about/innovation.png",
  },
  {
    icon: <Users size={48} className="text-indigo-500" />,
    title: "Collaboration",
    description: "Le travail en équipe et l’échange d’idées sont au cœur de nos projets.",
    image: "/images/about/collaboration.png",
  },
  {
    icon: <Globe size={48} className="text-green-500" />,
    title: "Impact Global",
    description: "Nous développons des produits qui ont un effet concret et positif à l’échelle mondiale.",
    image: "/images/about/global.png",
  },
  {
    icon: <Heart size={48} className="text-red-500" />,
    title: "Passion & Éthique",
    description: "Chaque ligne de code est guidée par l’excellence et le respect des standards éthiques.",
    image: "/images/about/ethique.png",
  },
];

const ValuesCultureSection: React.FC = () => {
  const title = 'Nos Valeurs & Notre Culture'

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/70">
      <div className="max-w-6xl mx-auto px-6 text-center">
      

        <motion.div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
            {title.split(" ").map((word, i) =>
              i === 1 ? (
                <span key={i} className="text-[#008080]">
                  {" "}
                  {word}{" "}
                </span>
              ) : (
                word + " "
              )
            )}
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-white max-w-3xl mx-auto leading-relaxed">
            La manière dont nous travaillons définit qui nous sommes. Voici ce qui nous guide au quotidien.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-2xl cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img
                src={value.image}
                alt={value.title}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gray-900/70 flex flex-col justify-center items-center text-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-white text-sm">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesCultureSection;
