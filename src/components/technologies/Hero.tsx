import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// ── Syntax token helpers (VS Code Dark+ palette) ──────────────────────────────
type Tok = { t: string; c: string };
const kw   = (t: string): Tok => ({ t, c: "text-[#569cd6]" });
const prop = (t: string): Tok => ({ t, c: "text-[#9cdcfe]" });
const str  = (t: string): Tok => ({ t, c: "text-[#ce9178]" });
const typ  = (t: string): Tok => ({ t, c: "text-[#4ec9b0]" });
const cmt  = (t: string): Tok => ({ t, c: "text-[#6a9955]" });
const pl   = (t: string): Tok => ({ t, c: "text-white/65" });

// ── Code content ──────────────────────────────────────────────────────────────
const CODE: Tok[][] = [
  [cmt("// Lucane Tech — production stack")],
  [],
  [kw("export "), kw("const "), prop("stack"), pl(" = {")],
  [pl("  "), prop("frontend"), pl(":  ["), str('"React"'),      pl(", "), str('"TypeScript"'), pl(", "), str('"Tailwind"'),   pl("]," )],
  [pl("  "), prop("backend"),  pl(":   ["), str('"Node.js"'),   pl(", "), str('"Django"'),     pl(", "), str('"Python"'),     pl("],")],
  [pl("  "), prop("data"),     pl(":     ["), str('"PostgreSQL"'), pl(", "), str('"MongoDB"'),  pl("],")],
  [pl("  "), prop("infra"),    pl(":     ["), str('"AWS"'),      pl(", "), str('"Docker"'),     pl(", "), str('"GitHub CI"'), pl("],")],
  [pl("} "), kw("satisfies "), typ("TechStack"), pl(";")],
  [],
  [cmt("// ✓ 20+ projets livrés en production")],
];

// ── Performance chips ─────────────────────────────────────────────────────────
const PERF = [
  { label: "Frontend", value: "< 1.5s TTI"  },
  { label: "Backend",  value: "50k+ req/j"  },
  { label: "Deploy",   value: "< 3 min"     },
];

// ── Tech badge list (doubled for seamless marquee) ────────────────────────────
// const BADGES = ["React","TypeScript","Node.js","Django","React Native","PostgreSQL","MongoDB","AWS","Docker","Tailwind CSS"];

