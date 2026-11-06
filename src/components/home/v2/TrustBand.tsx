import { M } from "../../../motion/kit";
import Eyebrow from "../../../ui/Eyebrow";
import Counter from "../../../motion/Counter";
import { confirmedClients } from "../../../data/clients";
import { verifiedFacts } from "../../../data/site";

/** Bande de preuve : logos clients en pilules qui défilent (vitesse liée au défilement) + chiffres vérifiés. */
export default function TrustBand() {
  const clients = confirmedClients();
  const facts = verifiedFacts();

  return (
    <section className="relative py-16 md:py-20" aria-label="Ils nous font confiance">
      <div className="mx-auto mb-10 flex w-full max-w-[1440px] flex-wrap items-end justify-between gap-6 px-5 md:px-10 lg:px-16">
        <Eyebrow index="01">Ils nous font confiance</Eyebrow>
        <div className="flex gap-10">
          {facts.map((f) => (
            <div key={f.label} className="text-right">
              <Counter value={f.value} prefix={f.prefix} suffix={f.suffix} className="font-display text-4xl font-extrabold tracking-tight text-ink" />
              <p className="text-sm text-ink-muted">{f.label}</p>
            </div>
          ))}
          <div className="text-right">
            <Counter value={24} suffix=" h" className="font-display text-4xl font-extrabold tracking-tight text-ink" />
            <p className="text-sm text-ink-muted">pour vous répondre</p>
          </div>
        </div>
      </div>

      <div className="[mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <M.Marquee speed={2.5}>
          {clients.map((c) => (
            <div
              key={c.name}
              className="mx-3 flex h-20 w-56 items-center justify-center rounded-full bg-primary px-8 shadow-glow transition-transform duration-500 hover:-translate-y-1 hover:scale-105 dark:bg-panel dark:ring-1 dark:ring-glass-line"
              data-cursor="pointer"
            >
              <img src={c.logo} alt={c.name} loading="lazy" className="max-h-10 w-auto object-contain" />
            </div>
          ))}
        </M.Marquee>
      </div>
    </section>
  );
}
