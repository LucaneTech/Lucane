/**
 * Kit « tout bouge » : éléments de base déjà animés (plan, section 0.4).
 * Dans les pages, on n'écrit plus de <h2>, <p>, <img> nus : toujours M.H2, M.P, M.Img…
 * Chaque élément porte ses couches de mouvement : entrée, défilement, interaction, repos.
 */
/* eslint-disable react-refresh/only-export-components */
import { useEffect, useRef, useState } from "react";
import type { ChangeEvent, ElementType, ReactElement, ReactNode, MouseEvent as ReactMouseEvent } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { cn } from "../ui/utils";
import SplitText from "./SplitText";
import DrawLine from "./DrawLine";
import { dur, ease, hasFinePointer, prefersReducedMotion } from "./presets";
import { useScrollSkew, useScrollVelocityFactor } from "./useScrollVelocity";

/* ── Titres ───────────────────────────────────────────────────────────────── */

interface HeadingProps {
  children: string;
  className?: string;
  id?: string;
  by?: "word" | "char";
  delay?: number;
  immediate?: boolean;
}

/** Titre : entrée mot à mot (ou lettre à lettre) + inclinaison selon la vitesse de défilement. */
function makeHeading(tag: ElementType, defaultClass: string) {
  return function Heading({ children, className, id, by = "word", delay = 0, immediate }: HeadingProps) {
    const skewY = useScrollSkew(2.5);
    return (
      <motion.div style={{ skewY }} className="will-change-transform">
        <SplitText
          as={tag}
          text={children}
          by={by}
          delay={delay}
          immediate={immediate}
          className={cn(defaultClass, className)}
          {...(id ? { id } : {})}
        />
      </motion.div>
    );
  };
}

const H1 = makeHeading("h1", "display-1");
const H2 = makeHeading("h2", "display-2");
const H3 = makeHeading("h3", "display-3");

/* ── Paragraphe ───────────────────────────────────────────────────────────── */

/** Paragraphe : les mots montent en vague très serrée, ce qui donne des lignes qui se lèvent. */
function P({ children, className, delay = 0 }: { children: string; className?: string; delay?: number }) {
  return <SplitText as="p" text={children} className={cn("lead", className)} delay={delay} stagger={0.012} />;
}

/* ── Image ────────────────────────────────────────────────────────────────── */

interface ImgProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  imgClassName?: string;
  /** Amplitude de la parallaxe interne (0 = aucune). */
  parallax?: number;
  /** Inclinaison 3D qui suit la souris au survol. */
  tilt?: boolean;
  priority?: boolean;
  cursor?: string;
}

