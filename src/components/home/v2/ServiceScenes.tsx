import { useId, type ReactNode } from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  Bell,
  Box,
  Check,
  CheckCircle2,
  Cpu,
  Database,
  FileText,
  FlaskConical,
  GitBranch,
  Hammer,
  Home,
  Laptop,
  Lock,
  Mail,
  Monitor,
  MousePointer2,
  Network,
  PenTool,
  Play,
  Rocket,
  Search,
  Settings,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Square,
  TrendingUp,
  Type,
  User,
  WifiOff,
  Zap,
} from "lucide-react";
import { ease } from "../../../motion/presets";

/**
 * Illustrations animées des 7 expertises (section « Ce que nous faisons » de l'accueil).
 * Dessinées en SVG avec les couleurs du thème : elles suivent le mode clair / sombre,
 * restent nettes à toutes les tailles et ne pèsent presque rien.
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
  dark: "#0f1117",
  darkLine: "rgba(255,255,255,0.08)",
};
const MONO = "JetBrains Mono, ui-monospace, monospace";
const SANS = "Inter Tight, system-ui, sans-serif";

const appear = (delay = 0, y = 12) => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: ease.out, delay },
});
const grow = (delay = 0) => ({
  initial: { scaleX: 0 },
  animate: { scaleX: 1 },
  style: { originX: 0 },
  transition: { duration: 0.7, ease: ease.out, delay },
});

/* ── Briques communes ─────────────────────────────────────────────────────── */

function Scene({ label, children }: { label: string; children: (id: string) => ReactNode }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 480 300" className="h-full w-full" role="img" aria-label={label} preserveAspectRatio="xMidYMid meet">
      <defs>
        <filter id={`sh-${id}`} x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#0b1a2a" floodOpacity="0.14" />
        </filter>
        <linearGradient id={`iris-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={C.cyan} />
          <stop offset="55%" stopColor={C.indigo} />
          <stop offset="100%" stopColor={C.orange} />
        </linearGradient>
        <linearGradient id={`area-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={C.cyan} stopOpacity="0.45" />
          <stop offset="100%" stopColor={C.cyan} stopOpacity="0" />
        </linearGradient>
        <pattern id={`dots-${id}`} width="14" height="14" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1" fill={C.faint} opacity="0.45" />
        </pattern>
      </defs>
      {children(id)}
    </svg>
  );
}

/** Fenêtre d'application : barre de titre à trois points. */
function Win({
  x, y, w, h, id, title, dark = false, delay = 0, children,
}: { x: number; y: number; w: number; h: number; id: string; title?: string; dark?: boolean; delay?: number; children?: ReactNode }) {
  return (
    <motion.g {...appear(delay, 16)}>
      <rect x={x} y={y} width={w} height={h} rx={8} fill={dark ? C.dark : C.panel} stroke={dark ? C.darkLine : C.line} filter={`url(#sh-${id})`} />
      <line x1={x} x2={x + w} y1={y + 22} y2={y + 22} stroke={dark ? C.darkLine : C.line} />
      {["#ff5f57", "#febc2e", "#28c840"].map((c, i) => (
        <circle key={c} cx={x + 12 + i * 9} cy={y + 11} r={3} fill={c} />
      ))}
      {title && (
        <text x={x + 46} y={y + 14} fontSize={7} fontFamily={MONO} fill={dark ? "rgba(255,255,255,0.55)" : C.muted}>
          {title}
        </text>
      )}
      {children}
    </motion.g>
  );
}

function Bar({ x, y, w, h = 5, fill = C.line, delay = 0 }: { x: number; y: number; w: number; h?: number; fill?: string; delay?: number }) {
  return <motion.rect x={x} y={y} width={w} height={h} rx={h / 2} fill={fill} {...grow(delay)} />;
}

/** Pastille texte (étiquette flottante). */
function Chip({ x, y, w, label, icon, delay = 0, float = 0 }: { x: number; y: number; w: number; label: string; icon?: ReactNode; delay?: number; float?: number }) {
  return (
    <motion.g {...appear(delay)}>
      <motion.g animate={float ? { y: [0, -float, 0] } : undefined} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}>
        <rect x={x} y={y} width={w} height={20} rx={10} fill={C.panel} stroke={C.line} />
        {icon}
        <text x={x + (icon ? 24 : 10)} y={y + 13} fontSize={7.5} fontFamily={SANS} fontWeight={600} fill={C.ink}>
          {label}
        </text>
      </motion.g>
    </motion.g>
  );
}

const Cursor = ({ fill = C.ink }: { fill?: string }) => (
  <path d="M0 0 L0 14 L4 10.5 L7 16.5 L9.5 15.4 L6.6 9.6 L11.5 9.6 Z" fill={fill} stroke={C.panel} strokeWidth={1.2} strokeLinejoin="round" />
);

/* ── 01 · Développement web ───────────────────────────────────────────────── */

