import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import type { Project } from "../data/projects";
import { cn } from "./utils";

const FRAME_W = 1440;
const FRAME_H = 900;

/** Aperçu réel d'un site (iframe à l'échelle), chargé seulement à l'approche. */
function LivePreview({ url, title }: { url: string; title: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const near = useInView(ref, { once: true, margin: "500px" });
  const [scale, setScale] = useState(0.4);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setScale(e.contentRect.width / FRAME_W));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative w-full overflow-hidden bg-canvas-alt" style={{ height: FRAME_H * scale }}>
      {near && (
        <iframe
          src={url}
          title={`Aperçu – ${title}`}
          loading="lazy"
          scrolling="no"
          tabIndex={-1}
          className="pointer-events-none absolute left-0 top-0 border-0"
          style={{ width: FRAME_W, height: FRAME_H, transform: `scale(${scale})`, transformOrigin: "top left" }}
        />
      )}
    </div>
  );
}

/** Affiche de repli (site non affichable en iframe) : titre géant sur fond irisé. */
function Poster({ project }: { project: Project }) {
  return (
    <div className="relative flex aspect-[16/10] w-full items-end overflow-hidden bg-[radial-gradient(circle_at_20%_20%,#3ce0d0_0%,transparent_45%),radial-gradient(circle_at_80%_30%,#5b6cff_0%,transparent_50%),radial-gradient(circle_at_50%_100%,#ff7a3d_0%,transparent_55%),#0b0b0a] p-8">
      <span className="font-display text-[clamp(1.75rem,3.6vw,3rem)] font-extrabold leading-none tracking-[-0.04em] text-white">{project.title}</span>
    </div>
  );
}

/**
 * Visuel d'un projet dans une fenêtre de navigateur arrondie :
 * vidéo de démonstration, sinon aperçu réel du site, sinon affiche.
 */
export default function ProjectVisual({ project, className, chrome = true }: { project: Project; className?: string; chrome?: boolean }) {
  return (
    <div className={cn("overflow-hidden rounded-md border border-glass-line bg-panel", className)}>
      {chrome && (
        <div className="flex items-center gap-2 bg-canvas-alt px-5 py-3">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 truncate rounded-full bg-panel px-4 py-1 text-xs text-ink-muted">
            {project.liveUrl ?? project.title.toLowerCase()}
          </span>
        </div>
      )}
      <div className="transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]">
        {project.videoUrl ? (
          <video src={project.videoUrl} className="aspect-[16/10] w-full object-cover" autoPlay muted loop playsInline preload="none" />
        ) : project.liveUrl && project.frameable !== false ? (
          <LivePreview url={project.liveUrl} title={project.title} />
        ) : (
          <Poster project={project} />
        )}
      </div>
    </div>
  );
}
