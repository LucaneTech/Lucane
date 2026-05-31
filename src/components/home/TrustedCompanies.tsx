import React from "react";
import { motion } from "framer-motion";

const companies = [
  { name: "Oralise", logo: "collaborators/oralise.png" },
  { name: "eemci", logo: "collaborators/eemci.webp" },
  { name: "Dynamic Services", logo: "collaborators/dynamic.png" },
  { name: "Next Academy", logo: "collaborators/next.png" },
  { name: "koneshop.online", logo: "collaborators/kone.png" },
];

const TrustedCompanies: React.FC = () => {
  return (
    <motion.section
      className="py-12 px-4 border-y border-slate-100 dark:border-slate-800"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-8">
        Ils nous font confiance
      </p>

      <motion.div
        className="max-w-4xl mx-auto flex flex-wrap justify-center items-center gap-8 md:gap-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
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
              className="max-h-12 w-auto object-contain grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default TrustedCompanies;
