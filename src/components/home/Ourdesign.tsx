interface DesignItem {
  id: number;
  imageSrc: string;
  alt: string;
  date: string;
  title: string;
  imageClassName?: string;
}

const designs: DesignItem[] = [
  {
    id: 1,
    imageSrc: "images/home/design1.jpg",
    alt: "Design UI UX d'une application de gestion d'une école",
    date: "Septembre 2025",
    title: "Application de Gestion Scolaire",
    imageClassName: "rounded-tr-4xl rounded-bl-4xl",
  },
  {
    id: 2,
    imageSrc: "images/home/design3.jpg",
    alt: "Design UI UX d'une plateforme e-commerce",
    date: "Octobre 2024",
    title: "Plateforme E-commerce Multi-vendeurs",
    imageClassName: "rounded-tr-4xl shadow-lg",
  },
  {
    id: 3,
    imageSrc: "images/home/design4.jpg",
    alt: "Design UI UX d'un site e-commerce de vente d'habits",
    date: "Décembre 2024",
    title: "Boutique en Ligne de Mode",
    imageClassName: "rounded-tr-4xl shadow-lg",
  },
  {
    id: 4,
    imageSrc: "images/home/design2.jpg",
    alt: "Design UI UX d'une application mobile de fitness",
    date: "Janvier 2025",
    title: "Application Mobile de Fitness & Coaching",
    imageClassName: "rounded-tr-4xl rounded-bl-4xl",
  },
];


const DesignCard = ({ imageSrc, alt, date, title, imageClassName }: DesignItem) => {
  return (
    <div className="flex flex-col items-start text-start p-6">
      <img
        src={imageSrc}
        alt={alt}
        loading="lazy"
        className={`mb-4 img-fluid max-w-xl w-full h-auto ${imageClassName}`}
      />
      <h2 className="text-xl md:text-2xl mb-2">{date}</h2>
      <p className="text-2xl md:text-3xl font-bold text-[#008080]">{title}</p>
    </div>
  );
};

const Ourdesign = () => {
  return (
    <section className="md:py-12">
      <h1 className="md:text-5xl text-3xl text-center mb-4 md:mb-12">
        Explorez nos{" "}
        <span className="text-[#008080] font-bold">Designs</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-8 mt-8 mb-16">
        {designs.map((design) => (
          <DesignCard key={design.id} {...design} />
        ))}
      </div>
    </section>
  );
};

export default Ourdesign;