function WebScene() {
  const code: [string, string][][] = [
    [["<", C.faint], ["Accueil", "#7dd3fc"], [">", C.faint]],
    [["  <", C.faint], ["Hero", C.cyan], [" titre", "#c4b5fd"], ["=", C.faint], ['"Bienvenue"', "#fdba74"], [" />", C.faint]],
    [["  <", C.faint], ["Services", C.cyan], [" liste", "#c4b5fd"], ["={", C.faint], ["offres", "#e5e7eb"], ["} />", C.faint]],
    [["  <", C.faint], ["Contact", C.cyan], [" />", C.faint]],
    [["</", C.faint], ["Accueil", "#7dd3fc"], [">", C.faint]],
  ];
  return (
    <Scene label="Illustration : un site web qui se construit dans le navigateur, son code et son score de performance">
      {(id) => (
        <>
          <Win x={14} y={16} w={318} h={252} id={id}>
            <rect x={70} y={20} width={196} height={14} rx={7} fill={C.alt} />
            <Lock x={77} y={23} size={8} color={C.primaryInk} />
            <text x={89} y={30} fontSize={7.5} fontFamily={MONO} fill={C.muted}>votre-entreprise.com</text>
            {/* navigation */}
            <motion.g {...appear(0.25)}>
              <circle cx={32} cy={54} r={6} fill={C.primary} />
              <rect x={42} y={51} width={30} height={6} rx={3} fill={C.ink} />
              {[176, 200, 224].map((lx) => <rect key={lx} x={lx} y={52} width={18} height={4} rx={2} fill={C.faint} />)}
              <rect x={258} y={46} width={60} height={15} rx={7.5} fill={C.ink} />
              <text x={288} y={56} fontSize={7} fontFamily={SANS} fontWeight={700} fill={C.panel} textAnchor="middle">Contact</text>
            </motion.g>
            {/* hero */}
            <Bar x={28} y={78} w={150} h={12} fill={C.ink} delay={0.4} />
            <Bar x={28} y={96} w={104} h={12} fill={C.ink} delay={0.5} />
            <Bar x={136} y={96} w={46} h={12} fill={`url(#iris-${id})`} delay={0.6} />
            <Bar x={28} y={118} w={140} h={4} fill={C.faint} delay={0.7} />
            <Bar x={28} y={127} w={118} h={4} fill={C.faint} delay={0.75} />
            <motion.g {...appear(0.85)}>
              <rect x={28} y={142} width={68} height={19} rx={9.5} fill={C.primary} />
              <text x={62} y={154.5} fontSize={7} fontFamily={SANS} fontWeight={700} fill="#fff" textAnchor="middle">Devis gratuit</text>
              <rect x={102} y={142} width={56} height={19} rx={9.5} fill="none" stroke={C.line} />
              <text x={130} y={154.5} fontSize={7} fontFamily={SANS} fill={C.muted} textAnchor="middle">Nos offres</text>
            </motion.g>
            <motion.g initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: ease.out, delay: 0.5 }}>
              <rect x={194} y={72} width={124} height={92} rx={6} fill={`url(#iris-${id})`} opacity={0.9} />
              <circle cx={290} cy={94} r={9} fill="#fff" opacity={0.85} />
              <path d="M194 164 L236 116 L262 142 L280 124 L318 164 Z" fill="#fff" opacity={0.35} />
            </motion.g>
            {/* cartes */}
            {[28, 126, 224].map((cx, i) => (
              <motion.g key={cx} {...appear(1 + i * 0.12)}>
                <rect x={cx} y={180} width={90} height={74} rx={6} fill={C.panel} stroke={C.line} />
                <rect x={cx + 9} y={189} width={15} height={15} rx={4} fill={[C.primary, C.indigo, C.orange][i]} opacity={0.9} />
                <rect x={cx + 9} y={212} width={58} height={5} rx={2.5} fill={C.ink} />
                <rect x={cx + 9} y={223} width={70} height={3.5} rx={1.75} fill={C.faint} />
                <rect x={cx + 9} y={231} width={52} height={3.5} rx={1.75} fill={C.faint} />
              </motion.g>
            ))}
          </Win>

          {/* éditeur de code */}
          <Win x={262} y={150} w={206} h={130} id={id} dark title="Accueil.tsx" delay={0.6}>
            {code.map((line, i) => (
              <motion.text
                key={i}
                x={274}
                y={190 + i * 15}
                fontSize={8}
                fontFamily={MONO}
                xmlSpace="preserve"
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + i * 0.35, duration: 0.4 }}
              >
                <tspan fill="rgba(255,255,255,0.25)">{i + 1}  </tspan>
                {line.map(([t, c], j) => <tspan key={j} fill={c}>{t}</tspan>)}
              </motion.text>
            ))}
            <motion.rect x={274} y={259} width={5} height={10} fill={C.cyan} animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity }} />
          </Win>

          {/* score de performance */}
          <motion.g {...appear(0.9)}>
            <circle cx={408} cy={68} r={36} fill={C.panel} stroke={C.line} filter={`url(#sh-${id})`} />
            <circle cx={408} cy={68} r={25} fill="none" stroke={C.line} strokeWidth={5} />
            <motion.circle
              cx={408} cy={68} r={25} fill="none" stroke={C.primary} strokeWidth={5} strokeLinecap="round"
              transform="rotate(-90 408 68)"
              initial={{ pathLength: 0 }} animate={{ pathLength: 0.92 }} transition={{ duration: 1.6, ease: ease.out, delay: 1.1 }}
            />
            <text x={408} y={72} fontSize={12} fontFamily={SANS} fontWeight={800} fill={C.ink} textAnchor="middle">≥ 90</text>
            <text x={408} y={118} fontSize={7.5} fontFamily={SANS} fontWeight={600} fill={C.muted} textAnchor="middle">Performance</text>
          </motion.g>
          <Chip x={370} y={126} w={78} label="SEO prêt" delay={1.3} float={3} icon={<Check x={378} y={131} size={10} color={C.primaryInk} />} />

          {/* curseur qui clique sur « Devis gratuit » */}
          <motion.g
            initial={{ x: 300, y: 260 }}
            animate={{ x: [300, 70, 70, 70, 300], y: [260, 152, 152, 152, 260], scale: [1, 1, 0.82, 1, 1] }}
            transition={{ duration: 6, repeat: Infinity, times: [0, 0.35, 0.42, 0.5, 1], ease: "easeInOut", delay: 1.6 }}
          >
            <Cursor />
          </motion.g>
        </>
      )}
    </Scene>
  );
}

/* ── 02 · Développement mobile ────────────────────────────────────────────── */

