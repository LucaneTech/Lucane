import { Gem, HeartHandshake, Lightbulb, Linkedin, Rocket, ShieldCheck, Sparkles } from "lucide-react";
import Eyebrow from "../../../ui/Eyebrow";
import { M } from "../../../motion/kit";
import { visibleTeam } from "../../../data/team";
import { values } from "../../../data/process";

const VALUE_ICONS = [Lightbulb, HeartHandshake, ShieldCheck, Rocket, Sparkles, Gem];

/**
 * Équipe (plan 3.9) : membres (photo révélée par rideau) + nos valeurs en mosaïque.
 * Les photos « l'équipe en action » de l'ancien site étaient des maquettes : elles sont
 * dans le Studio design. Les vraies photos d'équipe sont attendues (src/data/team.ts).
 */
export default function TeamSection() {
  const team = visibleTeam();
  return (
    <section className="relative py-12 md:py-28" aria-labelledby="team-title">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-16">
        <Eyebrow index="08">L'équipe</Eyebrow>
        <M.H2 className="mt-6 max-w-3xl" id="team-title">
          Une équipe, pas un freelance isolé.
        </M.H2>

        <div className="mt-14 grid gap-6 md:grid-cols-[minmax(0,300px)_1fr] lg:grid-cols-[minmax(0,360px)_1fr]">
          <div className="grid gap-6">
            {team.map((m, i) => (
              <M.Card key={m.name} index={i} className="flex flex-col p-4 md:p-4">
                <M.Img src={m.photo} alt={m.name} width={800} height={1000} className="aspect-[4/5]" parallax={0.05} />
                <div className="flex items-end justify-between gap-3 px-3 pb-2 pt-5">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-ink">{m.name}</h3>
                    <p className="text-primary-ink">{m.role}</p>
                    <p className="mt-2 text-sm text-ink-muted">{m.bio}</p>
                  </div>
                  {m.linkedin && (
                    <a
                      href={m.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`LinkedIn de ${m.name}`}
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink text-canvas transition-transform duration-500 hover:scale-110"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </M.Card>
            ))}
          </div>

          {/* Nos valeurs (mosaïque) */}
          <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 md:gap-6">
            {values.map((v, i) => {
              const Icon = VALUE_ICONS[i % VALUE_ICONS.length];
              return (
                <M.Card key={v.title} index={i % 2} className={i === 0 ? "sm:col-span-2 bg-[linear-gradient(135deg,rgba(0,128,128,0.10),transparent_60%)]" : ""}>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-on-primary">
                    <M.Icon delay={i * 0.08}>
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </M.Icon>
                  </span>
                  <h3 className={`mt-5 font-display font-bold tracking-[-0.02em] text-ink ${i === 0 ? "text-4xl" : "text-2xl"}`}>{v.title}</h3>
                  <p className="mt-2 text-ink-muted">{v.desc}</p>
                </M.Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
