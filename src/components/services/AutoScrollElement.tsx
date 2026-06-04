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

const TechItem: React.FC<{ icon: string; label: string }> = ({ icon, label }) => (
  <div className="flex items-center gap-2.5 md:gap-3 flex-shrink-0">
    <img
      src={icon}
      alt={label}                  
      aria-hidden="true"
      className="w-7 h-7 md:w-10 md:h-10 rounded-full object-contain  "
      onError={(e) => {
        (e.currentTarget as HTMLImageElement).style.display = "none";
      }}
    />  
    <span className="text-ink dark:text-white font-medium text-xs md:text-sm whitespace-nowrap">
      {label}
    </span>
  </div>
);

const AutoScrollElement: React.FC = () => {
  return (
    <div
      className="w-full bg-surface-alt dark:bg-dark-surface py-4 md:py-6 overflow-hidden group border-b  border-slate-200 dark:border-slate-700/50"
      role="marquee"
      aria-label="Technologies maîtrisées"
    >
      <div
        className="flex gap-6 md:gap-10 animate-marquee-left will-change-transform group-hover:[animation-play-state:paused]"
      >
        {/* Piste principale — accessible */}
        {techItems.map((item, i) => (
          <TechItem key={i} {...item} />
        ))}

        {/* Doublon pour loop seamless — masqué des AT */}
        <div aria-hidden="true" className="flex gap-6 md:gap-10 flex-shrink-0">
          {techItems.map((item, i) => (
            <TechItem key={i} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AutoScrollElement;