function MobileScene() {
  const PHONE = "#14161c";
  return (
    <Scene label="Illustration : une application mobile avec notification, disponible sur iPhone et Android">
      {(id) => (
        <>
          {/* téléphone de fond (Android) */}
          <motion.g initial={{ opacity: 0, rotate: 0 }} animate={{ opacity: 0.85, rotate: 9 }} style={{ originX: "320px", originY: "150px" }} transition={{ duration: 1.1, ease: ease.out, delay: 0.3 }}>
            <rect x={262} y={36} width={118} height={232} rx={18} fill={PHONE} />
            <rect x={268} y={42} width={106} height={220} rx={14} fill={C.alt} />
            <rect x={278} y={60} width={86} height={50} rx={8} fill={C.indigo} opacity={0.85} />
            {[122, 146, 170, 194].map((ly) => (
              <g key={ly}>
                <circle cx={288} cy={ly + 8} r={7} fill={C.line} />
                <rect x={300} y={ly + 4} width={54} height={4} rx={2} fill={C.faint} />
                <rect x={300} y={ly + 11} width={36} height={3} rx={1.5} fill={C.line} />
              </g>
            ))}
          </motion.g>

          {/* téléphone principal */}
          <motion.g initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: ease.out }}>
            <rect x={168} y={12} width={142} height={278} rx={22} fill={PHONE} filter={`url(#sh-${id})`} />
            <rect x={174} y={18} width={130} height={266} rx={17} fill={C.panel} />
            <rect x={219} y={22} width={40} height={9} rx={4.5} fill={PHONE} />
            <text x={184} y={30} fontSize={6.5} fontFamily={SANS} fontWeight={700} fill={C.ink}>9:41</text>
            <text x={184} y={52} fontSize={10} fontFamily={SANS} fontWeight={800} fill={C.ink}>Bonjour, Awa</text>
            <text x={184} y={62} fontSize={6.5} fontFamily={SANS} fill={C.muted}>Votre commande avance</text>
            {/* carte de suivi */}
            <motion.g {...appear(0.4)}>
              <rect x={182} y={70} width={114} height={56} rx={10} fill={C.primary} />
              <text x={191} y={85} fontSize={7} fontFamily={SANS} fontWeight={700} fill="#fff">Commande en cours</text>
              <text x={191} y={95} fontSize={6} fontFamily={SANS} fill="rgba(255,255,255,0.75)">Livraison prévue à 14 h 30</text>
              <rect x={191} y={107} width={96} height={5} rx={2.5} fill="rgba(255,255,255,0.3)" />
              <motion.rect x={191} y={107} width={96} height={5} rx={2.5} fill="#fff" initial={{ scaleX: 0 }} animate={{ scaleX: 0.68 }} style={{ originX: 0 }} transition={{ duration: 1.6, ease: ease.out, delay: 0.8 }} />
            </motion.g>
            <text x={184} y={142} fontSize={7.5} fontFamily={SANS} fontWeight={700} fill={C.ink}>Récents</text>
            {[150, 180, 210].map((ly, i) => (
              <motion.g key={ly} {...appear(0.6 + i * 0.12, 8)}>
                <rect x={182} y={ly} width={114} height={25} rx={7} fill={C.alt} />
                <circle cx={195} cy={ly + 12.5} r={7.5} fill={[C.indigo, C.orange, C.cyan][i]} />
                <rect x={208} y={ly + 7} width={52} height={4} rx={2} fill={C.ink} opacity={0.8} />
                <rect x={208} y={ly + 14} width={36} height={3} rx={1.5} fill={C.faint} />
                <rect x={272} y={ly + 9} width={16} height={7} rx={3.5} fill={C.line} />
              </motion.g>
            ))}
            {/* barre d'onglets */}
            <line x1={174} x2={304} y1={248} y2={248} stroke={C.line} />
            {[Home, Search, ShoppingBag, User].map((Icon, i) => (
              <Icon key={i} x={188 + i * 28} y={256} size={12} color={i === 0 ? C.primaryInk : C.faint} strokeWidth={2.2} />
            ))}
            <rect x={218} y={276} width={42} height={3} rx={1.5} fill={C.faint} />
          </motion.g>

          {/* notification qui arrive */}
          <motion.g
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: [0, 1, 1, 0], y: [-40, 0, 0, -40] }}
            transition={{ duration: 5, times: [0, 0.15, 0.8, 1], repeat: Infinity, repeatDelay: 1, delay: 1.2, ease: "easeOut" }}
          >
            <rect x={148} y={34} width={182} height={36} rx={10} fill={C.panel} stroke={C.line} filter={`url(#sh-${id})`} />
            <rect x={156} y={42} width={20} height={20} rx={6} fill={C.primary} />
            <Bell x={161} y={47} size={10} color="#fff" />
            <text x={183} y={51} fontSize={7} fontFamily={SANS} fontWeight={700} fill={C.ink}>Votre application</text>
            <text x={183} y={61} fontSize={6.5} fontFamily={SANS} fill={C.muted}>Votre commande a été expédiée</text>
          </motion.g>

          {/* atouts */}
          <Chip x={26} y={56} w={104} label="Mode hors ligne" delay={0.9} float={4} icon={<WifiOff x={34} y={61} size={10} color={C.primaryInk} />} />
          <Chip x={40} y={96} w={102} label="Notifications" delay={1.05} float={3} icon={<Bell x={48} y={101} size={10} color={C.primaryInk} />} />
          {[
            { y: 186, top: "Télécharger sur", name: "App Store", Icon: Smartphone },
            { y: 226, top: "Disponible sur", name: "Google Play", Icon: Play },
          ].map(({ y, top, name, Icon }, i) => (
            <motion.g key={name} {...appear(1.2 + i * 0.15)}>
              <rect x={26} y={y} width={112} height={32} rx={8} fill={PHONE} />
              <Icon x={36} y={y + 9} size={14} color="#fff" />
              <text x={56} y={y + 13} fontSize={6} fontFamily={SANS} fill="rgba(255,255,255,0.7)">{top}</text>
              <text x={56} y={y + 24} fontSize={9.5} fontFamily={SANS} fontWeight={700} fill="#fff">{name}</text>
            </motion.g>
          ))}
        </>
      )}
    </Scene>
  );
}

/* ── 03 · UX/UI design ────────────────────────────────────────────────────── */

