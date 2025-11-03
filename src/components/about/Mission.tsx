import React from "react";
import { motion, type Variants, easeOut } from "framer-motion";
import projectImage from "../../../public/images/project.jpg";
import { Rocket, Code2, Globe } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeOut,
      staggerChildren: 0.25,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: easeOut },
  },
  hover: { scale: 1.03, transition: { duration: 0.2 } },
};

const Mission: React.FC = () => {
  return (
    <motion.section
      id="mission"
      className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-32 p-8 md:p-12 bg-base-100"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      {/* Bloc gauche (texte + image) */}
      <motion.div
        className="flex flex-col text-start max-w-2xl w-full space-y-6 md:space-y-8"
        variants={itemVariants}
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold main-color"
        >
          Notre Vision & Notre Mission
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-base text-gray-600 max-w-lg"
        >
          Nous croyons en un monde où la technologie simplifie, accélère et
          amplifie les idées. Notre mission est de transformer les ambitions
          digitales en produits puissants — qu’il s’agisse d’applications web,
          mobiles ou logicielles sur mesure.
        </motion.p>

        <motion.img
          variants={itemVariants}
          src={projectImage}
          alt="Innovation and teamwork illustration"
          className="rounded-2xl shadow-xl object-cover w-full max-w-lg mx-auto md:mx-0 transition-transform duration-500 hover:scale-105"
        />
      </motion.div>

      {/* Bloc droit (les 3 features) */}
      <motion.div
        className="flex flex-col space-y-6 md:space-y-8 px-4 md:px-0"
        variants={containerVariants}
      >
        {/* Feature 1 */}
        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="flex items-start gap-6 max-w-md group cursor-pointer"
        >
          <div className="p-6 flex gap-4 rounded-xl transition-colors border bg-gray-50 border-gray-100 group-hover:border-indigo-300 group-hover:bg-indigo-100">
            <Rocket className="w-6 h-6 stroke-indigo-600" />
            <div className="space-y-2">
              <h3 className="text-base font-semibold text-slate-700">
                Innover sans limites
              </h3>
              <p className="text-sm text-slate-600 max-w-xs">
                Nous concevons des solutions digitales qui anticipent les besoins
                de demain. Chaque projet est une opportunité de repousser les
                frontières du possible.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Feature 2 */}
        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="flex items-start gap-6 max-w-md group cursor-pointer"
        >
          <div className="p-6 flex gap-4 rounded-xl transition-colors border bg-gray-50 border-gray-100 group-hover:border-emerald-300 group-hover:bg-emerald-100">
            <Code2 className="w-6 h-6 stroke-emerald-600" />
            <div className="space-y-2">
              <h3 className="text-base font-semibold text-slate-700">
                Construire avec excellence
              </h3>
              <p className="text-sm text-slate-600 max-w-xs">
                Notre équipe allie expertise technique et créativité pour livrer
                des produits fiables, évolutifs et élégants.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Feature 3 */}
        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="flex items-start gap-6 max-w-md group cursor-pointer"
        >
          <div className="p-6 flex gap-4 rounded-xl transition-colors border bg-gray-50 border-gray-100 group-hover:border-orange-300 group-hover:bg-orange-100">
            <Globe className="w-6 h-6 stroke-orange-600" />
            <div className="space-y-2">
              <h3 className="text-base font-semibold text-slate-700">
                Impacter à l’échelle mondiale
              </h3>
              <p className="text-sm text-slate-600 max-w-xs">
                Nous aidons les entreprises et startups à se démarquer dans un
                monde numérique en constante évolution.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Mission;
