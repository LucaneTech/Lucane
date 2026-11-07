import { useId, useRef, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import {
  Check,
  Cloud,
  Code2,
  Database,
  Gem,
  Heart,
  Lightbulb,
  PenTool,
  ShieldCheck,
  Smartphone,
  Store,
  TrendingUp,
  Video,
} from "lucide-react";
import { ease } from "../../../motion/presets";

/**
 * Illustrations animées de la page À propos, en SVG aux couleurs du thème
 * (suivent le mode clair / sombre, nettes à toutes les tailles).
 * Les animations démarrent quand l'illustration arrive à l'écran.
 */

const C = {
  panel: "var(--panel)",
  alt: "var(--canvas-alt)",
  line: "var(--line)",
  ink: "var(--ink)",
  muted: "var(--ink-muted)",
  faint: "var(--ink-faint)",
  primary: "var(--primary)",
  primaryInk: "var(--primary-ink)",
  cyan: "#3ce0d0",
  indigo: "#5b6cff",
  orange: "#ff7a3d",
  dark: "#14161c",
};
const SANS = "Inter Tight, system-ui, sans-serif";

/** SVG qui ne lance ses animations qu'une fois visible. */
function Svg({ w, h, label, className = "", children }: { w: number; h: number; label: string; className?: string; children: (on: boolean, id: string) => ReactNode }) {
  const ref = useRef<SVGSVGElement>(null);
  const on = useInView(ref, { once: true, amount: 0.25 });
  const id = useId().replace(/:/g, "");
  return (
    <svg ref={ref} viewBox={`0 0 ${w} ${h}`} className={`h-auto w-full ${className}`} role="img" aria-label={label}>
      <defs>
        <filter id={`sh-${id}`} x="-30%" y="-30%" width="160%" height="170%">
          <feDropShadow dx="0" dy="8" stdDeviation="9" floodColor="#0b1a2a" floodOpacity="0.14" />
        </filter>
        <linearGradient id={`iris-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={C.cyan} />
          <stop offset="55%" stopColor={C.indigo} />
          <stop offset="100%" stopColor={C.orange} />
        </linearGradient>
      </defs>
      {children(on, id)}
    </svg>
  );
}

const show = (on: boolean, delay = 0, y = 12) => ({
  initial: { opacity: 0, y },
  animate: on ? { opacity: 1, y: 0 } : undefined,
  transition: { duration: 0.8, ease: ease.out, delay },
});

/* ── En-tête : la constellation de l'équipe ───────────────────────────────── */

type OrbitNode = { angle: number; label: string; icon?: typeof Code2; color: string };

function Orbit({ r, duration, nodes, reverse = false, on }: { r: number; duration: number; nodes: OrbitNode[]; reverse?: boolean; on: boolean }) {
  const dir = reverse ? -360 : 360;
  return (
    <motion.g animate={on ? { rotate: dir } : undefined} transition={{ duration, repeat: Infinity, ease: "linear" }}>
      {/* cercle invisible : garde le centre de rotation au milieu de l'illustration */}
      <circle cx={260} cy={260} r={262} fill="none" />
      <circle cx={260} cy={260} r={r} fill="none" stroke={C.line} strokeWidth={1.2} strokeDasharray="2 6" />
      {nodes.map((n, i) => {
        const a = (n.angle * Math.PI) / 180;
        const x = 260 + r * Math.cos(a);
        const y = 260 + r * Math.sin(a);
        const w = n.icon ? 118 : 84;
        return (
          <motion.g key={n.label} animate={on ? { rotate: -dir } : undefined} transition={{ duration, repeat: Infinity, ease: "linear" }}>
            <motion.g initial={{ opacity: 0, scale: 0.6 }} animate={on ? { opacity: 1, scale: 1 } : undefined} transition={{ duration: 0.7, ease: ease.out, delay: 0.4 + i * 0.12 }}>
              <rect x={x - w / 2} y={y - 19} width={w} height={38} rx={19} fill={C.panel} stroke={C.line} />
              {n.icon ? (
                <>
                  <circle cx={x - w / 2 + 17} cy={y} r={12} fill={n.color} />
                  <n.icon x={x - w / 2 + 10} y={y - 7} size={14} color="#fff" />
                  <text x={x - w / 2 + 37} y={y + 4.5} fontSize={13} fontFamily={SANS} fontWeight={700} fill={C.ink}>{n.label}</text>
                </>
              ) : (
                <>
                  <circle cx={x - w / 2 + 14} cy={y} r={4} fill={n.color} />
                  <text x={x - w / 2 + 24} y={y + 4.5} fontSize={12.5} fontFamily={SANS} fontWeight={600} fill={C.muted}>{n.label}</text>
                </>
              )}
            </motion.g>
          </motion.g>
        );
      })}
    </motion.g>
  );
}

export function TeamConstellation() {
  return (
    <Svg w={520} h={520} label="Illustration : l'équipe Lucane Tech et ses compétences, en orbite autour du logo" className="mx-auto max-w-[560px]">
      {(on, id) => (
        <>
          {/* ondes */}
          {[0, 1, 2].map((i) => (
            <motion.circle
              key={i} cx={260} cy={260} r={62} fill="none" stroke={C.primary} strokeWidth={1.4}
              initial={{ opacity: 0 }}
              animate={on ? { r: [62, 150], opacity: [0.45, 0] } : undefined}
              transition={{ duration: 3.6, repeat: Infinity, delay: i * 1.2, ease: "easeOut" }}
            />
          ))}
          <Orbit r={100} duration={46} on={on} nodes={[
            { angle: -30, label: "Code", icon: Code2, color: C.primary },
            { angle: 150, label: "Design", icon: PenTool, color: C.orange },
          ]} />
          <Orbit r={160} duration={70} reverse on={on} nodes={[
            { angle: 20, label: "Mobile", icon: Smartphone, color: C.indigo },
            { angle: 140, label: "Cloud", icon: Cloud, color: C.primary },
            { angle: 260, label: "Données", icon: Database, color: C.orange },
          ]} />
          <Orbit r={218} duration={96} on={on} nodes={[
            { angle: 45, label: "React", color: C.cyan },
            { angle: 135, label: "Django", color: C.primary },
            { angle: 225, label: "Figma", color: C.orange },
            { angle: 315, label: "Docker", color: C.indigo },
          ]} />
          {/* cœur : le logo */}
          <motion.g initial={{ opacity: 0, scale: 0.7 }} animate={on ? { opacity: 1, scale: 1 } : undefined} transition={{ duration: 0.9, ease: ease.out }}>
            <circle cx={260} cy={260} r={62} fill={C.panel} stroke={C.line} filter={`url(#sh-${id})`} />
            <circle cx={260} cy={260} r={54} fill="none" stroke={`url(#iris-${id})`} strokeWidth={2.5} />
            <image href="/favicon.png" x={222} y={222} width={76} height={76} />
          </motion.g>
          {/* étincelles */}
          {[[70, 90], [452, 120], [430, 430], [88, 420], [260, 30]].map(([sx, sy], i) => (
            <motion.circle
              key={i} cx={sx} cy={sy} r={3} fill={[C.cyan, C.indigo, C.orange][i % 3]}
              animate={on ? { opacity: [0.2, 1, 0.2], scale: [0.8, 1.3, 0.8] } : undefined}
              transition={{ duration: 2.4 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        </>
      )}
    </Svg>
  );
}

/* ── Mission : du commerce de quartier au site en ligne ───────────────────── */

export function MissionIllustration() {
  return (
    <Svg w={360} h={200} label="Illustration : une boutique de quartier qui passe en ligne, sur ordinateur et téléphone">
      {(on, id) => (
        <>
          {/* boutique */}
          <motion.g {...show(on, 0.1)}>
            <rect x={22} y={70} width={110} height={98} rx={6} fill={C.panel} stroke={C.line} filter={`url(#sh-${id})`} />
            {Array.from({ length: 6 }, (_, i) => (
              <path key={i} d={`M${22 + i * 18.3} 70 h18.3 v14 a9.15 9.15 0 0 1 -18.3 0 Z`} fill={i % 2 ? C.panel : C.orange} stroke={C.line} strokeWidth={0.6} />
            ))}
            <rect x={36} y={104} width={36} height={64} rx={3} fill={C.alt} stroke={C.line} />
            <circle cx={66} cy={138} r={2} fill={C.faint} />
            <rect x={82} y={104} width={38} height={30} rx={3} fill={C.cyan} opacity={0.35} />
            <Store x={66} y={44} size={22} color={C.muted} />
            <text x={77} y={188} fontSize={10} fontFamily={SANS} fontWeight={700} fill={C.muted} textAnchor="middle">Aujourd'hui</text>
          </motion.g>

          {/* passage en ligne */}
          <motion.path
            d="M140 118 C165 92 178 92 200 110" fill="none" stroke={C.primary} strokeWidth={2} strokeDasharray="4 5" strokeLinecap="round"
            initial={{ pathLength: 0 }} animate={on ? { pathLength: 1 } : undefined} transition={{ duration: 1, delay: 0.6 }}
          />
          <motion.path d="M194 104 L201 111 L192 114" fill="none" stroke={C.primary} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...show(on, 1.4, 0)} />

          {/* ordinateur + téléphone */}
          <motion.g {...show(on, 0.9)}>
            <rect x={206} y={52} width={124} height={84} rx={6} fill={C.panel} stroke={C.line} filter={`url(#sh-${id})`} />
            <rect x={214} y={60} width={108} height={14} rx={3} fill={C.alt} />
            <rect x={214} y={80} width={60} height={7} rx={3.5} fill={C.ink} />
            <rect x={214} y={92} width={44} height={4} rx={2} fill={C.faint} />
            <rect x={214} y={104} width={36} height={12} rx={6} fill={C.primary} />
            <rect x={280} y={80} width={42} height={38} rx={4} fill={`url(#iris-${id})`} />
            <path d="M194 140 h148 l-10 10 h-128 Z" fill={C.alt} stroke={C.line} />
            <rect x={300} y={96} width={40} height={74} rx={8} fill={C.dark} />
            <rect x={304} y={102} width={32} height={62} rx={5} fill={C.panel} />
            <rect x={308} y={108} width={24} height={14} rx={3} fill={C.primary} />
            {[128, 138, 148].map((ly) => <rect key={ly} x={308} y={ly} width={22} height={4} rx={2} fill={C.line} />)}
            <text x={268} y={188} fontSize={10} fontFamily={SANS} fontWeight={700} fill={C.primaryInk} textAnchor="middle">Demain, en ligne</text>
          </motion.g>
          <motion.g animate={on ? { y: [0, -5, 0] } : undefined} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.6 }}>
            <motion.g {...show(on, 1.6)}>
              <rect x={170} y={22} width={98} height={22} rx={11} fill={C.panel} stroke={C.line} />
              <Check x={179} y={27} size={12} color={C.primaryInk} strokeWidth={3} />
              <text x={196} y={37} fontSize={9} fontFamily={SANS} fontWeight={700} fill={C.ink}>Nouveau client</text>
            </motion.g>
          </motion.g>
        </>
      )}
    </Svg>
  );
}

/* ── Vision : une croissance qui décolle ──────────────────────────────────── */

export function VisionIllustration() {
  const bars = [34, 52, 46, 74, 96, 128];
  return (
    <Svg w={360} h={200} label="Illustration : une courbe de croissance qui s'élève au-dessus de l'Afrique">
      {(on, id) => (
        <>
          {[60, 100, 140].map((gy) => <line key={gy} x1={24} x2={336} y1={gy} y2={gy} stroke={C.line} strokeDasharray="2 4" />)}
          {bars.map((h, i) => (
            <motion.rect
              key={i} x={36 + i * 48} y={176 - h} width={28} height={h} rx={4}
              fill={i === bars.length - 1 ? `url(#iris-${id})` : C.alt} stroke={C.line}
              initial={{ scaleY: 0 }} animate={on ? { scaleY: 1 } : undefined} style={{ originY: 1 }}
              transition={{ duration: 0.9, ease: ease.out, delay: 0.2 + i * 0.1 }}
            />
          ))}
          <motion.path
            d="M50 136 C98 126 120 128 146 112 S214 92 242 70 S300 42 326 28"
            fill="none" stroke={C.primary} strokeWidth={3} strokeLinecap="round"
            initial={{ pathLength: 0 }} animate={on ? { pathLength: 1 } : undefined} transition={{ duration: 1.8, ease: ease.out, delay: 0.6 }}
          />
          <motion.g initial={{ opacity: 0, scale: 0 }} animate={on ? { opacity: 1, scale: 1 } : undefined} transition={{ delay: 2.2, type: "spring", stiffness: 240, damping: 14 }}>
            <circle cx={326} cy={28} r={13} fill={C.primary} />
            <TrendingUp x={319} y={21} size={14} color="#fff" />
          </motion.g>
          <motion.circle cx={326} cy={28} r={13} fill="none" stroke={C.primary} animate={on ? { r: [13, 26], opacity: [0.6, 0] } : undefined} transition={{ duration: 1.8, repeat: Infinity, delay: 2.4 }} />
          <line x1={24} x2={336} y1={176} y2={176} stroke={C.line} />
          <motion.g {...show(on, 1.2)}>
            <rect x={28} y={20} width={128} height={22} rx={11} fill={C.panel} stroke={C.line} />
            <circle cx={42} cy={31} r={4} fill={C.orange} />
            <text x={52} y={35} fontSize={9} fontFamily={SANS} fontWeight={700} fill={C.ink}>Référence tech africaine</text>
          </motion.g>
        </>
      )}
    </Svg>
  );
}

/* ── Où nous sommes : carte de l'Afrique en points ────────────────────────── */

// Contour simplifié de l'Afrique (longitude, latitude) — suffisant pour une carte en points.
const AFRICA: [number, number][] = [
  [-5.8, 35.8], [10, 37.3], [11, 33], [20, 32], [25, 31.6], [32, 31.3], [32.5, 30], [35, 24], [38, 18], [43, 12.5],
  [51.3, 11.8], [49, 6], [42, 0], [40, -3], [39.5, -7], [40.5, -11], [40.5, -15], [35, -22], [32.8, -26], [30, -31],
  [25, -34], [18.5, -34.3], [17, -30], [14.5, -22], [12, -17], [13.5, -11], [12, -5], [9, -1], [9.5, 4], [6, 4.3],
  [2, 6.3], [-2, 4.8], [-7.5, 4.4], [-11, 7], [-13.5, 9.5], [-16.8, 12.5], [-17.5, 14.7], [-16.5, 19.5], [-17, 21],
  [-13, 27.5], [-10, 29.5], [-9.5, 32.5], [-6.5, 34],
];
const MADAGASCAR: [number, number][] = [[49.3, -12], [50.4, -15.5], [47.2, -25], [43.6, -22.5], [44.2, -17]];
const proj = ([lon, lat]: [number, number]): [number, number] => [18 + (lon + 20) * 4, 14 + (38 - lat) * 4];

function inside([x, y]: [number, number], poly: [number, number][]) {
  let ok = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i];
    const [xj, yj] = poly[j];
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) ok = !ok;
  }
  return ok;
}

