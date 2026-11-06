import { FileCheck, FileSignature, KeyRound, ShieldCheck, Timer, Wallet } from "lucide-react";
import Eyebrow from "../../../ui/Eyebrow";
import { M } from "../../../motion/kit";
import { guarantees } from "../../../data/process";

const ICONS = [FileCheck, ShieldCheck, Timer, FileSignature, Wallet, KeyRound];

/** Garanties (plan 3.10) : six engagements concrets en cartes vitrées. */
export default function Guarantees() {
  return (
    <section className="relative py-20 md:py-28" aria-labelledby="guarantees-title">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Eyebrow index="09">Nos garanties</Eyebrow>
            <M.H2 className="mt-6" id="guarantees-title">
              Travailler avec nous, sans risque.
            </M.H2>
            <M.P className="mt-6 max-w-md">Tout est écrit avant de commencer : ce que nous livrons, quand, et pour quel prix.</M.P>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {guarantees.map((g, i) => {
              const Icon = ICONS[i % ICONS.length];
              return (
                <M.Card key={g.title} index={i % 2}>
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-canvas-alt text-primary-ink">
                    <M.Icon delay={i * 0.08}>
                      <Icon className="h-6 w-6" strokeWidth={1.6} />
                    </M.Icon>
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold tracking-[-0.02em] text-ink">{g.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-muted">{g.desc}</p>
                </M.Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