/** Image : rideau + zoom arrière à l'entrée, parallaxe interne, zoom et inclinaison 3D au survol. */
function Img({ src, alt, width, height, className, imgClassName, parallax = 0.08, tilt = true, priority, cursor }: ImgProps) {
  // L'observateur est posé sur le cadre extérieur : l'élément masqué par clip-path
  // ne serait jamais considéré comme visible.
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const [hovered, setHovered] = useState(false);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`${-parallax * 100}%`, `${parallax * 100}%`]);

  const rx = useSpring(0, { stiffness: 150, damping: 18 });
  const ry = useSpring(0, { stiffness: 150, damping: 18 });

  const onMove = (e: ReactMouseEvent) => {
    if (!tilt || !ref.current || !hasFinePointer()) return;
    const r = ref.current.getBoundingClientRect();
    ry.set(((e.clientX - r.left) / r.width - 0.5) * 8);
    rx.set(-((e.clientY - r.top) / r.height - 0.5) * 8);
  };
  const onLeave = () => {
    rx.set(0);
    ry.set(0);
    setHovered(false);
  };

  return (
    <div ref={ref} className={cn("[perspective:1200px]", className)}>
      <motion.div
        style={{ rotateX: rx, rotateY: ry }}
        onMouseMove={onMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={onLeave}
        data-cursor={cursor}
        className="relative h-full w-full overflow-hidden will-change-transform"
        initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
        animate={inView ? { clipPath: "inset(0% 0% 0% 0%)" } : undefined}
        transition={{ duration: dur.xslow, ease: ease.out }}
      >
        <motion.div style={{ y }} className="h-full w-full scale-[1.18]">
          <motion.img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : undefined}
            decoding="async"
            className={cn("h-full w-full object-cover", imgClassName)}
            initial={{ scale: 1.25 }}
            animate={{ scale: inView ? (hovered ? 1.06 : 1) : 1.25 }}
            transition={{ duration: hovered ? 0.9 : dur.xslow, ease: ease.out }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ── Lien ─────────────────────────────────────────────────────────────────── */

interface LinkProps {
  children: ReactNode;
  to?: string;
  href?: string;
  className?: string;
  /** Soulignement visible au repos (il se retire puis revient au survol). */
  underlined?: boolean;
}

/** Lien : soulignement qui se trace de gauche à droite et repart par la droite. */
function MLink({ children, to, href, className, underlined = false }: LinkProps) {
  const classes = cn("group relative inline-flex items-center gap-1 transition-colors duration-300 hover:text-primary-ink", className);
  const line = (
    <span
      aria-hidden
      className={cn(
        "absolute -bottom-0.5 left-0 h-px w-full bg-current transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
        underlined
          ? "origin-right scale-x-100 group-hover:origin-right group-hover:scale-x-0 group-hover:delay-0"
          : "origin-right scale-x-0 group-hover:origin-left group-hover:scale-x-100"
      )}
    />
  );
  if (to)
    return (
      <Link to={to} className={classes}>
        {children}
        {line}
      </Link>
    );
  return (
    <a href={href} className={classes} target={href?.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
      {children}
      {line}
    </a>
  );
}

/* ── Icône ────────────────────────────────────────────────────────────────── */

/** Icône lucide : son trait se dessine à l'entrée ; elle pivote et rebondit au survol. */
function Icon({ children, className, delay = 0 }: { children: ReactElement; className?: string; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  useEffect(() => {
    ref.current
      ?.querySelectorAll("path, line, circle, rect, polyline, polygon, ellipse")
      .forEach((el) => el.setAttribute("pathLength", "1"));
  }, []);

  return (
    <motion.span
      ref={ref}
      className={cn("draw-icon inline-flex", inView && "is-drawn", className)}
      style={{ ["--draw-delay" as string]: `${delay}s` }}
      whileHover={{ rotate: -12, scale: 1.12 }}
      transition={{ type: "spring", stiffness: 300, damping: 12 }}
    >
      {children}
    </motion.span>
  );
}

/* ── Carte ────────────────────────────────────────────────────────────────── */

interface CardProps {
  children: ReactNode;
  className?: string;
  index?: number;
  cursor?: string;
  as?: "div" | "article" | "li";
}

/** Carte : montée en cascade ; au survol, un filet teal se trace en haut et le contenu se décale. */
function Card({ children, className, index = 0, cursor, as = "div" }: CardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const Tag = motion[as] as typeof motion.div;

  return (
    <Tag
      ref={ref}
      data-cursor={cursor}
      className={cn("group relative border-t border-line", className)}
      initial={{ y: 60, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : undefined}
      transition={{ duration: dur.slow, ease: ease.out, delay: index * 0.08 }}
    >
      <span
        aria-hidden
        className="absolute -top-px left-0 h-[2px] w-full origin-left scale-x-0 bg-primary transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
      />
      <div className="transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2">{children}</div>
    </Tag>
  );
}

/* ── Bandeau défilant ─────────────────────────────────────────────────────── */

const wrap = (min: number, max: number, v: number) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

/**
 * Bandeau continu : défile au repos, accélère avec la vitesse de défilement de la page
 * et change de sens quand on remonte.
 */
function Marquee({ children, speed = 4, className, reverse = false }: { children: ReactNode; speed?: number; className?: string; reverse?: boolean }) {
  const baseX = useMotionValue(0);
  const velocity = useScrollVelocityFactor();
  const direction = useRef(reverse ? -1 : 1);
  const slow = useRef(prefersReducedMotion());
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);

  useAnimationFrame((_, delta) => {
    const f = velocity.get();
    if (f < -0.05) direction.current = reverse ? 1 : -1;
    else if (f > 0.05) direction.current = reverse ? -1 : 1;
    let move = -direction.current * speed * (delta / 1000) * (slow.current ? 0.15 : 1);
    move += move * Math.min(Math.abs(f) * 4, 6);
    baseX.set(baseX.get() + move);
  });

  return (
    <div className={cn("overflow-hidden whitespace-nowrap", className)}>
      <motion.div style={{ x }} className="flex w-max will-change-transform">
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0" aria-hidden>
          {children}
        </div>
      </motion.div>
    </div>
  );
}

/* ── Champ de formulaire ──────────────────────────────────────────────────── */

interface FieldProps {
  label: string;
  name: string;
  type?: string;
  multiline?: boolean;
  required?: boolean;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  className?: string;
  index?: number;
}

/** Champ : libellé qui flotte quand on écrit, filet teal qui se trace au focus, entrée en cascade. */
function Field({ label, name, type = "text", multiline, required, value, onChange, className, index = 0 }: FieldProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const inputClass =
    "peer block w-full border-0 border-b border-line bg-transparent px-0 pb-3 pt-7 text-lg text-ink outline-none placeholder-transparent focus:outline-none focus-visible:outline-none";

  return (
    <motion.div
      ref={ref}
      className={cn("relative", className)}
      initial={{ y: 30, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : undefined}
      transition={{ duration: dur.base, ease: ease.out, delay: index * 0.07 }}
    >
      {multiline ? (
        <textarea id={name} name={name} required={required} value={value} onChange={onChange} placeholder=" " rows={4} className={cn(inputClass, "resize-none")} />
      ) : (
        <input id={name} name={name} type={type} required={required} value={value} onChange={onChange} placeholder=" " className={inputClass} />
      )}
      <label
        htmlFor={name}
        className="eyebrow pointer-events-none absolute left-0 top-1 text-ink-muted transition-all duration-300 peer-placeholder-shown:top-7 peer-placeholder-shown:text-base peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:font-sans peer-focus:top-1 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-[0.18em] peer-focus:text-primary-ink"
      >
        {label}
        {required && " *"}
      </label>
      <span
        aria-hidden
        className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-primary transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] peer-focus:scale-x-100"
      />
    </motion.div>
  );
}

/* ── Export ───────────────────────────────────────────────────────────────── */

export const M = { H1, H2, H3, P, Img, Link: MLink, Icon, Card, Line: DrawLine, Marquee, Field };
