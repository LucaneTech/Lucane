import { useState } from "react";
import { Menu, X, Video } from "lucide-react";

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="font-[Poppins] relative">
      {/* Navbar */}
      <nav className="z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-32 backdrop-blur text-slate-800 text-sm">
        <a href="https://prebuiltui.com" className="flex items-center">
          <svg
            width="157"
            height="40"
            viewBox="0 0 157 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
          
          </svg>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 transition duration-500">
          <a href="/" className="hover:text-slate-500 transition">
            Home
          </a>
          <a href="/products" className="hover:text-slate-500 transition">
            Products
          </a>
          <a href="/stories" className="hover:text-slate-500 transition">
            Stories
          </a>
          <a href="/pricing" className="hover:text-slate-500 transition">
            Pricing
          </a>
        </div>

        {/* CTA Button */}
        <button className="hidden md:block px-6 py-2.5 text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 transition-all rounded-full">
          Request free trial
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden active:scale-90 transition"
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu size={26} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[100] bg-white/70 text-slate-900 backdrop-blur-lg flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-500 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <a href="/" onClick={() => setIsMenuOpen(false)}>
          Home
        </a>
        <a href="/products" onClick={() => setIsMenuOpen(false)}>
          Products
        </a>
        <a href="/stories" onClick={() => setIsMenuOpen(false)}>
          Stories
        </a>
        <a href="/pricing" onClick={() => setIsMenuOpen(false)}>
          Pricing
        </a>
        <button
          onClick={() => setIsMenuOpen(false)}
          className="active:ring-3 active:ring-white aspect-square size-10 p-1 items-center justify-center bg-slate-100 hover:bg-slate-200 transition text-black rounded-md flex"
        >
          <X size={24} />
        </button>
      </div>

      {/* Hero Main */}
      <main className="flex flex-col max-md:gap-20 md:flex-row pb-20 items-center justify-between mt-20 px-4 md:px-16 lg:px-24 xl:px-32">
        {/* Text Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl leading-[46px] md:text-5xl md:leading-[68px] font-semibold max-w-xl text-slate-900">
            AI-powered <br /> influencer marketing made simple.
          </h1>
          <p className="text-sm text-slate-700 max-w-lg mt-2">
            Unlock smarter workflows with AI tools designed to boost productivity,
            simplify tasks and help you do more with less effort.
          </p>
          <div className="flex items-center gap-4 mt-8 text-sm">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white active:scale-95 transition rounded-md px-7 h-11">
              Get started
            </button>
            <button className="flex items-center gap-2 border border-slate-600 active:scale-95 hover:bg-white/10 transition text-slate-600 rounded-md px-6 h-11">
              <Video size={20} />
              <span>Watch demo</span>
            </button>
          </div>
        </div>

        {/* Image Section */}
        <img
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/hero-section-showcase-5.png"
          alt="hero"
          className="max-w-sm sm:max-w-md lg:max-w-lg 2xl:max-w-xl transition-all duration-300"
        />
      </main>
    </section>
  );
};

export default HeroSection;
