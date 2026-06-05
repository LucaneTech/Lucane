import React from "react";
import { motion } from "framer-motion";

const LOCATIONS = [
  { name: "France", cx: 506, cy: 114 },
  { name: "Congo BZ", cx: 542, cy: 262 },
  { name: "Sénégal", cx: 451, cy: 209 },
  { name: "International", cx: 294, cy: 137 },
] as const;

const CONTINENTS = [
  // North America
  "M 75,82 L 290,82 L 302,108 L 295,178 L 262,228 L 222,242 L 178,218 L 128,192 L 75,145 Z",
  // South America
  "M 215,248 L 298,248 L 318,272 L 324,362 L 294,418 L 256,425 L 220,398 L 204,348 L 200,290 Z",
  // Europe
  "M 460,82 L 548,82 L 562,110 L 546,158 L 498,170 L 462,160 L 448,132 Z",
  // Africa
  "M 452,178 L 562,178 L 575,215 L 578,305 L 552,390 L 514,418 L 482,413 L 455,378 L 446,288 L 448,218 Z",
  // Asia
  "M 562,78 L 825,78 L 838,108 L 828,198 L 792,265 L 728,308 L 662,318 L 598,295 L 562,258 L 550,198 L 552,132 Z",
  // Australia
  "M 724,328 L 824,322 L 840,352 L 830,402 L 792,422 L 752,422 L 726,396 L 716,358 Z",
];

const GeographicReach: React.FC = () => (
  <section className="py-20 px-6 bg-transparent overflow-hidden">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <span className="inline-block text-xs uppercase tracking-[0.2em] font-medium text-primary mb-3">
          Portée mondiale
        </span>
        <h2 className="text-3xl lg:text-4xl font-bold text-ink dark:text-white">
          Notre empreinte internationale
        </h2>
        <p className="text-ink-muted dark:text-slate-400 mt-3 max-w-md mx-auto text-sm">
          Des clients en France, en Afrique et à l'international.
        </p>
      </motion.div>

      <div className="relative w-full" style={{ paddingTop: "50%" }}>
        <svg
          viewBox="0 0 1000 500"
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Continents */}
          {CONTINENTS.map((d, i) => (
            <path
              key={i}
              d={d}
              className="fill-slate-200 dark:fill-slate-700 stroke-slate-300 dark:stroke-slate-600"
              strokeWidth="1"
            />
          ))}

          {/* Connection lines from France to each other location */}
          {LOCATIONS.slice(1).map((loc, i) => (
            <motion.path
              key={loc.name}
              d={`M ${LOCATIONS[0].cx},${LOCATIONS[0].cy} L ${loc.cx},${loc.cy}`}
              stroke="#008080"
              strokeWidth="1"
              strokeDasharray="4 4"
              strokeOpacity="0.5"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.4 + i * 0.2, ease: "easeInOut" }}
            />
          ))}

          {/* Dots with pulse */}
          {LOCATIONS.map((loc, i) => (
            <g key={loc.name}>
              <motion.circle
                cx={loc.cx}
                cy={loc.cy}
                r={10}
                fill="#008080"
                fillOpacity={0.15}
                animate={{ r: [8, 16, 8], fillOpacity: [0.2, 0, 0.2] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "easeInOut",
                }}
              />
              <motion.circle
                cx={loc.cx}
                cy={loc.cy}
                r={5}
                fill="#008080"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.15 }}
              />
              <motion.text
                x={loc.cx + 8}
                y={loc.cy - 8}
                fontSize="11"
                fontFamily="Sen, system-ui, sans-serif"
                fontWeight="500"
                className="fill-ink-muted dark:fill-slate-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.15 }}
              >
                {loc.name}
              </motion.text>
            </g>
          ))}
        </svg>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-6 mt-4">
        {LOCATIONS.map((loc) => (
          <div key={loc.name} className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary inline-block" />
            <span className="text-sm text-ink-muted dark:text-slate-400">
              {loc.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GeographicReach;
