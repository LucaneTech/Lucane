/**
 * Politique de confidentialité (phase 6.4) : décrit ce que le site collecte réellement
 * (formulaires via FormSubmit, mesure d'audience Google Analytics déclarée dans index.html).
 * À faire relire par l'équipe avant la mise en production.
 */
import LegalPage from "../ui/LegalPage";
import { site } from "../data/site";
import { useSeo } from "../ui/useSeo";

export default function Privacy() {
  useSeo("Confidentialité", "Quelles données le site Lucane Tech collecte, pourquoi, et comment exercer vos droits.");
  return (
    <LegalPage
      eyebrow="Confidentialité"
      light="Vos données,"
      bold="en toute transparence."
      updated="6 novembre 2026"
      blocks={[
        {
          title: "Données collectées",
          body: (
            <>
              <p>
                Les formulaires du site (contact, devis express) recueillent les informations que vous saisissez : nom, e-mail et, si vous les
                indiquez, téléphone, entreprise, type de projet, secteur, budget, délai et message.
              </p>
              <p>Aucune donnée n'est collectée sans action de votre part.</p>
            </>
          ),
        },
        {
          title: "Utilisation",
          body: <p>Ces informations servent uniquement à répondre à votre demande et à préparer un devis. Elles ne sont ni vendues ni cédées.</p>,
        },
        {
          title: "Transmission et conservation",
          body: (
            <>
              <p>
                Les formulaires sont transmis par le service FormSubmit (formsubmit.co) jusqu'à notre boîte {site.email}. Les échanges sont
                conservés le temps nécessaire au suivi de votre projet.
              </p>
            </>
          ),
        },
        {
          title: "Mesure d'audience",
          body: (
            <p>
              Le site utilise Google Analytics pour mesurer sa fréquentation de façon statistique (pages vues, provenance). Ces mesures peuvent
              déposer des cookies sur votre appareil.
            </p>
          ),
        },
        {
          title: "Vos droits",
          body: (
            <p>
              Vous pouvez demander à consulter, corriger ou supprimer vos données à tout moment en écrivant à{" "}
              <a className="text-primary-ink underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              .
            </p>
          ),
        },
      ]}
    />
  );
}