function DesignScene() {
  const loop = { duration: 8, repeat: Infinity, times: [0, 0.4, 0.5, 0.92, 1] };
  return (
    <Scene label="Illustration : maquette d'interface en cours de conception, du fil de fer à la version finale">
      {(id) => (
        <>
          <rect x={0} y={0} width={480} height={300} fill={`url(#dots-${id})`} />
          {/* barre d'outils */}
          <motion.g {...appear(0.1)}>
            <rect x={172} y={10} width={136} height={24} rx={12} fill={C.panel} stroke={C.line} filter={`url(#sh-${id})`} />
            {[MousePointer2, Square, Type, PenTool].map((Icon, i) => (
              <g key={i}>
                {i === 0 && <rect x={182} y={14} width={24} height={16} rx={8} fill={C.primary} />}
                <Icon x={188 + i * 30} y={16} size={12} color={i === 0 ? "#fff" : C.muted} />
              </g>
            ))}
          </motion.g>

          {/* calques */}
          <Win x={12} y={46} w={98} h={240} id={id} delay={0.2}>
            <text x={22} y={82} fontSize={7.5} fontFamily={SANS} fontWeight={700} fill={C.ink}>Calques</text>
            {["Accueil", "En-tête", "Titre", "Bouton", "Visuel", "Cartes"].map((l, i) => (
              <motion.g key={l} {...appear(0.4 + i * 0.07, 6)}>
                {l === "Bouton" && <rect x={16} y={88 + i * 22} width={90} height={18} rx={5} fill={C.indigo} opacity={0.14} />}
                <rect x={i === 0 ? 22 : 30} y={94 + i * 22} width={7} height={7} rx={1.5} fill="none" stroke={l === "Bouton" ? C.indigo : C.faint} />
                <text x={i === 0 ? 34 : 42} y={100.5 + i * 22} fontSize={7} fontFamily={SANS} fontWeight={l === "Bouton" ? 700 : 500} fill={l === "Bouton" ? C.indigo : C.muted}>{l}</text>
              </motion.g>
            ))}
          </Win>

          {/* plan de travail */}
          <motion.g {...appear(0.3)}>
            <text x={124} y={56} fontSize={7} fontFamily={SANS} fill={C.muted}>Accueil — ordinateur</text>
            <rect x={124} y={60} width={230} height={226} rx={4} fill={C.panel} stroke={C.line} filter={`url(#sh-${id})`} />
          </motion.g>
          {/* fil de fer */}
          <motion.g animate={{ opacity: [1, 1, 0, 0, 1] }} transition={loop} fill="none" stroke={C.faint} strokeDasharray="3 3">
            <rect x={136} y={72} width={206} height={14} rx={3} />
            <rect x={136} y={98} width={100} height={12} rx={2} />
            <rect x={136} y={116} width={84} height={12} rx={2} />
            <rect x={136} y={150} width={72} height={20} rx={10} />
            <rect x={248} y={96} width={94} height={78} rx={3} />
            <path d="M248 96 L342 174 M342 96 L248 174" />
            {[136, 206, 276].map((cx) => <rect key={cx} x={cx} y={190} width={64} height={84} rx={3} />)}
          </motion.g>
          {/* version finale */}
          <motion.g animate={{ opacity: [0, 0, 1, 1, 0] }} transition={loop}>
            <circle cx={142} cy={79} r={5} fill={C.primary} />
            <rect x={151} y={76} width={26} height={5} rx={2.5} fill={C.ink} />
            {[268, 290, 312].map((lx) => <rect key={lx} x={lx} y={77} width={16} height={3.5} rx={1.75} fill={C.faint} />)}
            <rect x={136} y={98} width={100} height={12} rx={3} fill={C.ink} />
            <rect x={136} y={116} width={60} height={12} rx={3} fill={C.ink} />
            <rect x={198} y={116} width={30} height={12} rx={3} fill={`url(#iris-${id})`} />
            <rect x={136} y={136} width={92} height={3.5} rx={1.75} fill={C.faint} />
            <rect x={136} y={150} width={72} height={20} rx={10} fill={C.primary} />
            <text x={172} y={163} fontSize={7} fontFamily={SANS} fontWeight={700} fill="#fff" textAnchor="middle">Commencer</text>
            <rect x={248} y={96} width={94} height={78} rx={5} fill={`url(#iris-${id})`} />
            {[136, 206, 276].map((cx, i) => (
              <g key={cx}>
                <rect x={cx} y={190} width={64} height={84} rx={5} fill={C.alt} />
                <rect x={cx + 7} y={197} width={50} height={34} rx={4} fill={[C.cyan, C.indigo, C.orange][i]} opacity={0.75} />
                <rect x={cx + 7} y={240} width={40} height={4.5} rx={2.25} fill={C.ink} />
                <rect x={cx + 7} y={250} width={48} height={3} rx={1.5} fill={C.faint} />
              </g>
            ))}
          </motion.g>
          {/* sélection du bouton */}
          <motion.g {...appear(0.9)}>
            <rect x={133} y={147} width={78} height={26} fill="none" stroke={C.indigo} strokeWidth={1.2} />
            {[[133, 147], [211, 147], [133, 173], [211, 173]].map(([hx, hy]) => (
              <rect key={`${hx}-${hy}`} x={hx - 2.5} y={hy - 2.5} width={5} height={5} fill="#fff" stroke={C.indigo} />
            ))}
            <rect x={133} y={176} width={70} height={11} rx={2} fill={C.indigo} />
            <text x={137} y={184} fontSize={6} fontFamily={SANS} fontWeight={700} fill="#fff">Bouton / Principal</text>
          </motion.g>

          {/* système de design */}
          <Win x={366} y={46} w={104} h={240} id={id} delay={0.35}>
            <text x={376} y={82} fontSize={7.5} fontFamily={SANS} fontWeight={700} fill={C.ink}>Couleurs</text>
            {["var(--primary)", C.indigo, C.orange, "var(--ink)"].map((c, i) => (
              <motion.circle key={i} cx={384 + i * 22} cy={98} r={8} fill={c} stroke={C.line} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.6 + i * 0.08, type: "spring", stiffness: 260, damping: 16 }} />
            ))}
            <text x={376} y={128} fontSize={7.5} fontFamily={SANS} fontWeight={700} fill={C.ink}>Typographie</text>
            <text x={376} y={160} fontSize={28} fontFamily={SANS} fontWeight={800} fill={C.ink}>Aa</text>
            <text x={418} y={152} fontSize={6.5} fontFamily={SANS} fill={C.muted}>Titres · 800</text>
            <text x={418} y={161} fontSize={6.5} fontFamily={SANS} fill={C.muted}>Texte · 400</text>
            <text x={376} y={190} fontSize={7.5} fontFamily={SANS} fontWeight={700} fill={C.ink}>Espacements</text>
            {[8, 16, 28, 44].map((s, i) => <Bar key={s} x={376} y={200 + i * 12} w={s * 1.6} h={6} fill={C.primary} delay={0.8 + i * 0.1} />)}
          </Win>

          {/* curseur d'un designer */}
          <motion.g
            initial={{ x: 300, y: 240 }}
            animate={{ x: [300, 214, 214, 330, 300], y: [240, 170, 170, 130, 240] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <Cursor fill={C.orange} />
            <rect x={12} y={14} width={44} height={13} rx={6.5} fill={C.orange} />
            <text x={34} y={23} fontSize={6.5} fontFamily={SANS} fontWeight={700} fill="#fff" textAnchor="middle">Designer</text>
          </motion.g>
        </>
      )}
    </Scene>
  );
}