const SHAPES = [AFRICA.map(proj), MADAGASCAR.map(proj)];
const DOTS: [number, number][] = [];
for (let y = 10; y < 316; y += 8.5) {
  for (let x = 10; x < 320; x += 8.5) {
    if (SHAPES.some((s) => inside([x, y], s))) DOTS.push([x, y]);
  }
}

const MAROC = proj([-7, 32]);
const BRAZZA = proj([15.3, -4.3]);

export function AfricaMap() {
  const arc = `M${MAROC[0]} ${MAROC[1]} Q ${BRAZZA[0] + 40} ${MAROC[1] + 40} ${BRAZZA[0]} ${BRAZZA[1]}`;
  return (
    <Svg w={330} h={325} label="Carte : l'équipe au Maroc reliée à notre relais de Brazzaville" className="mx-auto max-w-[520px]">
      {(on) => (
        <>
          {DOTS.map(([x, y], i) => (
            <motion.circle
              key={i} cx={x} cy={y} r={1.9} fill={C.faint}
              initial={{ opacity: 0 }} animate={on ? { opacity: 0.55 } : undefined}
              transition={{ duration: 0.6, delay: (y / 316) * 0.9 }}
            />
          ))}
          {/* vers l'Europe et la diaspora */}
          <motion.path
            d={`M${MAROC[0]} ${MAROC[1]} C ${MAROC[0] - 6} ${MAROC[1] - 20}, ${MAROC[0] + 30} ${MAROC[1] - 28}, ${MAROC[0] + 64} ${4}`}
            fill="none" stroke={C.indigo} strokeWidth={1.6} strokeDasharray="3 4"
            initial={{ pathLength: 0 }} animate={on ? { pathLength: 1 } : undefined} transition={{ duration: 1.2, delay: 1.4 }}
          />
          <motion.text x={MAROC[0] + 70} y={14} fontSize={8.5} fontFamily={SANS} fontWeight={700} fill={C.indigo} {...show(on, 2.2, 0)}>
            Europe & diaspora
          </motion.text>
          {/* Maroc → Brazzaville */}
          <motion.path
            d={arc} fill="none" stroke={C.primary} strokeWidth={2.2} strokeLinecap="round"
            initial={{ pathLength: 0 }} animate={on ? { pathLength: 1 } : undefined} transition={{ duration: 1.4, ease: ease.out, delay: 0.8 }}
          />
          <motion.path
            d={arc} fill="none" stroke={C.cyan} strokeWidth={4} strokeLinecap="round" pathLength={100} strokeDasharray="6 100"
            initial={{ strokeDashoffset: 106 }} animate={on ? { strokeDashoffset: [106, 0] } : undefined}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.6, delay: 2.2, ease: "easeInOut" }}
          />
          {[
            { p: MAROC, label: "Équipe · Maroc", dx: 12, dy: 4, c: C.primary },
            { p: BRAZZA, label: "Relais · Brazzaville", dx: 12, dy: 4, c: C.orange },
          ].map(({ p, label, dx, dy, c }, i) => (
            <g key={label}>
              <motion.circle cx={p[0]} cy={p[1]} r={6} fill="none" stroke={c} animate={on ? { r: [6, 18], opacity: [0.7, 0] } : undefined} transition={{ duration: 2, repeat: Infinity, delay: i * 0.6 }} />
              <motion.circle cx={p[0]} cy={p[1]} r={6} fill={c} stroke={C.panel} strokeWidth={2} initial={{ scale: 0 }} animate={on ? { scale: 1 } : undefined} transition={{ delay: 0.5 + i * 0.6, type: "spring", stiffness: 260, damping: 14 }} />
              <motion.g {...show(on, 0.7 + i * 0.6, 6)}>
                <rect x={p[0] + dx - 4} y={p[1] + dy - 12} width={label.length * 5.2 + 14} height={18} rx={9} fill={C.panel} stroke={C.line} />
                <text x={p[0] + dx + 3} y={p[1] + dy + 0.5} fontSize={8.5} fontFamily={SANS} fontWeight={700} fill={C.ink}>{label}</text>
              </motion.g>
            </g>
          ))}
        </>
      )}
    </Svg>
  );
}

