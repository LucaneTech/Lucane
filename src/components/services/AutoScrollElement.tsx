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
    <div className="w-full bg-main-color-opacity mx-auto py-4 overflow-hidden mt-10 shadow-lg">
      <div className="whitespace-nowrap animate-scroll flex gap-9 items-center">
        {Elements.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className={`inline-block bg-white shadow-lg rounded-lg px-5 md:px-8 py-3 text-xl font-semibold main-color mx-2 transition-transform duration-300 hover:scale-105`}
          >
            <a href="#">{item.name}</a>
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