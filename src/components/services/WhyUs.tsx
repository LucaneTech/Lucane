import { motion } from "framer-motion";
import React from "react";

const WhyUs: React.FC = () => {
  const items = [
    {
      title: "Ingénieurs de prompt",
      description: "Réduire l’écart entre l’intention humaine et la compréhension machine grâce à un design expert de prompts.",
      imageUrl: "https://images.unsplash.com/photo-1543269865-0a740d43b90c?q=80&w=800&h=400&auto=format&fit=crop",
      imagePosition: "center",
    },
    {
      title: "Data scientists",
      description: "Transformer des données complexes en insights exploitables.",
      imageUrl: "https://images.unsplash.com/photo-1714976326351-0ecf0244f0fc?q=80&w=800&h=400&auto=format&fit=crop",
      imagePosition: "right",
    },
    {
      title: "Ingénieurs logiciels",
      description: "Concevoir des solutions logicielles scalables et robustes.",
      imageUrl: "https://images.unsplash.com/photo-1736220690062-79e12ca75262?q=80&w=800&h=400&auto=format&fit=crop",
      imagePosition: "center",
    },
    {
      title: "Spécialistes IA",
      description: "Optimiser les processus et construire des systèmes intelligents.",
      imageUrl: "https://images.unsplash.com/photo-1714976326351-0ecf0244f0fc?q=80&w=800&h=400&auto=format&fit=crop",
      imagePosition: "right",
    },
  ];
  const title = "Pourquoi nous choisir";

  return (
    <section className="px-4 py-10 mx-auto text-center bg-[#fafafa] dark:bg-gray-900/70">
      {/* Titre */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 dark:text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        {title.split(" ").map((word, i) =>
          i === 1 ? (
            <span key={i} className="main-color"> {word} </span>
          ) : (
            word + " "
          )
        )}
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-base max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.4, duration: 0.7 }}
      >
        Une équipe experte. Des projets livrés à temps. Un code pensé pour durer.
        Nous allions expertise technique et engagement total pour faire grandir vos projets.
      </motion.p>

      {/* Cartes */}
      <div className="mt-10 overflow-x-auto w-full snap-x snap-mandatory flex gap-6 py-4 scrollbar-hide">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="relative flex-shrink-0 w-72 sm:w-80 md:w-96 h-[400px] group transition-all duration-500 snap-center hover:w-[22rem] md:hover:w-[24rem]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img
              className={`h-full w-full object-cover object-${item.imagePosition || "center"} rounded-xl`}
              src={item.imageUrl}
              alt={item.title}
            />
            <motion.div
              className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="text-xl sm:text-3xl font-semibold">{item.title}</h1>
              <p className="text-sm mt-2">{item.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
