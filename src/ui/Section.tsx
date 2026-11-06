import type { ReactNode } from "react";
import { cn } from "./utils";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  /** default = canvas · alt = canvas-alt · inverse = fond inversé (noir en clair, clair en sombre) */
  tone?: "default" | "alt" | "inverse";
  /** Retire le conteneur 1440 px (sections pleine largeur). */
  bleed?: boolean;
  labelledBy?: string;
}

const TONES = {
  default: "bg-canvas text-ink",
  alt: "bg-canvas-alt text-ink",
  inverse: "bg-canvas-inverse text-on-inverse",
};

/** Section standard : rythme vertical commun, conteneur 1440 px, fond selon le ton. */
export default function Section({ children, id, className, tone = "default", bleed = false, labelledBy }: SectionProps) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={cn("relative py-24 md:py-32", TONES[tone], className)}>
      {bleed ? children : <div className="mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-16">{children}</div>}
    </section>
  );
}
