import React from "react";
import HeroSectionHome from "../components/home/Hero";
import ServicesSection from "../components/ServicesSection";
import FeaturedProjects from "../components/home/FeaturedProjects";

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSectionHome />

      {/**services section */}
      <ServicesSection/>
       
      
      {/**featured projects section */}
     <FeaturedProjects/>
    </>
  )
}

export default Home;