import AboutHero from "../components/about/Hero";
import Mission from "../components/about/Mission";
import StatsSection from "../components/about/State";
import MeetOurPeople, { type TeamMember } from "../components/about/Team";
import ValuesCultureSection from "../components/about/ValueCultures";
import CallAction from "../components/CallAction";

const teamMembers: TeamMember[] = [
  {
    name: "Alice Dupont",
    role: "CEO",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50",
    description: "Passionnée par la tech et l’innovation.",
    socials: [
      { type: "linkedin", url: "https://linkedin.com/in/alice" },
      { type: "twitter", url: "https://twitter.com/alice" }
    ]
  },
  {
    name: "Bob Martin",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50",
    description: "Expert en développement web et mobile.",
    socials: [
      { type: "linkedin", url: "https://linkedin.com/in/bob" },
      { type: "facebook", url: "https://facebook.com/bob" }
    ]
  },
  {
    name: "Bob Martin",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50",
    description: "Expert en développement web et mobile.",
    socials: [
      { type: "linkedin", url: "https://linkedin.com/in/bob" },
      { type: "facebook", url: "https://facebook.com/bob" }
    ]
  }
];




const About: React.FC = () => {
  return (
    <>
      <AboutHero />

      {/**Our vision and mission section*/}

   
      <Mission/>

      <MeetOurPeople members={teamMembers}/>

      <StatsSection/>

      <ValuesCultureSection/>

      <CallAction title={"Prêt à construire quelque chose de génial ?"} description={"Que vous ayez une idée révolutionnaire ou que vous souhaitiez rejoindre notre équipe innovante, nous aimerions avoir de vos nouvelles."} label={"Contactez-nous"} to={"#"}/>
    

    </>
  )
}

export default About;