/* ── 04 · Cloud & infrastructure ─────────────────────────────────────────── */

function Packet({ from, to, delay, color = C.primary }: { from: [number, number]; to: [number, number]; delay: number; color?: string }) {
  return (
    <motion.circle
      r={2.8}
      fill={color}
      initial={{ cx: from[0], cy: from[1], opacity: 0 }}
      animate={{ cx: [from[0], to[0]], cy: [from[1], to[1]], opacity: [0, 1, 1, 0] }}
      transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 0.8, delay, ease: "easeInOut" }}
    />
  );
}

function CloudScene() {
  const users: [number, typeof Monitor][] = [[78, Monitor], [134, Smartphone], [190, Laptop]];
  const apps = [64, 120, 176];
  const steps = [
    { label: "Code", Icon: GitBranch },
    { label: "Build", Icon: Hammer },
    { label: "Tests", Icon: FlaskConical },
    { label: "Déploiement", Icon: Rocket },
  ];
  return (
    <Scene label="Illustration : architecture cloud, des visiteurs aux serveurs et à la base de données, avec déploiement automatique">
      {(id) => (
        <>
          {/* région cloud */}
          <motion.g {...appear(0.1)}>
            <rect x={142} y={34} width={252} height={200} rx={10} fill={C.primary} fillOpacity={0.05} stroke={C.primary} strokeOpacity={0.45} strokeDasharray="5 4" />
            <rect x={154} y={26} width={98} height={16} rx={8} fill={C.panel} stroke={C.line} />
            <text x={203} y={37} fontSize={7} fontFamily={SANS} fontWeight={700} fill={C.primaryInk} textAnchor="middle">Région cloud</text>
          </motion.g>

          {/* liaisons */}
          <g stroke={C.faint} strokeOpacity={0.55} strokeWidth={1.4} strokeDasharray="3 3" fill="none">
            {users.map(([uy]) => <line key={uy} x1={66} y1={uy} x2={162} y2={134} />)}
            {apps.map((ay) => <line key={ay} x1={216} y1={134} x2={252} y2={ay + 20} />)}
            {apps.map((ay) => <line key={`d${ay}`} x1={324} y1={ay + 20} x2={406} y2={134} />)}
          </g>
          {users.map(([uy], i) => <Packet key={uy} from={[66, uy]} to={[162, 134]} delay={i * 0.45} />)}
          {apps.map((ay, i) => <Packet key={ay} from={[216, 134]} to={[252, ay + 20]} delay={0.7 + i * 0.45} color={C.indigo} />)}
          {apps.map((ay, i) => <Packet key={`d${ay}`} from={[324, ay + 20]} to={[406, 134]} delay={1.2 + i * 0.45} color={C.orange} />)}

          {/* visiteurs */}
          {users.map(([uy, Icon], i) => (
            <motion.g key={uy} {...appear(0.2 + i * 0.1)}>
              <circle cx={50} cy={uy} r={17} fill={C.panel} stroke={C.line} filter={`url(#sh-${id})`} />
              <Icon x={42} y={uy - 8} size={16} color={C.ink} />
            </motion.g>
          ))}
          <text x={50} y={222} fontSize={7} fontFamily={SANS} fontWeight={600} fill={C.muted} textAnchor="middle">Visiteurs</text>

          {/* répartiteur de charge */}
          <motion.g {...appear(0.4)}>
            <rect x={160} y={112} width={58} height={44} rx={8} fill={C.panel} stroke={C.line} filter={`url(#sh-${id})`} />
            <Network x={180} y={119} size={18} color={C.primaryInk} />
            <text x={189} y={149} fontSize={6.5} fontFamily={SANS} fontWeight={600} fill={C.muted} textAnchor="middle">Répartiteur</text>
          </motion.g>

          {/* conteneurs */}
          {apps.map((ay, i) => (
            <motion.g key={ay} {...appear(0.5 + i * 0.1)}>
              <rect x={252} y={ay} width={72} height={40} rx={7} fill={C.panel} stroke={C.line} filter={`url(#sh-${id})`} />
              <Box x={260} y={ay + 7} size={12} color={C.indigo} />
              <text x={276} y={ay + 16} fontSize={7} fontFamily={MONO} fill={C.ink}>app-{i + 1}</text>
              <rect x={260} y={ay + 26} width={56} height={4} rx={2} fill={C.line} />
              <motion.rect
                x={260} y={ay + 26} width={56} height={4} rx={2} fill={C.primary} style={{ originX: 0 }}
                animate={{ scaleX: [0.3, 0.75, 0.45, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
              />
            </motion.g>
          ))}

          {/* base de données */}
          <motion.g {...appear(0.7)}>
            <path d="M404 110 v48 a26 8 0 0 0 52 0 v-48" fill={C.panel} stroke={C.line} />
            <ellipse cx={430} cy={110} rx={26} ry={8} fill={C.alt} stroke={C.line} />
            <path d="M404 126 a26 8 0 0 0 52 0 M404 142 a26 8 0 0 0 52 0" fill="none" stroke={C.line} />
            <Database x={423} y={130} size={14} color={C.orange} />
            <text x={430} y={182} fontSize={6.5} fontFamily={SANS} fontWeight={600} fill={C.muted} textAnchor="middle">Base de données</text>
          </motion.g>

          {/* chaîne de déploiement */}
          <motion.g {...appear(0.9)}>
            <text x={24} y={262} fontSize={7} fontFamily={MONO} fontWeight={700} fill={C.primaryInk}>CI/CD</text>
            {steps.map(({ label, Icon }, i) => {
              const sx = 64 + i * 104;
              return (
                <g key={label}>
                  {i > 0 && <line x1={sx - 14} x2={sx} y1={258} y2={258} stroke={C.line} strokeWidth={1.4} />}
                  <rect x={sx} y={245} width={90} height={26} rx={13} fill={C.panel} stroke={C.line} />
                  <Icon x={sx + 9} y={252} size={11} color={C.muted} />
                  <text x={sx + 25} y={261} fontSize={7} fontFamily={SANS} fontWeight={600} fill={C.ink}>{label}</text>
                  <motion.g
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1, 1, 0] }}
                    style={{ originX: `${sx + 78}px`, originY: "258px" }}
                    transition={{ duration: 5, times: [0, 0.08, 0.9, 1], repeat: Infinity, delay: 1.2 + i * 0.6, repeatDelay: 0.6 }}
                  >
                    <circle cx={sx + 78} cy={258} r={7} fill={C.primary} />
                    <Check x={sx + 73} y={253} size={10} color="#fff" strokeWidth={3} />
                  </motion.g>
                </g>
              );
            })}
          </motion.g>
        </>
      )}
    </Scene>
  );
}

