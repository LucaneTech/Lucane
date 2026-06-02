import React from "react";

const companies = [
  { name: "Oralise", logo: "collaborators/oralise.png" },
  { name: "eemci", logo: "collaborators/eemci.webp" },
  { name: "eemsi", logo: "collaborators/eemsi.png" },
  { name: "Dynamic Services", logo: "collaborators/dynamic.png" },
  { name: "Next Academy", logo: "collaborators/next.png" },
  { name: "Kone Shop", logo: "collaborators/kone.png" },
];

// Duplicate for seamless loop
const row1 = [...companies, ...companies];
const row2 = [...companies, ...companies].reverse();

const TrustedCompanies: React.FC = () => {
  return (
    <section className="py-12 bg-surface-alt border-y border-slate-200/60">
      <p className="text-xs uppercase tracking-[0.2em] text-ink-muted font-medium text-center mb-8">
        Ils nous font confiance
      </p>

      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-surface-alt to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-surface-alt to-transparent z-10 pointer-events-none" />

        {/* Row 1 — scroll left */}
        <div className="flex mb-4" style={{ overflow: "hidden" }}>
          <div className="flex gap-12 items-center animate-marquee-left whitespace-nowrap">
            {row1.map((company, index) => (
              <img
                key={index}
                src={company.logo}
                alt={company.name}
                loading="lazy"
                className="h-10 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex-shrink-0"
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
                className="h-10 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