/* ── Collaboration à distance : la conversation de suivi ──────────────────── */

const CHAT: { me: boolean; text: string[] }[] = [
  { me: false, text: ["Bonjour ! Où en est", "notre site ?"] },
  { me: true, text: ["Bonjour ! La version de test", "est prête, voici le lien."] },
  { me: false, text: ["Parfait, on valide", "la page d'accueil."] },
  { me: true, text: ["C'est noté. Compte rendu", "envoyé ce soir."] },
];

export function ChatIllustration() {
  let y = 92;
  const bubbles = CHAT.map((m, i) => {
    const h = 14 + m.text.length * 13;
    const b = { ...m, y, h, i };
    y += h + (i === 1 ? 64 : 12);
    return b;
  });
  return (
    <Svg w={450} h={430} label="Illustration : conversation de suivi entre un client et l'équipe, version de test partagée et point en visioconférence" className="mx-auto max-w-[520px]">
      {(on, id) => (
        <>
          <g transform="translate(45 0)">
          {/* téléphone */}
          <motion.g {...show(on, 0)}>
            <rect x={60} y={14} width={230} height={404} rx={30} fill={C.dark} filter={`url(#sh-${id})`} />
            <rect x={68} y={22} width={214} height={388} rx={24} fill={C.alt} />
            <rect x={68} y={22} width={214} height={56} rx={24} fill={C.panel} />
            <rect x={68} y={56} width={214} height={22} fill={C.panel} />
            <line x1={68} x2={282} y1={78} y2={78} stroke={C.line} />
            <rect x={148} y={28} width={54} height={10} rx={5} fill={C.dark} />
            <circle cx={92} cy={58} r={11} fill={C.primary} />
            <text x={92} y={62} fontSize={9} fontFamily={SANS} fontWeight={800} fill="#fff" textAnchor="middle">LT</text>
            <text x={110} y={56} fontSize={10} fontFamily={SANS} fontWeight={700} fill={C.ink}>Équipe Lucane</text>
            <circle cx={113} cy={66} r={3} fill={C.primary} />
            <text x={120} y={69} fontSize={8} fontFamily={SANS} fill={C.muted}>en ligne</text>
          </motion.g>

          {bubbles.map((b) => {
            const w = 150;
            const x = b.me ? 270 - w : 80;
            return (
              <motion.g key={b.i} initial={{ opacity: 0, y: 14, scale: 0.96 }} animate={on ? { opacity: 1, y: 0, scale: 1 } : undefined} transition={{ duration: 0.5, ease: ease.out, delay: 0.6 + b.i * 0.9 }}>
                <rect x={x} y={b.y} width={w} height={b.h} rx={12} fill={b.me ? C.primary : C.panel} stroke={b.me ? "none" : C.line} />
                {b.text.map((t, k) => (
                  <text key={k} x={x + 12} y={b.y + 19 + k * 13} fontSize={9.5} fontFamily={SANS} fontWeight={500} fill={b.me ? "#fff" : C.ink}>{t}</text>
                ))}
                {b.i === 1 && (
                  <g>
                    <rect x={x} y={b.y + b.h + 6} width={w} height={46} rx={10} fill={C.panel} stroke={C.line} />
                    <rect x={x + 8} y={b.y + b.h + 14} width={44} height={30} rx={5} fill={`url(#iris-${id})`} />
                    <text x={x + 60} y={b.y + b.h + 26} fontSize={8.5} fontFamily={SANS} fontWeight={700} fill={C.ink}>Version de test</text>
                    <text x={x + 60} y={b.y + b.h + 38} fontSize={7.5} fontFamily={SANS} fill={C.primaryInk}>Ouvrir l'aperçu ↗</text>
                  </g>
                )}
                {b.me && <Check x={x + w - 18} y={b.y + b.h - 13} size={9} color="rgba(255,255,255,0.8)" strokeWidth={3} />}
              </motion.g>
            );
          })}

          {/* zone de saisie */}
          <rect x={78} y={372} width={170} height={26} rx={13} fill={C.panel} stroke={C.line} />
          <text x={92} y={389} fontSize={9} fontFamily={SANS} fill={C.faint}>Écrire un message…</text>
          <circle cx={262} cy={385} r={13} fill={C.primary} />
          <path d="M257 385 l10 -5 l-3 5 l3 5 Z" fill="#fff" />

          </g>

          {/* point visio */}
          <motion.g animate={on ? { y: [0, -6, 0] } : undefined} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
            <motion.g {...show(on, 0.4)}>
              <rect x={318} y={96} width={126} height={70} rx={10} fill={C.panel} stroke={C.line} filter={`url(#sh-${id})`} />
              <Video x={328} y={106} size={13} color={C.primaryInk} />
              <text x={346} y={116} fontSize={8.5} fontFamily={SANS} fontWeight={700} fill={C.ink}>Point d'avancement</text>
              {[C.primary, C.indigo, C.orange].map((c, i) => (
                <circle key={i} cx={340 + i * 18} cy={142} r={10} fill={c} stroke={C.panel} strokeWidth={2} />
              ))}
              <text x={396} y={146} fontSize={8} fontFamily={SANS} fill={C.muted}>Visio</text>
            </motion.g>
          </motion.g>
          {/* réponse rapide */}
          <motion.g animate={on ? { y: [0, 5, 0] } : undefined} transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}>
            <motion.g {...show(on, 0.7)}>
              <rect x={6} y={300} width={96} height={24} rx={12} fill={C.panel} stroke={C.line} filter={`url(#sh-${id})`} />
              <circle cx={20} cy={312} r={4} fill={C.primary} />
              <text x={29} y={316} fontSize={8.5} fontFamily={SANS} fontWeight={700} fill={C.ink}>Réponse &lt; 24 h</text>
            </motion.g>
          </motion.g>
        </>
      )}
    </Svg>
  );
}

