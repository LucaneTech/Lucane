interface ElementProp {
  id: number;
  name: string;
}


const Elements: ElementProp[] = [
  { id: 1, name: "Innovation" },
  { id: 2, name: "Agilité" },
  { id: 3, name: "Tech Stack moderne" },
  { id: 4, name: "Collaboration" },
  { id: 5, name: "Vision à long terme" },
  { id: 6, name: "Agilité" },
  { id: 7, name: "Tech Stack moderne" },
  { id: 8, name: "Collaboration" },
  { id: 9, name: "Vision à long terme" },
];


const AutoScrollElement: React.FC = () => {
  return (
    <div className="w-full mx-auto py-4 overflow-hidden mt-10 shadow-lg mb-8">
      <div className="whitespace-nowrap animate-scroll flex gap-9 items-center">
        {Elements.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className={`inline-block outline-1 outline-offset-5 outline-gray-300 dark:outline-gray-700 dark:bg-main-color-opacity   shadow-2xl hover:shadow-[#008080] rounded-lg px-5 md:px-8 py-3 text-[#008080] text-xl font-semibold  mx-2 transition-transform duration-300 hover:scale-105 cursor-pointer`}
          >
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 6s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default AutoScrollElement;