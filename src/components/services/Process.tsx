import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface Feature {
  title: string;
  description: string[];
  number: string;
  bgColor: string;
  textColor: string;
  iconColor: string;
}

const features: Feature[] = [
  {
    title: "Découverte & Analyse",
    description: [
      "Compréhension de vos besoins et objectifs.",
      "Analyse de votre marché et de vos utilisateurs.",
    ],
    number: "1",
    bgColor: "bg-violet-100",
    textColor: "text-violet-600",
    iconColor: "text-violet-600",
  },
  {
    title: "Conception & Prototypage",
    description: [
      "Création de maquettes et prototypes interactifs.",
      "Validation avec vous avant le développement.",
    ],
    number: "2",
    bgColor: "bg-green-100",
    textColor: "text-green-600",
    iconColor: "text-green-600",
  },
  {
    title: "Développement & Intégration",
    description: [
      "Développement logiciel sur mesure.",
      "Intégration avec vos systèmes existants.",
    ],
    number: "3",
    bgColor: "bg-orange-100",
    textColor: "text-orange-600",
    iconColor: "text-orange-600",
  },
  {
    title: "Tests & Livraison",
    description: [
      "Tests fonctionnels et de performance.",
      "Livraison et support continu pour assurer le succès.",
    ],
    number: "4",
    bgColor: "bg-blue-100",
    textColor: "text-blue-600",
    iconColor: "text-blue-600",
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 lg:gap-24 px-6 md:px-12 lg:px-24 py-12">
      {/* Image */}
      <motion.div
        className="flex justify-center w-full md:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          className="w-full max-w-lg rounded-2xl object-cover shadow-2xl shadow-indigo-600/70 cursor-pointer hover:scale-105 transition-transform duration-300 outline-1 outline-offset-15 outline-gray-300 dark:outline-gray-600 backdrop-blur-2xl"
          src="images/services/app.jpeg"
          alt="Process Illustration"
        />

      </motion.div>

      {/* Feature list */}
      <div className="w-full md:w-1/2 space-y-10">
        {features.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-start sm:items-center gap-6 max-w-md mx-auto sm:mx-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div
              className={`flex items-center justify-center p-4 sm:p-6 ${item.bgColor} ${item.textColor} rounded-full text-xl font-bold`}
            >
              {item.number}
            </div>
            <div className="space-y-2 text-left">
              <h3 className={`text-lg sm:text-xl md:text-2xl font-semibold ${item.iconColor}`}>
                {item.title}
              </h3>
              <div className="space-y-1">
                {item.description.map((desc, i) => (
                  <motion.p
                    key={i}
                    className="flex items-center gap-2 text-gray-900/70 dark:text-white"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <Check className="main-color" />
                    {desc}
                  </motion.p>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
