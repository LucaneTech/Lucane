import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Facebook, Github, Instagram, Linkedin, Mail, MessageCircle, Phone } from "lucide-react";
import { M } from "../../motion/kit";
import { services } from "../../data/services";
import { site, whatsappHref } from "../../data/site";
import { NAV_LINKS } from "./routes";
import { logoLight } from "./SiteHeader";

const LETTERS = Array.from("LUCANE");

const SOCIALS = [
  { name: "GitHub", url: site.socials.github, icon: Github },
  { name: "Facebook", url: site.socials.facebook, icon: Facebook },
  { name: "Instagram", url: site.socials.instagram, icon: Instagram },
  { name: "LinkedIn", url: site.socials.linkedin, icon: Linkedin },
].filter((s) => s.url.startsWith("http"));

/**
 * Pied de page (plan 4.2) : grand panneau arrondi toujours sombre, 4 colonnes, réseaux,
 * puis le mot LUCANE géant qui se lève lettre par lettre au défilement.
 * La newsletter (qui n'envoyait rien) est retirée.
 */
export default function SiteFooter() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });

  return (
    <footer ref={ref} className="relative px-2 pb-2 md:px-4 md:pb-4">
      <div className="relative overflow-hidden rounded-md bg-dark text-white md:rounded-md">
        {/* Halo irisé */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(0,163,163,0.35),transparent_65%)] blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 left-1/4 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(91,108,255,0.22),rgba(255,122,61,0.12)_45%,transparent_70%)] blur-3xl" />

        <div className="relative mx-auto max-w-[1440px] px-6 pt-16 md:px-12 md:pt-24">
          {/* Appel */}
          <div className="flex flex-wrap items-end justify-between gap-8 border-b border-white/10 pb-14">
            <div>
              <img src={logoLight} alt="Lucane" className="h-auto w-36" loading="lazy" />
              <p className="mt-6 max-w-md text-white/60">
                Lucane, c'est une équipe de développeurs passionnés qui conçoit des applications web, mobiles et logicielles modernes pour booster votre
                business.
              </p>
              <p className="kicker mt-4 text-base text-[#3ce0d0]">{site.tagline}</p>
            </div>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-full bg-white py-2 pl-7 pr-2 text-dark transition-transform duration-500 hover:scale-[1.03]"
              data-cursor="Écrire"
            >
              <span className="font-display text-xl font-bold">Parlons de votre projet</span>
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white transition-transform duration-500 group-hover:rotate-45">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </a>
          </div>

          {/* Colonnes */}
          <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
            <div>
              <h2 className="kicker mb-5 text-base text-white/50">Services</h2>
              <ul className="grid gap-2.5 sm:grid-cols-2 sm:gap-x-6">
                {services.map((s) => (
                  <li key={s.slug}>
                    <M.Link to={`/services#${s.slug}`} className="text-white/75 hover:text-white">
                      {s.title}
                    </M.Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="kicker mb-5 text-base text-white/50">Navigation</h2>
              <ul className="space-y-2.5">
                {NAV_LINKS.map((l) => (
                  <li key={l.to}>
                    <M.Link to={l.to} className="text-white/75 hover:text-white">
                      {l.label}
                    </M.Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="kicker mb-5 text-base text-white/50">Contact</h2>
              <ul className="space-y-3 text-white/75">
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-[#3ce0d0]" />
                  <M.Link href={site.phone.href} className="hover:text-white">
                    {site.phone.display}
                  </M.Link>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-[#3ce0d0]" />
                  <M.Link href={`mailto:${site.email}`} className="hover:text-white">
                    {site.email}
                  </M.Link>
                </li>
                <li className="flex items-center gap-3">
                  <MessageCircle className="h-4 w-4 text-[#3ce0d0]" />
                  <M.Link href={whatsappHref()} className="hover:text-white">
                    WhatsApp
                  </M.Link>
                </li>
                <li className="pt-1 text-sm text-white/45">{site.hours}</li>
              </ul>
            </div>
          </div>

          {/* Bas */}
          <div className="flex flex-col items-center justify-between gap-5 border-t border-white/10 py-8 md:flex-row">
            <div className="text-center text-sm text-white/45 md:text-left">
              <p>
                © {new Date().getFullYear()} {site.name}. Tous droits réservés.
              </p>
              <p className="mt-1 italic">« {site.signature} »</p>
              <p className="mt-3 flex justify-center gap-4 md:justify-start">
                <M.Link to="/mentions-legales" className="text-white/60 hover:text-white">
                  Mentions légales
                </M.Link>
                <M.Link to="/confidentialite" className="text-white/60 hover:text-white">
                  Confidentialité
                </M.Link>
              </p>
            </div>
            <div className="flex items-center gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-500 hover:-translate-y-1 hover:border-[#3ce0d0] hover:bg-[#3ce0d0] hover:text-dark"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* LUCANE géant */}
        <div className="relative flex select-none justify-center overflow-hidden px-2 pb-2 md:pb-4" aria-hidden>
          {LETTERS.map((l, i) => (
            <Letter key={i} letter={l} index={i} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </footer>
  );
}

function Letter({ letter, index, progress }: { letter: string; index: number; progress: ReturnType<typeof useScroll>["scrollYProgress"] }) {
  const start = 0.35 + index * 0.06;
  const y = useTransform(progress, [start, start + 0.35], ["100%", "0%"]);
  const rotate = useTransform(progress, [start, start + 0.35], [12, 0]);
  return (
    <motion.span
      style={{ y, rotate }}
      className="inline-block bg-[linear-gradient(180deg,#ffffff_20%,rgba(60,224,208,0.55)_100%)] bg-clip-text font-display text-[22vw] font-extrabold leading-[0.8] tracking-[-0.06em] text-transparent"
    >
      {letter}
    </motion.span>
  );
}
