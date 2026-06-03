import React from "react";

interface LivePreviewCardProps {
  liveUrl?: string;
  image?: string;
  title: string;
  bgColor?: string;
}

const LivePreviewCard: React.FC<LivePreviewCardProps> = ({ liveUrl, image, title, bgColor }) => {
  const hasLiveUrl = Boolean(liveUrl && liveUrl !== "#");
  const displayUrl = hasLiveUrl
    ? liveUrl!.replace(/^https?:\/\//, "")
    : "aperçu-statique";

  return (
    <div className={`overflow-hidden rounded-t-xl ${bgColor ?? "bg-slate-50"}`}>
      {/* Barre navigateur simulée */}
      <div className="bg-slate-100 dark:bg-slate-700 px-3 py-2 flex items-center gap-2 border-b border-slate-200 dark:border-slate-600">
        <div className="flex gap-1.5 flex-shrink-0">
          <span className="w-3 h-3 rounded-full bg-red-400" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 min-w-0 bg-white dark:bg-slate-600 rounded px-3 py-1 text-xs text-slate-500 dark:text-slate-300 truncate font-mono">
          {displayUrl.length > 45 ? displayUrl.substring(0, 45) + "…" : displayUrl}
        </div>
      </div>

      {/* Zone de contenu */}
      <div className="relative h-44">
        {hasLiveUrl ? (
          <>
            <iframe
              src={liveUrl}
              title={title}
              className="w-full h-full pointer-events-none"
              style={{ width: "125%", height: "125%", transform: "scale(0.8)", transformOrigin: "top left" }}
              loading="lazy"
              sandbox="allow-same-origin allow-scripts"
            />
            <div className="absolute top-2 right-2 pointer-events-none">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-primary text-white text-xs font-semibold rounded-full shadow-md">
                <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                Live
              </span>
            </div>
          </>
        ) : (
          <>
            <img
              src={image}
              alt={title}
              className="w-full h-full object-contain"
            />
            <div className="absolute top-2 right-2">
              <span className="px-2.5 py-1 bg-slate-600/80 text-white text-xs font-medium rounded-full shadow backdrop-blur-sm">
                Aperçu statique
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LivePreviewCard;
