/** Équipe Lucane Tech. Les membres "À FOURNIR" ne sont pas affichés. */
export interface Member {
  name: string;
  role: string;
  photo: string;
  bio: string;
  linkedin?: string;
}

export const team: Member[] = [
  {
    name: "Francisco Mouanda",
    role: "Fondateur & CEO",
    photo: "/images/team/ceo.jpeg", // À VALIDER : photo de profil réelle
    bio: "Fondateur et visionnaire de Lucane. Je guide chaque projet avec passion, innovation et expertise technique.",
    linkedin: "https://www.linkedin.com/in/franciscomouanda579",
  },
  // À FOURNIR : 2 à 3 développeurs de l'équipe (nom, rôle, photo, bio, LinkedIn)
];

export const visibleTeam = () => team.filter((m) => m.name !== "À FOURNIR");
