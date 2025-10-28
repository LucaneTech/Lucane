import React from "react";
import HeroSection from "../components/services/HeroSection";
import FeaturesSection from "../components/services/Features";
import AutoScrollElement from "../components/services/AutoScrollElement";
import Expertise from "../components/services/Expertise";

const Services: React.FC = () => {
  return(
       <>
        {/**services hero section */}
        <HeroSection />
        
         {/**AutoscrollElement section */}
        <AutoScrollElement />

        {/**features section */}
        <FeaturesSection/>

        {/**expertise section */}
        <Expertise/>

       
       </>
  )
}

export default Services;