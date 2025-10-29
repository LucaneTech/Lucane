import React from "react";
import HeroSection from "../components/services/HeroSection";
import FeaturesSection from "../components/services/Process";
import AutoScrollElement from "../components/services/AutoScrollElement";
import Expertise from "../components/services/Expertise";
import WhyUs from "../components/services/WhyUs";
import CallAction from "../components/CallAction";

const Services: React.FC = () => {
  return(
        <div className="mt-32 md:mt-48">
        {/**services hero section */}
        <HeroSection />
        
         {/**AutoscrollElement section */}
        <AutoScrollElement />

        {/**features section */}
        <FeaturesSection/>

        {/**expertise section */}
        <Expertise/>

        {/**Why us? */}
        <WhyUs/>

        {/**callAction */}
        <CallAction title="Lancez votre projet dès aujourd’hui" label="Lancez-vous!" description={"“Notre équipe transforme vos idées en solutions digitales performantes, fiables et sur mesure.” "} to={"/"} />

       
       </div>
  )
}

export default Services;