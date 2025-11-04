import React from "react";
import { motion } from "framer-motion";

const companies = [
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Amazon Web Services", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
  { name: "GitHub", logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" },
  { name: "Slack", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" },
  { name: "Figma", logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
  { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
  { name: "LinkedIn", logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" },
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
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12 max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15 },
          },
        }}
        viewport={{ once: true }}
      >
        {companies.map((company, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center h-28 w-40 md:w-48 border border-slate-200 dark:border-gray-300 rounded-xl bg-white dark:bg-slate-800 shadow-md hover:shadow-xl transition-all cursor-pointer"
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
          >
            <img
              src={company.logo}
              alt={company.name}
              className="w-20 h-10 object-contain"
              loading="lazy"
            />
            <p className="text-main-color  text-md font-medium mt-3">{company.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default TrustedCompanies;
