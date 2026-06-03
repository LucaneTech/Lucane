import React from "react";

const companies = [
  { name: "Oralise", logo: "collaborators/oralise.png" },
  { name: "eemci", logo: "collaborators/eemci.png" },
  { name: "Kfk agrobusiness", logo: "collaborators/kfk.png" },
  { name: "active rise", logo: "collaborators/active_rise.png" },
   { name: "Kfk agrobusiness", logo: "collaborators/kfk.png" },
  { name: "eemsi", logo: "collaborators/eemsi.png" },
];

// Duplicate for seamless loop
const row1 = [...companies, ...companies];
const row2 = [...companies, ...companies].reverse();

const TrustedCompanies: React.FC = () => {
  return (
    <section className="py-12 bg-primary/80 backdrop-blur-2xl dark:bg-dark border-y border-slate-200/60 dark:border-slate-700/50">
      {/* <p className="text-md md:text-lg uppercase tracking-[0.2em] text-ink-muted dark:text-slate-200 font-medium text-center mb-8">
        Ils nous font confiance
      </p> */}

      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-primary/30 dark:from-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-primary/30 dark:from-dark to-transparent z-10 pointer-events-none" />

        {/* Row 1 — scroll left */}
        <div className="flex mb-4" style={{ overflow: "hidden" }}>
          <div className="flex gap-12 items-center animate-marquee-left whitespace-nowrap">
            {row1.map((company, index) => (
              <img
                key={index}
                src={company.logo}
                alt={company.name}
                loading="lazy"
                className="h-12 w-auto object-contain  opacity-100 whitespace-break-spaces hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex-shrink-0"
              />
            ))}
          </div>
        </div>

        {/* Row 2 — scroll right */}
        <div className="flex" style={{ overflow: "hidden" }}>
          <div className="flex gap-12 items-center animate-marquee-right whitespace-nowrap">
            {row2.map((company, index) => (
              <img
                key={index}
                src={company.logo}
                alt={company.name}
                loading="lazy"
                className="h-12 w-auto object-contain  opacity-100 whitespace-break-spaces hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
