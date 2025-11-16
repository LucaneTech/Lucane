const MemoryGrid = () => {
  const images = [
    "images/home/memory1.jpeg",
    "images/home/memory2.jpeg",
    "images/home/memory3.jpeg",
    "images/home/memory4.jpeg",
    "images/home/memory5.jpeg",
    
    "images/home/memory6.jpeg",
  ];

  return (
    <div className="w-full flex justify-center p-8 mb-6">
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-3
          gap-6
          max-w-7xl
        "
      >
        {images.map((src, idx) => (
          <div key={idx} className="w-full">
            <img
              src={src}
              alt={`template ${idx}`}
              className="w-full h-auto rounded-lg object-cover  duration-750 hover:scale-105 shadow-lg hover:shadow-2xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemoryGrid;