/* ── Valeurs : une petite scène par valeur ────────────────────────────────── */

function ValueFrame({ label, children }: { label: string; children: (on: boolean, id: string) => ReactNode }) {
  return (
    <Svg w={240} h={120} label={label}>
      {children}
    </Svg>
  );
}

function Innovation() {
  return (
    <ValueFrame label="Illustration : une ampoule entourée de circuits">
      {(on) => (
        <>
          {[[40, 30, 100, 60], [40, 90, 100, 60], [200, 30, 140, 60], [200, 90, 140, 60]].map(([x1, y1, x2, y2], i) => (
            <g key={i}>
              <path d={`M${x1} ${y1} H${(x1 + x2) / 2} V${y2} H${x2}`} fill="none" stroke={C.line} strokeWidth={1.6} />
              <motion.path
                d={`M${x1} ${y1} H${(x1 + x2) / 2} V${y2} H${x2}`} fill="none" stroke={C.primary} strokeWidth={2} pathLength={100} strokeDasharray="14 100"
                animate={on ? { strokeDashoffset: [114, 0] } : undefined} transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.4, repeatDelay: 0.6 }}
              />
              <circle cx={x1} cy={y1} r={4} fill={C.panel} stroke={C.faint} />
            </g>
          ))}
          <motion.circle cx={120} cy={60} r={30} fill={C.primary} animate={on ? { opacity: [0.12, 0.3, 0.12] } : undefined} transition={{ duration: 2, repeat: Infinity }} />
          <circle cx={120} cy={60} r={22} fill={C.panel} stroke={C.line} />
          <Lightbulb x={108} y={48} size={24} color={C.primaryInk} />
        </>
      )}
    </ValueFrame>
  );
}