const Hero: React.FC = () => {
  const [revealed, setRevealed] = useState(0);
  const [cursor,   setCursor]   = useState(true);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    const start = setTimeout(() => {
      interval = setInterval(() => {
        setRevealed(v => {
          if (v >= CODE.length) { clearInterval(interval); return v; }
          return v + 1;
        });
      }, 180);
    }, 900);
    return () => { clearTimeout(start); clearInterval(interval); };
  }, []);

  useEffect(() => {
    const t = setInterval(() => setCursor(c => !c), 520);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="mt-15  px-3 relative min-h-screen lg:min-h-[92vh] flex items-center overflow-hidden dark:bg-dark">

      {/* ── Teal radial atmospheric glow ─────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 75% 55% at 50% 35%, rgba(0,128,128,0.10) 0%, transparent 68%)" }}
      />

      {/* ── Horizontal grid lines ────────────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(transparent 95%, rgba(0,128,128,0.03) 100%)",
          backgroundSize: "100% 44px",
        }}
      />

      {/* ── Decorative dot grids ─────────────────────────────────────────── */}
      <svg className="absolute top-24 left-6 w-20 h-20 opacity-[0.15] pointer-events-none hidden xl:block" viewBox="0 0 80 80" fill="none">
        {[0,1,2,3].map(r => [0,1,2,3].map(c => (
          <circle key={`tl-${r}-${c}`} cx={c*20+10} cy={r*20+10} r="1.6" fill="var(--color-primary)" />
        )))}
      </svg>
      <svg className="absolute bottom-14 right-6 w-20 h-20 opacity-[0.15] pointer-events-none hidden xl:block" viewBox="0 0 80 80" fill="none">
        {[0,1,2,3].map(r => [0,1,2,3].map(c => (
          <circle key={`br-${r}-${c}`} cx={c*20+10} cy={r*20+10} r="1.6" fill="var(--color-primary)" />
        )))}
      </svg>

      {/* ── Main grid ────────────────────────────────────────────────────── */}
      <div className="relative  z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        {/* Stack sur mobile: colonne (image en bas), sur desktop: ligne (image à droite) */}
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
          
          {/* ─────────────── LEFT — Content (toujours en haut sur mobile) ─────────────── */}
          <div className="order-1 lg:order-none w-full">

            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="hidden md:inline-flex items-center gap-2 rounded-md bg-primary/10 border border-primary/20 px-4 py-1.5 text-sm text-primary font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Technologies
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.8, ease: "easeOut" }}
              className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold text-gray-700 dark:text-white leading-[1.1] mb-5"
            >
              Notre stack{" "}
              <br className="hidden sm:block" />
              <span className="text-primary">technologique</span>
              <br />
              de prédilection
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-base lg:text-lg leading-relaxed text-gray-600 dark:text-gray-300 max-w-lg mb-8"
            >
              Des outils choisis pour leur maturité, leurs performances en production
              et leur capacité à évoluer avec votre produit.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.52, duration: 0.6 }}
              className="flex flex-wrap gap-2.5 mb-9"
            >
              {PERF.map((p) => (
                <div
                  key={p.label}
                  className="flex items-center gap-2 rounded-md bg-primary/5 dark:bg-dark-surface border border-gray-300/50 dark:border-slate-700/50 px-3.5 py-2"
                >
                  <span className="text-[11px] dark:text-white/30 uppercase tracking-wider font-medium">{p.label}</span>
                  <span className="w-px h-3 bg-slate-700/80" />
                  <span className="text-sm font-semibold text-primary dark:text-primary font-mono">{p.value}</span>
                </div>
              ))}
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.68, duration: 0.8 }}
              className="relative overflow-hidden"
            >
              <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-base-100 dark:from-dark to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-base-100 dark:from-dark to-transparent z-10 pointer-events-none" />
              <div className="flex gap-2 animate-marquee-left w-max">
                {[...BADGES, ...BADGES].map((badge, i) => (
                  <span
                    key={i}
                    className="shrink-0 rounded-md bg-primary/10 dark:bg-primary/8 border border-primary/20 dark:border-primary/15 text-ink dark:text-white/60 px-3.5 py-1.5 text-xs font-medium whitespace-nowrap"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </motion.div> */}
          </div>

          {/* ─────────────── RIGHT — Image + Terminal (en bas sur mobile, à droite sur desktop) ─────────── */}
          <div className="order-2 lg:order-none w-full max-w-2xl lg:max-w-none mx-auto lg:mx-0">
            <motion.div
              className="relative flex flex-col gap-4 w-full"
              initial={{ opacity: 0, x: 44, y: 16 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.3, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            >

              {/* ── IMAGE AVEC FRAME ──────────────────────────────────────── */}
              <div className="relative w-full">

                <div
                  className="absolute -inset-[3px] pointer-events-none rounded-sm"
                  style={{ boxShadow: "0 0 28px rgba(0,128,128,0.22), 0 0 70px rgba(0,128,128,0.09)" }}
                />

                <div
                  className="relative overflow-hidden w-full"
                  style={{
                    clipPath: "polygon(18px 0%,calc(100% - 18px) 0%,100% 18px,100% calc(100% - 18px),calc(100% - 18px) 100%,18px 100%,0% calc(100% - 18px),0% 18px)",
                  }}
                >
                  <img
                    src="/images/technologies/hero.png"
                    alt="Stack technologique"
                    className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover"
                    style={{ filter: "brightness(0.72) saturate(0.9)" }}
                  />

                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: "linear-gradient(135deg, rgba(0,128,128,0.25) 0%, transparent 60%)" }}
                  />

                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      backgroundImage: "repeating-linear-gradient(transparent 0px, transparent 3px, rgba(0,0,0,0.10) 3px, rgba(0,0,0,0.10) 4px)",
                    }}
                  />

                  <motion.div
                    className="absolute left-0 right-0 h-[2px] pointer-events-none"
                    style={{
                      background: "linear-gradient(to right, transparent 0%, rgba(0,128,128,0.0) 15%, rgba(0,255,255,0.55) 50%, rgba(0,128,128,0.0) 85%, transparent 100%)",
                      boxShadow: "0 0 8px rgba(0,200,200,0.4)",
                    }}
                    animate={{ top: ["0%", "100%"] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: "linear", repeatDelay: 1.2 }}
                  />

                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-dark/75 backdrop-blur-sm border border-primary/35 px-2.5 py-1 rounded-sm">
                    <motion.span
                      className="w-1.5 h-1.5 rounded-full bg-primary"
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 1.2, repeat: Infinity }}
                    />
                    <span className="text-[9px] font-mono text-primary/90 tracking-[0.18em] uppercase">Stack Verified</span>
                  </div>

                  <div className="absolute top-3 right-3 text-[9px] font-mono text-white/30 tracking-widest uppercase">
                    SYS:ACTIVE
                  </div>
                </div>

                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <polygon
                    points="5,0 95,0 100,5 100,95 95,100 5,100 0,95 0,5"
                    fill="none"
                    stroke="rgba(0,128,128,0.55)"
                    strokeWidth="0.6"
                  />
                  <polygon
                    points="7,1 93,1 99,7 99,93 93,99 7,99 1,93 1,7"
                    fill="none"
                    stroke="rgba(0,128,128,0.18)"
                    strokeWidth="0.4"
                    strokeDasharray="3 4"
                  />
                </svg>

                <div className="absolute top-0 left-0">
                  <div className="w-5 h-[2px] bg-primary" />
                  <div className="w-[2px] h-5 bg-primary" />
                </div>
                <div className="absolute top-0 right-0 flex flex-col items-end">
                  <div className="w-5 h-[2px] bg-primary" />
                  <div className="w-[2px] h-5 bg-primary self-end" />
                </div>
                <div className="absolute bottom-0 left-0 flex flex-col justify-end">
                  <div className="w-[2px] h-5 bg-primary" />
                  <div className="w-5 h-[2px] bg-primary" />
                </div>
                <div className="absolute bottom-0 right-0 flex flex-col items-end justify-end">
                  <div className="w-[2px] h-5 bg-primary self-end" />
                  <div className="w-5 h-[2px] bg-primary" />
                </div>

                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[3px] h-4 bg-primary/40" />
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[3px] h-4 bg-primary/40" />
                <div className="absolute left-1/2 top-0 -translate-x-1/2 w-4 h-[3px] bg-primary/40" />
                <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-4 h-[3px] bg-primary/40" />
              </div>

              <div
                className="absolute -bottom-6 -right-2 text-[8rem] font-black leading-none select-none pointer-events-none tracking-tighter hidden xl:block"
                style={{ color: "rgba(0,128,128,0.07)" }}
                aria-hidden
              >
                {"</>"}
              </div>

              <motion.div
                className="absolute -inset-3 rounded-2xl pointer-events-none"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                style={{ boxShadow: "0 0 60px rgba(0,128,128,0.13), 0 0 110px rgba(0,128,128,0.06)" }}
              />

              {/* ── TERMINAL ── */}
              <div className="relative w-full rounded-md overflow-hidden border border-[#3e3e3e] shadow-2xl">

                <div className="flex items-center gap-1.5 px-4 py-3 bg-[#2d2d2d] border-b border-[#3e3e3e]">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                  <span className="flex-1 text-center text-xs font-mono text-[#707070]">
                    stack.config.ts
                  </span>
                  <span className="text-[10px] font-mono text-primary/60 bg-primary/10 px-2 py-0.5 rounded">
                    tsx
                  </span>
                </div>

                <div
                  className="p-4 font-mono text-[12px] sm:text-[13px] leading-6 min-h-[280px] sm:min-h-[300px] overflow-x-auto"
                  style={{
                    background: "#1e1e1e",
                    backgroundImage: "repeating-linear-gradient(transparent 0px, transparent 23px, rgba(255,255,255,0.012) 23px, rgba(255,255,255,0.012) 24px)",
                  }}
                >
                  {CODE.slice(0, revealed).map((line, i) => (
                    <motion.div
                      key={i}
                      className="flex flex-nowrap"
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <span className="w-6 shrink-0 text-[#4a4a4a] text-right mr-3 sm:mr-5 select-none text-xs mt-[2px]">
                        {i + 1}
                      </span>
                      <span className="whitespace-pre-wrap break-words">
                        {line.length === 0 ? " " : line.map((tok, j) => (
                          <span key={j} className={tok.c}>{tok.t}</span>
                        ))}
                      </span>
                    </motion.div>
                  ))}

                  {revealed <= CODE.length && (
                    <div className="flex">
                      <span className="w-6 shrink-0 mr-3 sm:mr-5 text-[#4a4a4a] text-xs text-right select-none">
                        {revealed + 1}
                      </span>
                      <span
                        className="inline-block w-[2px] h-[15px] bg-[#aeafad] rounded-sm mt-[3px]"
                        style={{ opacity: cursor ? 1 : 0 }}
                      />
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-1.5 bg-primary border-t border-primary/60">
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="text-[11px] font-mono text-white/90 font-medium">⎇ main</span>
                    <span className="text-[11px] font-mono text-white/65">✓ 0 problems</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-[11px] font-mono text-white/65">TypeScript</span>
                    <span className="text-[11px] font-mono text-white/40">UTF-8</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;