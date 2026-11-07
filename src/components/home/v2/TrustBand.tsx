import { M } from "../../../motion/kit";
import Eyebrow from "../../../ui/Eyebrow";
import Counter from "../../../motion/Counter";
import { confirmedClients } from "../../../data/clients";
import { verifiedFacts } from "../../../data/site";

/**
 * Bande de preuve (révisée) : comme l'ancienne version, les logos clients (blancs) défilent
 * sur un bandeau teal pleine largeur — deux rangées en sens inverse, logos grands et nets.
 * Le bandeau accélère avec la vitesse de défilement de la page.
 */
export default function TrustBand() {
  const clients = confirmedClients();
  const facts = verifiedFacts();
  const row = (reverse: boolean) => (
    <M.Marquee speed={2.2} reverse={reverse}>
      {clients.map((c) => (
        <div key={c.name} className="mx-6 flex h-16 items-center md:mx-10 md:h-16" data-cursor="pointer">
          <img
            src={c.logo}
            alt={c.name}
            loading="lazy"
            className="h-10 w-auto max-w-[11rem] object-contain opacity-95 transition-transform duration-500 hover:scale-110 md:h-14"
          />
        </div>
      ))}
    </M.Marquee>
  );

  return (
    <section className="relative py-14 md:py-20" aria-label="Ils nous font confiance">
      <div className="mx-auto mb-8 flex w-full max-w-[1440px] flex-wrap items-center justify-center gap-6 px-5 md:px-10 lg:px-16">
        <Eyebrow index="01">Ils nous font confiance</Eyebrow>
       
      </div>

      {/* Bandeau teal pleine largeur, comme l'ancienne version */}
      <div className="relative overflow-hidden  py-6 md:py-8 ">
       
        <div className="space-y-4 md:space-y-6">
          {row(false)}
          {row(true)}
        </div>
      </div>
    </section>
  );
}
