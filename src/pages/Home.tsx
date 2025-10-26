import React from "react";
import HeroSectionHome from "../components/home/Hero";
import ServicesSection from "../components/ServicesSection";

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSectionHome />

      {/**services section */}
      <ServicesSection/>


    </>
  )
}

export default Home;