/* ── 05 · Marketing digital ───────────────────────────────────────────────── */

function MarketingScene() {
  const query = "création site web casablanca";
  return (
    <Scene label="Illustration : tableau de bord marketing avec trafic en hausse, référencement Google et entonnoir de conversion">
      {(id) => (
        <>
          <Win x={14} y={16} w={300} h={268} id={id} title="Tableau de bord">
            {["Visites", "Prospects", "Conversions"].map((l, i) => {
              const kx = 26 + i * 96;
              return (
                <motion.g key={l} {...appear(0.3 + i * 0.1, 8)}>
                  <rect x={kx} y={48} width={86} height={52} rx={7} fill={C.alt} />
                  <text x={kx + 9} y={63} fontSize={7} fontFamily={SANS} fontWeight={600} fill={C.muted}>{l}</text>
                  <TrendingUp x={kx + 68} y={55} size={10} color={C.primaryInk} />
                  <motion.path
                    d={`M${kx + 9} 90 L${kx + 22} 85 L${kx + 34} 87 L${kx + 47} 79 L${kx + 59} 81 L${kx + 77} 70`}
                    fill="none" stroke={[C.primary, C.indigo, C.orange][i]} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 0.6 + i * 0.15, ease: ease.out }}
                  />
                </motion.g>
              );
            })}
            <text x={26} y={122} fontSize={8} fontFamily={SANS} fontWeight={700} fill={C.ink}>Trafic issu de Google</text>
            {[140, 162, 184, 206].map((gy) => <line key={gy} x1={26} x2={302} y1={gy} y2={gy} stroke={C.line} strokeDasharray="2 3" />)}
            <motion.path
              d="M26 206 C60 200 80 196 106 188 S150 182 176 168 S226 160 250 142 S286 130 302 126 L302 210 L26 210 Z"
              fill={`url(#area-${id})`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.2 }}
            />
            <motion.path
              d="M26 206 C60 200 80 196 106 188 S150 182 176 168 S226 160 250 142 S286 130 302 126"
              fill="none" stroke={C.primary} strokeWidth={2.4} strokeLinecap="round"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.8, delay: 0.6, ease: ease.out }}
            />
            <motion.circle cx={302} cy={126} r={4} fill={C.primary} initial={{ scale: 0 }} animate={{ scale: [1, 1.6, 1] }} transition={{ duration: 1.6, repeat: Infinity, delay: 2.4 }} />
            {/* canaux */}
            <text x={26} y={232} fontSize={7} fontFamily={SANS} fontWeight={700} fill={C.ink}>Canaux</text>
            {[
              { l: "SEO", h: 34, c: C.primary },
              { l: "Annonces", h: 24, c: C.indigo },
              { l: "Réseaux", h: 28, c: C.orange },
              { l: "E-mail", h: 16, c: C.cyan },
            ].map(({ l, h, c }, i) => (
              <g key={l}>
                <motion.rect
                  x={92 + i * 54} y={272 - h} width={22} height={h} rx={3} fill={c}
                  initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} style={{ originY: 1 }}
                  transition={{ duration: 0.9, ease: ease.out, delay: 1 + i * 0.1 }}
                />
                <text x={103 + i * 54} y={280} fontSize={5.5} fontFamily={SANS} fill={C.muted} textAnchor="middle">{l}</text>
              </g>
            ))}
          </Win>

          {/* résultat de recherche */}
          <Win x={292} y={32} w={176} h={116} id={id} delay={0.5}>
            <rect x={302} y={64} width={156} height={18} rx={9} fill={C.alt} />
            <Search x={309} y={68} size={10} color={C.muted} />
            {/* la requête se tape lettre après lettre */}
            <clipPath id={`q-${id}`}>
              <motion.rect x={322} y={66} height={14} initial={{ width: 0 }} animate={{ width: 132 }} transition={{ duration: 1.6, delay: 0.9, ease: "linear" }} />
            </clipPath>
            <text x={323} y={76} fontSize={6.5} fontFamily={SANS} fill={C.ink} clipPath={`url(#q-${id})`}>
              {query}
            </text>
            <motion.g {...appear(2.2, 6)}>
              <text x={304} y={98} fontSize={6} fontFamily={SANS} fill={C.primaryInk}>votre-entreprise.com</text>
              <text x={304} y={110} fontSize={8} fontFamily={SANS} fontWeight={700} fill={C.indigo}>Création de sites web sur mesure</text>
              <rect x={304} y={117} width={150} height={3.5} rx={1.75} fill={C.faint} />
              <rect x={304} y={125} width={118} height={3.5} rx={1.75} fill={C.faint} />
              <rect x={304} y={133} width={86} height={3.5} rx={1.75} fill={C.line} />
            </motion.g>
          </Win>

          {/* entonnoir */}
          <motion.g {...appear(0.8)}>
            <rect x={326} y={164} width={142} height={120} rx={8} fill={C.panel} stroke={C.line} filter={`url(#sh-${id})`} />
            <text x={338} y={182} fontSize={7.5} fontFamily={SANS} fontWeight={700} fill={C.ink}>Entonnoir</text>
            {[
              { l: "Visiteurs", w: 118, c: C.indigo },
              { l: "Prospects", w: 86, c: C.primary },
              { l: "Clients", w: 54, c: C.orange },
            ].map(({ l, w, c }, i) => (
              <motion.g key={l} initial={{ scaleX: 0, opacity: 0 }} animate={{ scaleX: 1, opacity: 1 }} style={{ originX: "397px" }} transition={{ duration: 0.8, ease: ease.out, delay: 1.1 + i * 0.15 }}>
                <path d={`M${397 - w / 2} ${192 + i * 28} h${w} l-8 22 h${-(w - 16)} Z`} fill={c} opacity={0.9} />
                <text x={397} y={207 + i * 28} fontSize={7} fontFamily={SANS} fontWeight={700} fill="#fff" textAnchor="middle">{l}</text>
              </motion.g>
            ))}
          </motion.g>
        </>
      )}
    </Scene>
  );
}

