/**
 * Mentions légales (phase 6.4). Les champs « À FOURNIR » viennent de src/data/site.ts.
 * Contenu juridique à faire relire par l'équipe avant la mise en production.
 */
import LegalPage from "../ui/LegalPage";
import { site } from "../data/site";

const todo = (v: string) => (v === "À FOURNIR" ? <em className="text-[#ff7a3d]">à compléter</em> : v);

export default function Legal() {
  return (
    <LegalPage
      eyebrow="Mentions légales"
      light="Mentions"
      bold="légales."
      updated="6 novembre 2026"
      blocks={[
        {
          title: "Éditeur du site",
          body: (
            <>
              <p>
                <strong>{site.name}</strong> — statut juridique : {todo(site.legal.status)} — immatriculation : {todo(site.legal.registration)}.
              </p>
              <p>
                Adresse : {todo(site.location.city)}, {site.location.country}. Contact : <a className="text-primary-ink underline" href={`mailto:${site.email}`}>{site.email}</a> ·{" "}
                <a className="text-primary-ink underline" href={site.phone.href}>{site.phone.display}</a>.
              </p>
            </>
          ),
        },
        {
          title: "Hébergement",
          body: <p>Le site est hébergé par Netlify, Inc., San Francisco (Californie, États-Unis) — www.netlify.com.</p>,
        },
        {
          title: "Propriété intellectuelle",
          body: (
            <p>
              Les textes, visuels, maquettes et le code de ce site appartiennent à {site.name}, sauf mention contraire. Les logos et sites des clients
              présentés restent la propriété de leurs titulaires et sont montrés à titre de références.
            </p>
          ),
        },
        {
          title: "Responsabilité",
          body: (
            <p>
              {site.name} s'efforce de fournir des informations exactes et à jour, sans pouvoir garantir l'absence d'erreur. Les liens vers des sites
              externes n'engagent pas la responsabilité de {site.name}.
            </p>
          ),
        },
      ]}
    />
  );
}
