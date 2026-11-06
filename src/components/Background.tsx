// Fond global : grille fixe très discrète (remplace le halo dégradé et le motif à points).
import GridLines from "../ui/GridLines";

interface BackgroundProps {
  /** @deprecated conservé pour compatibilité, sans effet */
  accentColorClass?: string;
  className?: string;
}

export default function Background({ className = "" }: BackgroundProps) {
  return (
    <div aria-hidden className={`pointer-events-none fixed inset-0 -z-10 bg-canvas ${className}`}>
      <GridLines columns={4} className="opacity-60" />
    </div>
  );
}