/* ── 06 · Automatisation & conseil ────────────────────────────────────────── */

type NodeDef = { x: number; y: number; title: string; sub: string; Icon: typeof Zap; color: string };

function FlowNode({ n, delay, id }: { n: NodeDef; delay: number; id: string }) {
  return (
    <motion.g {...appear(delay, 8)}>
      <rect x={n.x} y={n.y} width={118} height={42} rx={8} fill={C.panel} stroke={C.line} filter={`url(#sh-${id})`} />
      <rect x={n.x + 8} y={n.y + 9} width={24} height={24} rx={6} fill={n.color} />
      <n.Icon x={n.x + 14} y={n.y + 15} size={12} color="#fff" />
      <text x={n.x + 40} y={n.y + 19} fontSize={7.5} fontFamily={SANS} fontWeight={700} fill={C.ink}>{n.title}</text>
      <text x={n.x + 40} y={n.y + 30} fontSize={6.5} fontFamily={SANS} fill={C.muted}>{n.sub}</text>
    </motion.g>
  );
}

function AutomationScene() {
  const nodes: NodeDef[] = [
    { x: 12, y: 50, title: "Formulaire reçu", sub: "Déclencheur", Icon: Zap, color: C.orange },
    { x: 12, y: 168, title: "Facture émise", sub: "Déclencheur", Icon: FileText, color: C.orange },
    { x: 180, y: 109, title: "Traitement", sub: "Script sur mesure", Icon: Cpu, color: C.primary },
    { x: 350, y: 30, title: "CRM mis à jour", sub: "Intégration API", Icon: Database, color: C.indigo },
    { x: 350, y: 109, title: "E-mail envoyé", sub: "Notification", Icon: Mail, color: C.indigo },
    { x: 350, y: 188, title: "Tableau de bord", sub: "Rapport", Icon: BarChart3, color: C.indigo },
  ];
  const edge = (a: NodeDef, b: NodeDef) => {
    const x1 = a.x + 118, y1 = a.y + 21, x2 = b.x, y2 = b.y + 21;
    return `M${x1} ${y1} C${x1 + 30} ${y1}, ${x2 - 30} ${y2}, ${x2} ${y2}`;
  };
  const edges = [edge(nodes[0], nodes[2]), edge(nodes[1], nodes[2]), edge(nodes[2], nodes[3]), edge(nodes[2], nodes[4]), edge(nodes[2], nodes[5])];
  return (
    <Scene label="Illustration : flux d'automatisation qui relie formulaire, facturation, CRM, e-mail et tableau de bord">
      {(id) => (
        <>
          <rect x={0} y={0} width={480} height={300} fill={`url(#dots-${id})`} />
          {edges.map((d, i) => (
            <g key={i}>
              <motion.path d={d} fill="none" stroke={C.faint} strokeOpacity={0.6} strokeWidth={1.6} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 0.5 + i * 0.12 }} />
              <motion.path
                d={d} fill="none" stroke={i < 2 ? C.orange : C.primary} strokeWidth={2.4} strokeLinecap="round" pathLength={100}
                strokeDasharray="10 100"
                initial={{ strokeDashoffset: 110 }}
                animate={{ strokeDashoffset: [110, 0] }}
                transition={{ duration: 1.3, repeat: Infinity, repeatDelay: 1.2, ease: "easeInOut", delay: i < 2 ? 1 + i * 0.3 : 2.2 + (i - 2) * 0.25 }}
              />
            </g>
          ))}
          {nodes.map((n, i) => <FlowNode key={n.title} n={n} id={id} delay={0.15 + i * 0.1} />)}

          {/* engrenage */}
          <motion.g style={{ originX: "239px", originY: "62px" }} animate={{ rotate: 360 }} transition={{ duration: 9, repeat: Infinity, ease: "linear" }}>
            <Settings x={223} y={46} size={32} color={C.faint} strokeWidth={1.4} />
          </motion.g>

          {/* tâche terminée */}
          <motion.g
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: [0, 1, 1, 0], y: [8, 0, 0, 8] }}
            transition={{ duration: 3.4, times: [0, 0.15, 0.85, 1], repeat: Infinity, repeatDelay: 0.6, delay: 2.6 }}
          >
            <rect x={140} y={252} width={200} height={26} rx={13} fill={C.panel} stroke={C.line} filter={`url(#sh-${id})`} />
            <CheckCircle2 x={151} y={258} size={14} color={C.primaryInk} />
            <text x={171} y={268} fontSize={7.5} fontFamily={SANS} fontWeight={700} fill={C.ink}>Tâche faite automatiquement</text>
          </motion.g>
        </>
      )}
    </Scene>
  );
}

