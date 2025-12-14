import React from "react";
import { motion } from "framer-motion";

const companies = [
  { name: "Oralise", logo: "collaborators/oralise.png" },
  { name: "eemci", logo: "collaborators/eemci.webp" },
 
  { name: "Dynamic Servces", logo: "collaborators/dynamic.png" },
   { name: "next academy", logo: "collaborators/next.png" },
  { name: "koneshop.online", logo: "collaborators/kone.png" },



];

const title = "Ces boîtes nous font confiance"
const TrustedCompanies: React.FC = () => {
  return (

    <motion.section
      className="text-center py-16 px-4 "
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >

        {title.split(" ").map((word, i) =>
          i === 1 ? (
            <span key={i} className="main-color">
              {" "}
              {word}{" "}
            </span>
          ) : (
            word + " "
          )
        )}



      </motion.h1>
      <motion.p
        className="text-lg md:text-xl text-slate-600 dark:text-white max-w-3xl mx-auto leading-relaxed mb-3"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Nous accompagnons des entreprises ambitieuses dans la création de solutions numériques performantes et sur mesure. Ensemble, nous construisons l’avenir du digital.
      </motion.p>

      <motion.div
        className="mt-14 max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-8  md:gap-x-12  gap-y-0 md:gap-y-4 items-center p-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.1 },
          },
        }}
      >
        {companies.map((company, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-center"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <img
              src={company.logo}
              alt={company.name}
              loading="lazy"
              className="
          max-h-48 w-auto object-cover
          transition-all duration-300 
         
        "
            />
          </motion.div>
        ))}
      </motion.div>

    </motion.section>
  );
};

export default TrustedCompanies;
