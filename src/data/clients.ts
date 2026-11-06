/** Logos clients (dossier public/collaborators). `confirmed: false` = non affiché. */
export interface Client {
  name: string;
  logo: string;
  confirmed: boolean;
}

export const clients: Client[] = [
  { name: "Oralise", logo: "/collaborators/oralise.png", confirmed: true },
  { name: "EEMCI", logo: "/collaborators/eemci.png", confirmed: true },
  { name: "KFK Agrobusiness", logo: "/collaborators/kfk.png", confirmed: true },
  { name: "Active Rise", logo: "/collaborators/active_rise.png", confirmed: true },
  { name: "EEMSI", logo: "/collaborators/eemsi.png", confirmed: true },
  { name: "Kone Shop", logo: "/collaborators/kone.png", confirmed: false }, // À CONFIRMER
  { name: "Next", logo: "/collaborators/next.png", confirmed: false }, // À CONFIRMER
  { name: "Dynamic", logo: "/collaborators/dynamic.png", confirmed: false }, // À CONFIRMER
];

export const confirmedClients = () => clients.filter((c) => c.confirmed);