/* ── 07 · Maintenance & support ───────────────────────────────────────────── */

function MaintenanceScene() {
  const services = ["Site web", "API", "Base de données", "Sauvegardes"];
  const log: [string, string][] = [
    ["$ maintenance --hebdomadaire", "#e5e7eb"],
    ["✓ dépendances mises à jour", C.cyan],
    ["✓ correctifs de sécurité appliqués", C.cyan],
    ["✓ certificat SSL renouvelé", C.cyan],
    ["✓ sauvegarde terminée", C.cyan],
  ];
  return (
    <Scene label="Illustration : supervision des services en ligne, mises à jour de sécurité et sauvegardes">
      {(id) => (
        <>
          <Win x={14} y={16} w={296} h={268} id={id} title="Supervision">
            <motion.circle cx={30} cy={54} r={4} fill={C.primary} animate={{ opacity: [1, 0.35, 1] }} transition={{ duration: 1.6, repeat: Infinity }} />
            <motion.circle cx={30} cy={54} r={4} fill="none" stroke={C.primary} animate={{ r: [4, 10], opacity: [0.6, 0] }} transition={{ duration: 1.6, repeat: Infinity }} />
            <text x={42} y={57} fontSize={8.5} fontFamily={SANS} fontWeight={700} fill={C.ink}>Tous les services fonctionnent</text>
            <text x={26} y={80} fontSize={6.5} fontFamily={SANS} fill={C.muted}>Disponibilité — 90 derniers jours</text>
            {Array.from({ length: 45 }, (_, i) => (
              <motion.rect
                key={i} x={26 + i * 6.1} y={86} width={4.2} height={22} rx={1.5}
                fill={i === 17 ? C.orange : C.primary} opacity={i === 17 ? 1 : 0.75}
                initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} style={{ originY: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.015, ease: ease.out }}
              />
            ))}
            {services.map((s, i) => (
              <motion.g key={s} {...appear(0.6 + i * 0.1, 6)}>
                <line x1={26} x2={298} y1={124 + i * 28} y2={124 + i * 28} stroke={C.line} />
                <CheckCircle2 x={26} y={131 + i * 28} size={12} color={C.primaryInk} />
                <text x={44} y={141 + i * 28} fontSize={8} fontFamily={SANS} fontWeight={600} fill={C.ink}>{s}</text>
                <rect x={232} y={131 + i * 28} width={64} height={14} rx={7} fill={C.primary} fillOpacity={0.12} />
                <text x={264} y={141 + i * 28} fontSize={6.5} fontFamily={SANS} fontWeight={700} fill={C.primaryInk} textAnchor="middle">Opérationnel</text>
              </motion.g>
            ))}
            <text x={26} y={252} fontSize={6.5} fontFamily={SANS} fill={C.muted}>Temps de réponse</text>
            <motion.path
              d="M26 274 L50 270 L74 272 L98 266 L122 269 L146 264 L170 268 L194 262 L218 266 L242 263 L266 265 L298 260"
              fill="none" stroke={C.indigo} strokeWidth={1.8} strokeLinejoin="round"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 0.8 }}
            />
          </Win>

          {/* bouclier */}
          <motion.g {...appear(0.5)}>
            <circle cx={400} cy={70} r={40} fill={C.panel} stroke={C.line} filter={`url(#sh-${id})`} />
            <motion.circle
              cx={400} cy={70} r={32} fill="none" stroke={C.primary} strokeWidth={1.5} strokeDasharray="4 6"
              style={{ originX: "400px", originY: "70px" }} animate={{ rotate: 360 }} transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            />
            <ShieldCheck x={386} y={56} size={28} color={C.primaryInk} />
            <text x={400} y={126} fontSize={7.5} fontFamily={SANS} fontWeight={700} fill={C.muted} textAnchor="middle">Sécurité suivie</text>
          </motion.g>

          {/* journal de maintenance */}
          <Win x={250} y={146} w={218} h={136} id={id} dark title="maintenance.log" delay={0.7}>
            {log.map(([t, c], i) => (
              <motion.text
                key={t} x={262} y={186 + i * 16} fontSize={7.5} fontFamily={MONO} fill={c}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={{ duration: 7, times: [0, 0.06, 0.92, 1], repeat: Infinity, delay: 1 + i * 0.7 }}
              >
                {t}
              </motion.text>
            ))}
          </Win>
        </>
      )}
    </Scene>
  );
}

const SERVICE_SCENES: Record<string, () => ReactNode> = {
  web: WebScene,
  mobile: MobileScene,
  design: DesignScene,
  cloud: CloudScene,
  marketing: MarketingScene,
  automatisation: AutomationScene,
  maintenance: MaintenanceScene,
};

export function ServiceScene({ slug }: { slug: string }) {
  const S = SERVICE_SCENES[slug];
  return S ? <S /> : null;
}
