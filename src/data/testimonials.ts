/**
 * Témoignages clients. Publiés UNIQUEMENT avec l'accord écrit du client (`consent: true`).
 * Les trois témoignages actuels attendent cet accord.
 */
export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  logo?: string;
  consent: boolean;
}

export const testimonials: Testimonial[] = [
  {
    name: "Jean-Pierre Kone",
    role: "CEO",
    company: "KonShop",
    quote: "Lucane Tech a transformé notre gestion commerciale. Livraison rapide, équipe professionnelle.",
    logo: "/collaborators/kone.png",
    consent: false, // À FOURNIR : accord écrit
  },
  {
    name: "Berci K.",
    role: "CEO",
    company: "Oralise",
    quote: "Excellent travail sur notre plateforme. Le design est moderne et l'UX est parfaite.",
    logo: "/collaborators/oralise.png",
    consent: false, // À FOURNIR : accord écrit
  },
  {
    name: "François",
    role: "DRH",
    company: "EEMCI",
    quote: "Application mobile de qualité professionnelle. Notre équipe est ravie.",
    logo: "/collaborators/eemci.png",
    consent: false, // À FOURNIR : accord écrit
  },
];

export const publishedTestimonials = () => testimonials.filter((t) => t.consent);
