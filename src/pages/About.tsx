import AboutHero from "../components/about/Hero";
import Mission from "../components/about/Mission";
import StatsSection from "../components/about/State";
import MeetOurPeople, { type TeamMember } from "../components/about/Team";
import ValuesCultureSection from "../components/about/ValueCultures";
import CallAction from "../components/CallAction";

const teamMembers: TeamMember[] = [
  {
    name: "Francisco Mouanda",
    role: "CEO & Fondateur",
    image: "images/team/ceo.jpeg",
    description: "Passionné par la tech, l'innovation et la création d'équipes performantes.",
    socials: [
      { type: "linkedin", url: "#" },
      { type: "twitter", url: "#" }
    ]
  },
  {
    name: "Amina Diop",
    role: "Lead Développeuse",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=50",
    description: "Experte en développement web et mobile, passionnée par les nouvelles technologies.",
    socials: [
      { type: "linkedin", url: "#" },
     
    ]
  },
  {
    name: "Lucas Ferreira",
    role: "Designer UX/UI",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=50",
    description: "Créatif et orienté utilisateur, il transforme les idées en interfaces intuitives.",
    socials: [
      { type: "linkedin", url: "#" },
    ]
  },
  {
    name: "Dieff Sanchiez",
    role: "Product Manager",
    image: "images/team/product_manager.jpeg",
    description: "Coordonne les projets et veille à ce que chaque produit réponde aux besoins réels des utilisateurs.",
    socials: [
      { type: "linkedin", url: "#" }
    ]
  },
  {
    name: "Omar Diallo",
    role: "DevOps / Cloud Engineer",
    image: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=50",
    description: "Assure la scalabilité et la performance des infrastructures cloud.",
    socials: [
      { type: "linkedin", url: "#" },
     
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