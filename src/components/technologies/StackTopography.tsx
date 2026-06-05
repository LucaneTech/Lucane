// src/components/technologies/StackTopography.tsx
import React, { useRef, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";

interface ChipData {
  label: string;
  tooltip: string;
}

interface LayerData {
  name: string;
  chips: ChipData[];
}

const LAYERS: LayerData[] = [
  {
    name: "Surface",
    chips: [
      { label: "React", tooltip: "UI composants & state management" },
      { label: "Tailwind CSS", tooltip: "Design system utilitaire" },
      { label: "React Native", tooltip: "Apps mobiles cross-platform" },
    ],
  },
  {
    name: "Logique",
    chips: [
      { label: "Node.js", tooltip: "API REST & temps réel" },
      { label: "Django", tooltip: "Backend Python robuste & admin" },
      { label: "Python", tooltip: "Data processing & scripting" },
    ],
  },
  {
    name: "Données & Infra",
    chips: [
      { label: "PostgreSQL", tooltip: "Base relationnelle principale" },
      { label: "MongoDB", tooltip: "Documents & données flexibles" },
      { label: "AWS", tooltip: "Cloud hosting & services" },
      { label: "Docker", tooltip: "Conteneurisation & déploiements" },
    ],
  },
];

const CONNECTIONS: [string, string][] = [
  ["React", "Node.js"],
  ["React", "Django"],
  ["Node.js", "PostgreSQL"],
  ["Node.js", "MongoDB"],
  ["Django", "PostgreSQL"],
  ["AWS", "Docker"],
];

interface SvgLine {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  length: number;
}

interface ChipProps {
  chip: ChipData;
  delay: number;
}

const ChipElement = React.forwardRef<HTMLDivElement, ChipProps>(
  ({ chip, delay }, ref) => {
    const [showTooltip, setShowTooltip] = useState(false);
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35, delay }}
        className="relative"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <div className="rounded-md border border-primary/25 bg-primary/10 text-white/80 font-medium px-4 py-2 text-sm cursor-default select-none">
          {chip.label}
        </div>
        {showTooltip && (
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-dark-elevated text-white text-[11px] px-3 py-1.5 rounded-md shadow-sm whitespace-nowrap pointer-events-none z-20">
            {chip.tooltip}
          </div>
        )}
      </motion.div>
    );
  }
);
ChipElement.displayName = "ChipElement";

const StackTopography: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const chipRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const [lines, setLines] = useState<SvgLine[]>([]);
  const [ready, setReady] = useState(false);

  const calculateLines = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const containerRect = container.getBoundingClientRect();
    const newLines: SvgLine[] = [];

    for (const [fromLabel, toLabel] of CONNECTIONS) {
      const fromEl = chipRefs.current.get(fromLabel);
      const toEl = chipRefs.current.get(toLabel);
      if (!fromEl || !toEl) continue;

      const fromRect = fromEl.getBoundingClientRect();
      const toRect = toEl.getBoundingClientRect();

      const x1 = fromRect.left + fromRect.width / 2 - containerRect.left;
      const y1 = fromRect.top + fromRect.height / 2 - containerRect.top;
      const x2 = toRect.left + toRect.width / 2 - containerRect.left;
      const y2 = toRect.top + toRect.height / 2 - containerRect.top;
      const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

      newLines.push({ x1, y1, x2, y2, length });
    }

    setLines(newLines);
    setReady(true);
  }, []);

  useEffect(() => {
    // Wait for chips to animate in before calculating
    const timer = setTimeout(calculateLines, 1100);
    const observer = new ResizeObserver(calculateLines);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [calculateLines]);

  return (
    <section className="py-20 px-6 bg-dark overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs uppercase tracking-[0.2em] font-mono text-primary mb-3">
            Architecture
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Topographie du stack
          </h2>
        </motion.div>

        <div ref={containerRef} className="relative space-y-10">
          {/* SVG overlay — drawn after chips appear */}
          {ready && (
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ zIndex: 0 }}
            >
              {lines.map((line, i) => (
                <motion.line
                  key={i}
                  x1={line.x1}
                  y1={line.y1}
                  x2={line.x2}
                  y2={line.y2}
                  stroke="rgba(0,128,128,0.25)"
                  strokeWidth="1"
                  strokeDasharray={line.length}
                  initial={{ strokeDashoffset: line.length }}
                  whileInView={{ strokeDashoffset: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 + i * 0.05 }}
                />
              ))}
            </svg>
          )}

          {/* Layer rows */}
          {LAYERS.map((layer, layerIdx) => (
            <div key={layer.name} className="flex items-center gap-6 relative z-10">
              <div className="w-36 flex-shrink-0">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary/50">
                  {layer.name}
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                {layer.chips.map((chip, chipIdx) => (
                  <ChipElement
                    key={chip.label}
                    chip={chip}
                    delay={layerIdx * 0.2 + chipIdx * 0.05}
                    ref={(el) => {
                      if (el) chipRefs.current.set(chip.label, el);
                      else chipRefs.current.delete(chip.label);
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StackTopography;
