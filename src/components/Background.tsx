// src/components/Background.tsx
import React from "react";

interface BackgroundProps {
  accentColorClass?: string; // ex: "from-emerald-500 to-teal-500"
  className?: string;
}

const Background: React.FC<BackgroundProps> = ({
  accentColorClass = "from-emerald-500 to-teal-500",
  className = "",
}) => {
  return (
    <div
      aria-hidden
      className={`absolute inset-0 -z-10 overflow-hidden ${className}`}
    >
      {/* Halo dégradé */}
      <div
        className={`pointer-events-none absolute -top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-br ${accentColorClass} opacity-10 blur-3xl`}
      />

      {/* Motif en grille (radial dots) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.06)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:16px_16px]" />
    </div>
  );
};

export default Background;