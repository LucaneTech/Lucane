import React from "react";
import HeroProject from "../components/projects/HeroProject";
import Testamonals from "../components/projects/Testamonals";
import CallAction from "../components/CallAction";
import AllProjects from "../components/projects/AllProjects";



const Projects: React.FC = () => {
  return(
       <div>
        {/**Hero section */}
        <HeroProject />

        {/** Project Section */}
        <AllProjects/>

        {/** Testimonials Section */}
        <Testamonals />

        {/** CallAction section */}
        <CallAction title={"Prêt à construire quelque chose d’extraordinaire ?"} description={"We are a software development agency passionate about crafting innovative digital solutions that drive growth and transform businesses."} label={"Commençons aujourd'hui!"} to={"/contact"}/>
       </div>
  ) 
}

export default Projects;