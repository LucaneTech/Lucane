import React from "react";
import { motion } from "framer-motion";

interface CardData {
  program: string;
  testimonial: string;
  image: string;
  name: string;
  date: string;
}

const Testamonals: React.FC = () => {
  const cardsData: CardData[] = [
  {
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    name: 'Camille Dupont',
    program: 'CEO — GreenTech Solutions',
    testimonial:
      "L’équipe a transformé notre idée en une plateforme SaaS complète en moins de 3 mois. Le suivi était hyper pro et la qualité du code irréprochable.",
    date: 'Septembre 2025'
  },
  {
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    name: 'Nicolas Bernard',
    program: 'Directeur Technique — Nova Digital',
    testimonial:
      "Leur approche agile nous a permis de sortir une version bêta ultra stable. Leur équipe frontend est juste incroyable — design moderne et super fluide.",
    date: 'Août 2025'
  },
  {
    image: 'https://randomuser.me/api/portraits/women/21.jpg',
    name: 'Sarah Lefebvre',
    program: 'Fondatrice — MyFit App',
    testimonial:
      "Ils ont compris notre vision dès le premier call. L’application mobile qu’ils ont développée est stable, rapide et nos utilisateurs l’adorent.",
    date: 'Juillet 2025'
  },
  {
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    name: 'Jonathan Mercier',
    program: 'Chef de projet — FinanciaTech',
    testimonial:
      "Un vrai partenaire technique. Toujours disponibles, force de proposition, et surtout, à l’écoute. On a gagné un temps fou grâce à leur expertise backend.",
    date: 'Juin 2025'
  },
  {
    image: 'https://randomuser.me/api/portraits/women/56.jpg',
    name: 'Lina Costa',
    program: 'Responsable Communication — BeSeen Agency',
    testimonial:
      "Leur équipe UI/UX a complètement refondu notre site web. Résultat : +40% de conversions et un design qui fait l’unanimité.",
    date: 'Mai 2025'
  },
  {
    image: 'https://randomuser.me/api/portraits/men/12.jpg',
    name: 'Hugo Delattre',
    program: 'Entrepreneur — Freelance Connect',
    testimonial:
      "Ils m’ont accompagné sur tout le MVP, du prototypage au déploiement. Un mix parfait entre créativité et rigueur technique.",
    date: 'Avril 2025'
  },
  {
    image: 'https://randomuser.me/api/portraits/women/14.jpg',
    name: 'Aïcha Rahmani',
    program: 'CTO — HealthLink',
    testimonial:
      "On cherchait une équipe capable de livrer vite sans sacrifier la qualité. Pari réussi. Leur code est propre, scalable et super bien documenté.",
    date: 'Mars 2025'
  },
  {
    image: 'https://randomuser.me/api/portraits/men/23.jpg',
    name: 'Lucas Fontaine',
    program: 'Fondateur — DataPulse Analytics',
    testimonial:
      "Collaboration au top ! Ils ont su intégrer des API complexes et optimiser notre tableau de bord. Leur réactivité est impressionnante.",
    date: 'Février 2025'
  }
];


  // Carte animée
  const CreateCard: React.FC<{ card: CardData }> = ({ card }) => (
    <motion.div
      className="p-4 rounded-lg mx-4 shadow hover:shadow-xl transition-all duration-300 w-72 shrink-0 dark:bg-gray-900/70 bg-white/80 backdrop-blur-sm border border-gray-100 dark:border-gray-800"
      whileHover={{ scale: 1.05, y: -5 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="flex gap-2">
        <img className="size-11 rounded-full" src={card.image} alt={card.name} />
        <div className="flex flex-col">
          <div className="flex items-center gap-1 font-semibold text-slate-800 dark:text-white">
            <p>{card.name}</p>
            {/* Check bleu stylé */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#3b82f6" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <span className="text-xs text-slate-500">{card.program}</span>
        </div>
      </div>
      <p className="text-sm py-4 text-gray-800 dark:text-gray-100 italic">
        “{card.testimonial}”
      </p>
      <div className="flex items-center justify-between text-slate-500 text-xs">
        <span>Publié le</span>
        <p>{card.date}</p>
      </div>
    </motion.div>
  );

  const title = "Témoignages de nos clients";

  return (
    <>
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .marquee-inner {
          animation: marqueeScroll 25s linear infinite;
        }
        .marquee-reverse {
          animation-direction: reverse;
        }
      `}</style>

      <motion.div
        className="text-center max-w-[800px] mx-auto mb-8 px-4 mt-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-slate-800 dark:text-white mb-6"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {title.split(" ").map((word, i) =>
            i === 1 ? (
              <span key={i} className="main-color">
                {" "}{word}{" "}
              </span>
            ) : (
              word + " "
            )
          )}
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Don’t just take our words. Découvrez ce que nos utilisateurs disent de nous.  
          Nous cherchons constamment à nous améliorer.  
          Si votre expérience est positive, laissez un avis et faites partie de l’aventure.
        </motion.p>
      </motion.div>

      {/* Ligne 1 */}
      <div className="marquee-row w-full mx-auto max-w-6xl overflow-hidden relative">
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white dark:from-transparent to-transparent"></div>
        <div className="marquee-inner flex transform-gpu min-w-[200%] pt-10 pb-5">
          {[...cardsData, ...cardsData].map((card, index) => (
            <CreateCard key={index} card={card} />
          ))}
        </div>
        <div className="absolute right-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-l from-white dark:from-transparent to-transparent"></div>
      </div>

      {/* Ligne 2 */}
      <div className="marquee-row w-full mx-auto max-w-6xl overflow-hidden relative">
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white dark:from-transparent to-transparent"></div>
        <div className="marquee-inner marquee-reverse flex transform-gpu min-w-[200%] pt-10 pb-5">
          {[...cardsData, ...cardsData].map((card, index) => (
            <CreateCard key={index} card={card} />
          ))}
        </div>
        <div className="absolute right-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-l from-white dark:from-transparent to-transparent"></div>
      </div>
    </>
  );
};

export default Testamonals;