function Collaboration() {
  const pts: [number, number, string][] = [[60, 60, C.primary], [120, 30, C.indigo], [180, 60, C.orange], [120, 92, C.cyan]];
  return (
    <ValueFrame label="Illustration : des membres reliés qui échangent">
      {(on) => (
        <>
          {pts.map(([x1, y1], i) => pts.slice(i + 1).map(([x2, y2], j) => (
            <g key={`${i}-${j}`}>
              <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={C.line} strokeWidth={1.4} />
              <motion.circle r={2.6} fill={C.primary} animate={on ? { cx: [x1, x2], cy: [y1, y2], opacity: [0, 1, 0] } : undefined} transition={{ duration: 1.8, repeat: Infinity, delay: (i + j) * 0.35 }} />
            </g>
          )))}
          {pts.map(([x, y, c], i) => (
            <motion.g key={i} initial={{ scale: 0 }} animate={on ? { scale: 1 } : undefined} transition={{ delay: 0.1 + i * 0.1, type: "spring", stiffness: 260, damping: 15 }}>
              <circle cx={x} cy={y} r={14} fill={c} stroke={C.panel} strokeWidth={3} />
              <circle cx={x} cy={y - 3} r={4} fill="#fff" opacity={0.9} />
              <path d={`M${x - 7} ${y + 8} a7 6 0 0 1 14 0`} fill="#fff" opacity={0.9} />
            </motion.g>
          ))}
        </>
      )}
    </ValueFrame>
  );
}

