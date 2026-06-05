import React from "react";
import HeroSection from "../components/services/HeroSection";
import AutoScrollElement from "../components/services/AutoScrollElement";
import FeaturesSection from "../components/services/Process";
import Expertise from "../components/services/Expertise";
import Methodology from "../components/services/Methodology";
import ExpertiseDeepDive from "../components/services/ExpertiseDeepDive";
import FAQ from "../components/services/FAQ";
import WhyUs from "../components/services/WhyUs";
import CallAction from "../components/CallAction";

const Services: React.FC = () => {
  return (
    <div className="pt-24">
      <HeroSection />
      <AutoScrollElement />
      <FeaturesSection />
      <Expertise />
      <Methodology />
      <ExpertiseDeepDive />
      <WhyUs />
      <FAQ />
      <CallAction
        title="Lancez votre projet dès aujourd'hui"
        label="Démarrons ensemble"
        description="Notre équipe transforme vos idées en solutions digitales performantes, fiables et sur mesure."
        to="/contact"
      />
    </div>
  );
};

export default Services;
