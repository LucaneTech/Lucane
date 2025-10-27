import React from "react";

import Button from "../../ui/Button";

const avatars = [
  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50",
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50&h=50&auto=format&fit=crop",
];

const HeroSection: React.FC = () => {
  const strokePrimary = "#0080802a";

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between mt-8 md:mt-20 px-4 md:px-8 lg:px-24 xl:px-32 pb-20">
      {/* Background SVG */}
      <svg
        className="absolute -z-10 inset-0 w-full h-full"
        width="1440"
        height="720"
        viewBox="0 0 1440 720"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="711.819" cy="372.562" r="308.334" stroke={strokePrimary} strokeOpacity={1} strokeWidth={2} />
        <circle cx="16.942" cy="20.834" r="308.334" stroke={strokePrimary} strokeOpacity={1} strokeWidth={2} />
        <circle cx="782.595" cy="411.166" r="308.334" stroke={strokePrimary} strokeOpacity={1} strokeWidth={2} />
         <circle cx="1200.595" cy="611.166" r="308.334" stroke={strokePrimary} strokeOpacity={1} strokeWidth={2} />
      </svg>

      {/* Left content */}
      <div className="flex flex-col items-center md:items-start">
        {/* Community avatars */}
        <div className="flex items-center flex-wrap justify-center p-1.5 rounded-full border border-slate-400 text-gray-500 text-xs mb-4 gap-1">
          <div className="flex -space-x-2">
            {avatars.map((src, i) => (
              <img
                key={i}
                className="w-7 h-7 rounded-full border-3 border-white"
                src={src}
                alt={`user${i + 1}`}
              />
            ))}
          </div>
          <p className="ml-2">Join community of 1m+ founders</p>
        </div>

        <h1 className="text-center md:text-left text-3xl md:text-6xl font-medium md:leading-[68px] max-w-xl text-slate-900">
          Accélérez vos projets numériques avec <span className="main-color">"Lucane"</span>...
        </h1>

        <p className="text-center md:text-left text-sm text-slate-700 max-w-lg mt-2">
          Nous sommes une agence de développement de logiciels passionnée par la création de solutions numériques
          innovantes qui stimulent la croissance et transforment les entreprises.
        </p>

        <div className="flex items-center gap-4 mt-8 text-sm">
          <Button label="Lancez-vous!" changeColor ='primary' to="#" />
          <Button label="Contactez-nous" changeColor='secondary' to="#" />
        </div>

        {/* Card */}
        <div className="hidden lg:flex flex-row rounded-lg bg-white shadow-lg duration-300 hover:shadow-2xl mt-8 md:max-w-xl">
          <img
            className="h-24 w-full object-cover rounded-t-lg md:h-40 md:w-48 md:rounded-l-lg"
            src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
            alt="card"
          />
          <div className="flex flex-col justify-start p-2">
            <h5 className="mb-2 text-xl font-medium main-color">Card title</h5>
            <p className="mb-4 text-base main-color">
              This is a wider card with supporting text below as a natural lead-in to additional content. This content
              is a little bit longer.
            </p>
            <p className="text-xs text-surface/75 dark:text-neutral-300">Last updated 3 mins ago</p>
          </div>
        </div>
      </div>

      {/* Right image */}
      <img
        src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/hero-section-showcase-4.png"
        alt="hero"
        className="transition-all duration-300 mt-10 md:mt-0"
      />
    </section>
  );
};

export default HeroSection;