function Reliability() {
  return (
    <ValueFrame label="Illustration : un bouclier et des engagements cochés">
      {(on) => (
        <>
          <ShieldCheck x={24} y={26} size={64} color={C.primaryInk} strokeWidth={1.4} />
          {["Délais tenus", "Contrat écrit", "Code remis"].map((t, i) => (
            <motion.g key={t} initial={{ opacity: 0, x: 10 }} animate={on ? { opacity: 1, x: 0 } : undefined} transition={{ delay: 0.3 + i * 0.25, duration: 0.5 }}>
              <rect x={104} y={22 + i * 28} width={118} height={22} rx={11} fill={C.panel} stroke={C.line} />
              <circle cx={117} cy={33 + i * 28} r={6} fill={C.primary} />
              <Check x={113} y={29 + i * 28} size={8} color="#fff" strokeWidth={3.5} />
              <text x={129} y={37 + i * 28} fontSize={9} fontFamily={SANS} fontWeight={600} fill={C.ink}>{t}</text>
            </motion.g>
          ))}
        </>
      )}
    </ValueFrame>
  );
}

function Impact() {
  return (
    <ValueFrame label="Illustration : des ondes qui se propagent depuis un point">
      {(on) => (
        <>
          {[0, 1, 2, 3].map((i) => (
            <motion.circle
              key={i} cx={70} cy={64} r={12} fill="none" stroke={C.primary} strokeWidth={1.5}
              animate={on ? { r: [12, 56], opacity: [0.7, 0] } : undefined}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.75, ease: "easeOut" }}
            />
          ))}
          <circle cx={70} cy={64} r={12} fill={C.primary} />
          <TrendingUp x={63} y={57} size={14} color="#fff" />
          {[[150, 32, "Visibilité"], [168, 64, "Clients"], [150, 96, "Temps gagné"]].map(([x, y, t], i) => (
            <motion.g key={t as string} initial={{ opacity: 0 }} animate={on ? { opacity: 1 } : undefined} transition={{ delay: 0.6 + i * 0.3 }}>
              <circle cx={(x as number) - 10} cy={(y as number) - 3} r={3} fill={[C.indigo, C.orange, C.cyan][i]} />
              <text x={x as number} y={y as number} fontSize={9.5} fontFamily={SANS} fontWeight={700} fill={C.ink}>{t as string}</text>
            </motion.g>
          ))}
        </>
      )}
    </ValueFrame>
  );
}

