import { Video } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      className="relative mt-15 overflow-hidden bg-gradient-to-br from-indigo-200 via-white to-purple-300"
    >
      {/* Gradient décoratif flou derrière */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-indigo-300/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-400/20 rounded-full blur-3xl" />
      </div>

      <main className="flex flex-col max-md:gap-20 md:flex-row pb-20 items-center justify-between mt-20 px-4 md:px-16 lg:px-24 xl:px-32">
        {/* Texte principal */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl leading-[46px] md:text-5xl md:leading-[68px] font-semibold max-w-xl text-slate-900">
            Des solutions numériques <br />
            conçues pour faire grandir{" "}
            <span className="text-indigo-600">votre business</span>.
          </h1>

          <p className="text-sm text-slate-700 max-w-lg mt-3">
            Chez <span className="font-medium text-indigo-600">Lucane</span>, nous
            concevons des applications, sites web et logiciels innovants qui
            allient performance, design et fiabilité. Notre mission : transformer
            vos idées en expériences digitales puissantes et durables.
          </p>

          <div className="flex items-center gap-4 mt-8 text-sm">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white active:scale-95 transition rounded-md px-7 h-11 shadow-md shadow-indigo-500/20">
              Démarrer un projet
            </button>

            <button className="flex items-center gap-2 border border-slate-600 active:scale-95 hover:bg-white/50 backdrop-blur-md transition text-slate-600 rounded-md px-6 h-11">
              <Video size={20} />
              <span>Voir nos réalisations</span>
            </button>
          </div>
        </div>

        {/* Illustration */}
        <img
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/hero-section-showcase-5.png"
          alt="Solutions numériques Lucane"
          className="max-w-sm sm:max-w-md lg:max-w-lg 2xl:max-w-xl transition-all duration-300 drop-shadow-xl"
        />
      </main>
    </section>
  );
};

export default HeroSection;
