import React from "react";
import HeroSectionHome from "../components/home/Hero";
import ServicesSection from "../components/home/ServicesSection";
import FeaturedProjects from "../components/home/FeaturedProjects";
import TrustedCompanies from "../components/home/TrustedCompanies";
import Button from "../ui/Button";
import MemoryGrid from "../components/home/MemoryGrid";
import Promotional from "../components/home/Promotional";
import Ourdesign from "../components/home/Ourdesign";
const Home: React.FC = () => {
  return (
    <div className="mt-32 md:mt-48">
      {/* Hero Section */}
      <HeroSectionHome />

      {/**services section */}
      <ServicesSection />


      {/**featured projects section */}
      <FeaturedProjects />
       
       <Ourdesign/>
       
      <MemoryGrid />

      <div className="flex justify-center w-full">
        <Promotional />
      </div>

      {/**Trusted:collaborators section */}
      <TrustedCompanies />


      {/***Call to Action Section */}
      <section className="flex flex-col items-center justify-center mx-auto w-full text-center rounded-xl md:py-10  md:mt-20 px-4 md:px-0 mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6  dark:text-[#008080] dark:main-color max-w-3xl">Prêt à construire quelque chose d’extraordinaire ?</h1>
        <div className="h-[3px] w-32 my-1 bg-[#008080] mb-4"></div>
        <p className="text-sm md:text-base text-white  max-w-xl">
          We are a software development agency passionate about crafting innovative digital solutions that drive growth and transform businesses.
        </p>
        <Button label="Commençons aujourd'hui" changeColor="white" className="mt-8 md:mt-10" to="/contact" />
      </section>
    </div>
  )
}

export default Home;