function Passion() {
  const d = "M10 64 H70 L82 40 L96 92 L110 22 L124 80 L134 64 H230";
  return (
    <ValueFrame label="Illustration : un cœur et une ligne de pulsation">
      {(on) => (
        <>
          <path d={d} fill="none" stroke={C.line} strokeWidth={2} />
          <motion.path
            d={d} fill="none" stroke={C.orange} strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round" pathLength={100} strokeDasharray="30 100"
            animate={on ? { strokeDashoffset: [130, 0] } : undefined} transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
          />
          <motion.g animate={on ? { scale: [1, 1.18, 1, 1.12, 1] } : undefined} transition={{ duration: 1.8, repeat: Infinity }}>
            <circle cx={190} cy={36} r={18} fill={C.orange} opacity={0.15} />
            <Heart x={179} y={25} size={22} color={C.orange} fill={C.orange} />
          </motion.g>
        </>
      )}
    </ValueFrame>
  );
}

function Excellence() {
  return (
    <ValueFrame label="Illustration : une gemme et des contrôles de qualité réussis">
      {(on) => (
        <>
          <motion.g animate={on ? { rotate: [0, 8, -8, 0] } : undefined} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
            <circle cx={60} cy={60} r={30} fill={C.indigo} opacity={0.12} />
            <Gem x={40} y={40} size={40} color={C.indigo} strokeWidth={1.5} />
          </motion.g>
          {["Tests", "Accessibilité", "Performance"].map((t, i) => (
            <g key={t}>
              <text x={112} y={34 + i * 26} fontSize={9} fontFamily={SANS} fontWeight={600} fill={C.muted}>{t}</text>
              <rect x={112} y={39 + i * 26} width={110} height={5} rx={2.5} fill={C.line} />
              <motion.rect
                x={112} y={39 + i * 26} width={110} height={5} rx={2.5} fill={[C.primary, C.indigo, C.orange][i]}
                initial={{ scaleX: 0 }} animate={on ? { scaleX: 1 } : undefined} style={{ originX: 0 }}
                transition={{ duration: 1.2, ease: ease.out, delay: 0.3 + i * 0.2 }}
              />
            </g>
          ))}
        </>
      )}
    </ValueFrame>
  );
}

const VALUE_SCENES: Record<string, () => ReactNode> = {
  Innovation,
  Collaboration,
  Fiabilité: Reliability,
  Impact,
  Passion,
  Excellence,
};

export function ValueScene({ title }: { title: string }) {
  const S = VALUE_SCENES[title];
  return S ? <S /> : null;
}
