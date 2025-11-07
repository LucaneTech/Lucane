import React from "react";
import Hero from "../components/technologies/Hero";
import OurTechnologies from "../components/technologies/OurTechnologies";
import Button from "../ui/Button";

const Technologies: React.FC = () => {
  return(
       <>

       <Hero/>

       <OurTechnologies/>

       {/***Call to Action Section */}
      <section className="flex flex-col items-center justify-center mx-auto w-full text-center rounded-xl py-20 md:py-24 bg-[#008080] dark:bg-gray-900/70 md:mt-20 px-4 md:px-0">
        <h1 className="text-2xl md:text-3xl font-medium text-white max-w-3xl">Prêt à construire quelque chose d’extraordinaire ?</h1>
        <div className="h-[3px] w-32 my-1 bg-gradient-to-l from-transparent to-white mb-4"></div>
        <p className="text-sm md:text-base text-white max-w-xl">
         We are a software development agency passionate about crafting innovative digital solutions that drive growth and transform businesses.
        </p>
         <Button label="Commençons aujourd'hui!" changeColor="white"  className="mt-8 md:mt-10"/>
      </section>
        
       </>
  )
}

export default  Technologies;