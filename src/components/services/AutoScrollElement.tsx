const techItems = [
  { icon: "/icons/react.png", label: "React" },
  { icon: "/icons/typescript.png", label: "TypeScript" },
  { icon: "/icons/nodejs.png", label: "Node.js" },
  { icon: "/icons/postgresql.png", label: "PostgreSQL" },
  { icon: "/icons/mongodb.png", label: "MongoDB" },
  { icon: "/icons/docker.png", label: "Docker" },
  { icon: "/icons/django.png", label: "Django" },
  { icon: "/icons/aws.png", label: "AWS" },
  { icon: "/icons/tailwindcss.png", label: "Tailwind CSS" },
];

// Duplicate for seamless loop
const scrollItems = [...techItems, ...techItems];

const AutoScrollElement: React.FC = () => {
  return (
    <div className="w-full bg-surface-alt py-6 overflow-hidden group">
      <div className="flex gap-8 animate-marquee-left group-hover:[animation-play-state:paused]">
        {scrollItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 flex-shrink-0 bg-white border border-ink-faint/30 rounded-xl px-5 py-3 shadow-sm"
          >
            <img
              src={item.icon}
              alt={item.label}
              className="w-6 h-6 object-contain"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
            <span className="text-ink font-medium text-sm whitespace-nowrap">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoScrollElement;
