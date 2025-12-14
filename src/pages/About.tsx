import { FAQ } from "../components/about/FAQ";
import AboutHero from "../components/about/Hero";
import Mission from "../components/about/Mission";
import StatsSection from "../components/about/State";
import MeetOurFounder from "../components/about/Team";
import ValuesCultureSection from "../components/about/ValueCultures";
import CallAction from "../components/CallAction";

const founder = {
  name: "Francisco Mouanda",
  role: "Fondateur & CEO",
  image: "images/team/profil.jpeg",
  description:
    "Fondateur et visionnaire de Lucane. Je guide chaque projet avec passion, innovation et expertise technique.",
  socials: [
    { type: "linkedin", url: "https://linkedin.com/in/tonprofil" },
  ],
};








const About: React.FC = () => {
  return (
    <>
      <AboutHero />

      {/**Our vision and mission section*/}

   
      <Mission/>

      <MeetOurFounder member={founder}/>

      <StatsSection/>

      <ValuesCultureSection/>
       <FAQ/>
      <CallAction title={"Prêt à construire quelque chose de génial ?"} description={"Que vous ayez une idée révolutionnaire ou que vous souhaitiez rejoindre notre équipe innovante, nous aimerions avoir de vos nouvelles."} label={"Contactez-nous"} to={"#"}/>
    

    </>
  )
}

export default About;