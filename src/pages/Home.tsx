import React from "react";
import HeroSection from "../components/HeroSection";
import DarkVeil from "./DarkVeil";
const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}

      <HeroSection />


      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <DarkVeil />
      </div>

    </>
  )
}

export default Home;