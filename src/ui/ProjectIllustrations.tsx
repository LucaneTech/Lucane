import { useId, useRef, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { BarChart3, Clock3, Globe2, Headphones, Home, PhoneCall, PhoneOff, Search, Settings, Users } from "lucide-react";
import { ease } from "../motion/presets";

/**
 * Illustrations animées des projets qu'on ne peut pas afficher en direct dans un cadre
 * (l'application refuse l'iframe, ou c'est ce site lui-même). Format 16:10, couleurs du thème.
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
  green: "#22c55e",
};
const SANS = "Inter Tight, system-ui, sans-serif";

function Frame({ label, children }: { label: string; children: (on: boolean, id: string) => ReactNode }) {
  const ref = useRef<SVGSVGElement>(null);
  const on = useInView(ref, { once: true, amount: 0.3 });
  const id = useId().replace(/:/g, "");
  return (
    <svg ref={ref} viewBox="0 0 640 400" className="block aspect-[16/10] w-full bg-canvas-alt" role="img" aria-label={label}>
      <defs>
        <filter id={`sh-${id}`} x="-50%" y="-60%" width="200%" height="260%">
          <feDropShadow dx="0" dy="10" stdDeviation="12" floodColor="#0b1a2a" floodOpacity="0.16" />
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

const rise = (on: boolean, delay = 0, y = 14) => ({
  initial: { opacity: 0, y },
  animate: on ? { opacity: 1, y: 0 } : undefined,
  transition: { duration: 0.8, ease: ease.out, delay },
});

/* ── Lucane CRM : tableau de téléprospection + softphone ──────────────────── */

const CONTACTS = [
  { name: "Awa Koné", country: "Côte d'Ivoire", status: "Rappeler", c: C.orange },
  { name: "Jean Malonga", country: "Congo", status: "Intéressé", c: C.green },
  { name: "Sophie Martin", country: "France", status: "Nouveau", c: C.indigo },
  { name: "Youssef Amrani", country: "Maroc", status: "Intéressé", c: C.green },
  { name: "Fatou Diop", country: "Sénégal", status: "Nouveau", c: C.indigo },
];

function CrmIllustration() {
  return (
    <Frame label="Illustration : l'application Lucane CRM, liste de prospects et softphone pendant un appel">
      {(on, id) => (
        <>
          {/* fenêtre de l'application */}
          <motion.g {...rise(on, 0)}>
            <rect x={28} y={26} width={584} height={348} rx={12} fill={C.panel} stroke={C.line} filter={`url(#sh-${id})`} />
            {/* barre latérale */}
            <rect x={28} y={26} width={64} height={348} rx={12} fill={C.alt} />
            <rect x={80} y={26} width={12} height={348} fill={C.alt} />
            <rect x={44} y={42} width={32} height={32} rx={9} fill={C.primary} />
            <text x={60} y={63} fontSize={13} fontFamily={SANS} fontWeight={800} fill="#fff" textAnchor="middle">L</text>
            {[Home, Users, PhoneCall, BarChart3, Settings].map((Icon, i) => (
              <g key={i}>
                {i === 1 && <rect x={46} y={92 + i * 44} width={28} height={28} rx={8} fill={C.primary} opacity={0.15} />}
                <Icon x={51} y={97 + i * 44} size={18} color={i === 1 ? C.primaryInk : C.faint} />
              </g>
            ))}
            {/* en-tête */}
            <text x={112} y={60} fontSize={17} fontFamily={SANS} fontWeight={800} fill={C.ink}>Prospects</text>
            <rect x={112} y={72} width={180} height={26} rx={13} fill={C.alt} />
            <Search x={122} y={79} size={12} color={C.faint} />
            <text x={140} y={89} fontSize={10} fontFamily={SANS} fill={C.faint}>Rechercher un contact…</text>
            {/* pays joignables */}
            <rect x={306} y={72} width={120} height={26} rx={13} fill={C.primary} fillOpacity={0.12} />
            <Globe2 x={316} y={79} size={12} color={C.primaryInk} />
            <text x={334} y={89} fontSize={10} fontFamily={SANS} fontWeight={700} fill={C.primaryInk}>200+ pays</text>
          </motion.g>

          {/* tableau des contacts */}
          <motion.g {...rise(on, 0.2)}>
            {["Contact", "Pays", "Statut"].map((h, i) => (
              <text key={h} x={[112, 236, 330][i]} y={124} fontSize={9.5} fontFamily={SANS} fontWeight={700} fill={C.faint}>{h}</text>
            ))}
            <line x1={112} x2={420} y1={132} y2={132} stroke={C.line} />
          </motion.g>
          {CONTACTS.map((r, i) => {
            const y = 140 + i * 44;
            return (
              <motion.g key={r.name} {...rise(on, 0.3 + i * 0.1, 8)}>
                {i === 1 && <rect x={104} y={y - 2} width={322} height={40} rx={8} fill={C.primary} fillOpacity={0.07} />}
                <circle cx={126} cy={y + 18} r={13} fill={[C.orange, C.primary, C.indigo, C.cyan, C.orange][i]} opacity={0.85} />
                <text x={126} y={y + 22} fontSize={10} fontFamily={SANS} fontWeight={800} fill="#fff" textAnchor="middle">
                  {r.name.split(" ").map((w) => w[0]).join("")}
                </text>
                <text x={146} y={y + 22} fontSize={11} fontFamily={SANS} fontWeight={600} fill={C.ink}>{r.name}</text>
                <text x={236} y={y + 22} fontSize={10.5} fontFamily={SANS} fill={C.muted}>{r.country}</text>
                <rect x={330} y={y + 9} width={72} height={18} rx={9} fill={r.c} fillOpacity={0.14} />
                <text x={366} y={y + 21.5} fontSize={9} fontFamily={SANS} fontWeight={700} fill={r.c} textAnchor="middle">{r.status}</text>
                <line x1={112} x2={420} y1={y + 40} y2={y + 40} stroke={C.line} opacity={0.6} />
              </motion.g>
            );
          })}

          {/* softphone */}
          <motion.g initial={{ opacity: 0, x: 30 }} animate={on ? { opacity: 1, x: 0 } : undefined} transition={{ duration: 0.9, ease: ease.out, delay: 0.5 }}>
            <rect x={440} y={58} width={156} height={300} rx={16} fill={C.panel} stroke={C.line} filter={`url(#sh-${id})`} />
            <Headphones x={456} y={74} size={14} color={C.primaryInk} />
            <text x={476} y={85} fontSize={10.5} fontFamily={SANS} fontWeight={700} fill={C.ink}>Softphone</text>
            <circle cx={584} cy={81} r={4} fill={C.green} />
            {/* contact en appel */}
            <circle cx={518} cy={136} r={30} fill={C.primary} />
            <text x={518} y={142} fontSize={16} fontFamily={SANS} fontWeight={800} fill="#fff" textAnchor="middle">JM</text>
            {[0, 1].map((k) => (
              <motion.circle
                key={k} cx={518} cy={136} r={30} fill="none" stroke={C.primary} strokeWidth={2}
                animate={on ? { r: [30, 46], opacity: [0.6, 0] } : undefined}
                transition={{ duration: 1.8, repeat: Infinity, delay: k * 0.9, ease: "easeOut" }}
              />
            ))}
            <text x={518} y={190} fontSize={12} fontFamily={SANS} fontWeight={700} fill={C.ink} textAnchor="middle">Jean Malonga</text>
            <text x={518} y={205} fontSize={9.5} fontFamily={SANS} fill={C.muted} textAnchor="middle">+242 · Brazzaville</text>
            {/* onde sonore */}
            {Array.from({ length: 15 }, (_, k) => (
              <motion.rect
                key={k} x={466 + k * 7} y={224} width={3.5} height={20} rx={1.75} fill={C.primary}
                style={{ originY: 0.5 }}
                animate={on ? { scaleY: [0.25, 0.4 + ((k * 37) % 60) / 100, 0.25] } : undefined}
                transition={{ duration: 0.7 + (k % 4) * 0.15, repeat: Infinity, ease: "easeInOut", delay: k * 0.05 }}
              />
            ))}
            <Clock3 x={492} y={258} size={11} color={C.muted} />
            <text x={508} y={267} fontSize={10.5} fontFamily={SANS} fontWeight={600} fill={C.muted}>Appel en cours</text>
            {/* raccrocher */}
            <circle cx={518} cy={312} r={22} fill="#ef4444" />
            <PhoneOff x={508} y={302} size={20} color="#fff" />
          </motion.g>

          {/* journal d'appels automatique */}
          <motion.g
            initial={{ opacity: 0, y: 10 }}
            animate={on ? { opacity: [0, 1, 1, 0], y: [10, 0, 0, 10] } : undefined}
            transition={{ duration: 4, times: [0, 0.12, 0.85, 1], repeat: Infinity, repeatDelay: 1, delay: 2 }}
          >
            <rect x={236} y={334} width={190} height={26} rx={13} fill={C.panel} stroke={C.line} filter={`url(#sh-${id})`} />
            <circle cx={252} cy={347} r={4} fill={C.green} />
            <text x={262} y={351} fontSize={10} fontFamily={SANS} fontWeight={700} fill={C.ink}>Appel enregistré au journal</text>
          </motion.g>
        </>
      )}
    </Frame>
  );
}

/* ── Lucane Tech : le site de l'équipe, en miniature ──────────────────────── */

function AgencyIllustration() {
  // points du logo en particules (nuage simplifié, stable d'un rendu à l'autre)
  const dots = Array.from({ length: 90 }, (_, i) => {
    const a = (i * 137.5 * Math.PI) / 180;
    const r = 54 + ((i * 53) % 40);
    return { x: 470 + Math.cos(a) * r, y: 210 + Math.sin(a) * r, c: [C.cyan, C.indigo, C.orange][i % 3], d: (i % 10) * 0.12 };
  });
  return (
    <Frame label="Illustration : la page d'accueil du site Lucane Tech, avec son logo en particules">
      {(on, id) => (
        <>
          <motion.g {...rise(on, 0)}>
            <rect x={28} y={26} width={584} height={348} rx={12} fill={C.panel} stroke={C.line} filter={`url(#sh-${id})`} />
            {/* barre de navigation en pilule */}
            <image href="/favicon.png" x={50} y={46} width={26} height={26} />
            <text x={82} y={64} fontSize={14} fontFamily={SANS} fontWeight={800} fill={C.primaryInk}>Lucane</text>
            <rect x={196} y={44} width={250} height={30} rx={15} fill={C.alt} />
            {["Accueil", "Services", "Réalisations", "À propos"].map((l, i) => (
              <g key={l}>
                {i === 0 && <rect x={202} y={48} width={56} height={22} rx={11} fill={C.primary} />}
                <text x={230 + i * 62} y={63} fontSize={9.5} fontFamily={SANS} fontWeight={600} fill={i === 0 ? "#fff" : C.muted} textAnchor="middle">{l}</text>
              </g>
            ))}
            <rect x={482} y={44} width={110} height={30} rx={15} fill={C.primary} />
            <text x={537} y={63} fontSize={10} fontFamily={SANS} fontWeight={700} fill="#fff" textAnchor="middle">Démarrer un projet</text>
          </motion.g>

          {/* titre */}
          <motion.text x={56} y={146} fontSize={30} fontFamily={SANS} fontWeight={300} fill={C.ink} {...rise(on, 0.2)}>Nous construisons</motion.text>
          <motion.text x={56} y={184} fontSize={30} fontFamily={SANS} fontWeight={300} fill={C.ink} {...rise(on, 0.3)}>des</motion.text>
          <motion.text x={56} y={222} fontSize={30} fontFamily={SANS} fontWeight={800} fill={`url(#iris-${id})`} {...rise(on, 0.4)}>plateformes</motion.text>
          <motion.text x={56} y={260} fontSize={30} fontFamily={SANS} fontWeight={800} fill={C.ink} {...rise(on, 0.5)}>qui propulsent.</motion.text>
          <motion.g {...rise(on, 0.7)}>
            <rect x={56} y={282} width={220} height={6} rx={3} fill={C.faint} opacity={0.6} />
            <rect x={56} y={294} width={170} height={6} rx={3} fill={C.faint} opacity={0.6} />
            <rect x={56} y={318} width={118} height={32} rx={16} fill={C.primary} />
            <text x={115} y={338} fontSize={10.5} fontFamily={SANS} fontWeight={700} fill="#fff" textAnchor="middle">Démarrer un projet</text>
            <rect x={184} y={318} width={118} height={32} rx={16} fill="none" stroke={C.line} />
            <text x={243} y={338} fontSize={10.5} fontFamily={SANS} fontWeight={600} fill={C.ink} textAnchor="middle">Écrire sur WhatsApp</text>
          </motion.g>

          {/* logo en particules */}
          <circle cx={470} cy={210} r={92} fill={C.primary} opacity={0.08} />
          {dots.map((p, i) => (
            <motion.circle
              key={i} cx={p.x} cy={p.y} r={2.4} fill={p.c}
              initial={{ opacity: 0, scale: 0 }}
              animate={on ? { opacity: [0.35, 1, 0.35], scale: 1 } : undefined}
              transition={{ opacity: { duration: 2.4, repeat: Infinity, delay: p.d }, scale: { duration: 0.6, delay: 0.3 + p.d } }}
            />
          ))}
          <motion.g animate={on ? { y: [0, -8, 0] } : undefined} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
            <motion.image
              href="/favicon.png" x={430} y={170} width={80} height={80}
              initial={{ opacity: 0, scale: 0.6 }} animate={on ? { opacity: 1, scale: 1 } : undefined}
              transition={{ duration: 1, ease: ease.out, delay: 0.4 }}
            />
          </motion.g>
          {/* pilule flottante */}
          <motion.g animate={on ? { y: [0, 6, 0] } : undefined} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}>
            <motion.g {...rise(on, 0.9)}>
              <rect x={500} y={292} width={96} height={30} rx={15} fill={C.panel} stroke={C.line} filter={`url(#sh-${id})`} />
              <text x={516} y={311} fontSize={11} fontFamily={SANS} fontWeight={800} fill={C.ink}>24 h</text>
              <text x={544} y={311} fontSize={9} fontFamily={SANS} fill={C.muted}>réponse</text>
            </motion.g>
          </motion.g>
        </>
      )}
    </Frame>
  );
}

const ILLUSTRATIONS = { crm: CrmIllustration, agency: AgencyIllustration } as const;
export type ProjectIllustrationKey = keyof typeof ILLUSTRATIONS;

export default function ProjectIllustration({ kind }: { kind: ProjectIllustrationKey }) {
  const S = ILLUSTRATIONS[kind];
  return <S />;
}
