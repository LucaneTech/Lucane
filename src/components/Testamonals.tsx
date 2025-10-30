import React from "react";

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
    image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200',
    name: 'Briar Martin',
    program: 'Licence en Informatique',
    testimonial: 'L’école m’a permis de développer des compétences solides et de décrocher mon premier stage en entreprise dès la 2ème année.',
    date: 'Avril 2025'
  },
  {
    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200',
    name: 'Avery Johnson',
    program: 'Master Marketing Digital',
    testimonial: 'Les professeurs sont toujours disponibles et le réseau d’anciens m’a énormément aidé pour trouver une alternance.',
    date: 'Mai 2025'
  },
  {
    image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60',
    name: 'Jordan Lee',
    program: 'Bachelor Design Graphique',
    testimonial: 'L’environnement est super stimulant, on travaille sur des projets concrets qui nous préparent directement au monde professionnel.',
    date: 'Juin 2025'
  },
  {
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60',
    name: 'Sofia Mendes',
    program: 'Licence Sciences de Gestion',
    testimonial: 'Grâce à l’accompagnement personnalisé, j’ai gagné en confiance et j’ai pu présenter mon projet entrepreneurial devant un jury d’experts.',
    date: 'Mai 2025'
  },
];


  // Props typées
  const CreateCard: React.FC<{ card: CardData }> = ({ card }) => (
    <div className="p-4 rounded-lg mx-4 shadow hover:shadow-lg transition-all duration-200 w-72 shrink-0">
      <div className="flex gap-2">
        <img className="size-11 rounded-full" src={card.image} alt={card.name} />
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <p>{card.name}</p>
            {/* ton svg check bleu */}
          </div>
          <span className="text-xs text-slate-500">{card.program}</span>
        </div>
      </div>
      <p className="text-sm py-4 text-gray-800">
        {card.testimonial}
      </p>
      <div className="flex items-center justify-between text-slate-500 text-xs">
        <div className="flex items-center gap-1">
          <span>Publié le </span>
         
        </div>
        <p>{card.date}</p>
      </div>
    </div>
  );

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
      <div className="text-center max-w-[800px] mx-auto mb-8 px-4 mt-16">
        <h1 className="main-color font-semibold text-center text-2xl md:text-4xl mb-4 ">Temoignages de nos clients</h1>
        <p>Don't just take our words. Découvrez ce que nos utilisateurs disent de nous. Nous cherchons constamment à nous améliorer. Si votre expérience est positive, n'hésitez pas à laisser un avis.</p>
      </div>

      {/* Ligne 1 */}
      <div className="marquee-row w-full mx-auto max-w-5xl overflow-hidden relative">
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent "></div>
        <div className="marquee-inner flex transform-gpu min-w-[200%] pt-10 pb-5 ">
          {[...cardsData, ...cardsData].map((card, index) => (
            <CreateCard key={index} card={card} />
          ))}
        </div>
        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
      </div>

      {/* Ligne 2 */}
      <div className="marquee-row w-full mx-auto max-w-5xl overflow-hidden relative">
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>
        <div className="marquee-inner marquee-reverse flex transform-gpu min-w-[200%] pt-10 pb-5">
          {[...cardsData, ...cardsData].map((card, index) => (
            <CreateCard key={index} card={card} />
          ))}
        </div>
        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
      </div>
    </>
  );
};

export default Testamonals;