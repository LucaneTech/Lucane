import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const heroSlides = [
  { id: 1, image: "/images/hero1.jpg", title: "Tech Insights 2025", subtitle: "Boostez vos compétences et vos projets" },
  { id: 2, image: "/images/hero2.jpg", title: "Développement Web Moderne", subtitle: "Frameworks, bonnes pratiques et astuces" },
  { id: 3, image: "/images/hero3.jpg", title: "Applications Mobiles Performantes", subtitle: "Créez des apps rapides et sécurisées" },
];

const articles = [
  {
    id: 1,
    title: "Comment optimiser vos applications React",
    excerpt: "Découvrez les meilleures pratiques pour booster les performances de vos apps React...",
    image: "/images/blog1.jpg",
    date: "2025-11-03",
    author: "Alice Martin",
    tags: ["React", "Performance"]
  },
  {
    id: 2,
    title: "Les tendances 2025 en développement web",
    excerpt: "Une analyse des technologies et frameworks qui domineront le web cette année...",
    image: "/images/blog2.jpg",
    date: "2025-10-28",
    author: "John Doe",
    tags: ["Web", "Tendances"]
  },
  {
    id: 3,
    title: "Sécurité des applications mobiles",
    excerpt: "Comment sécuriser vos apps mobiles et protéger vos utilisateurs contre les failles...",
    image: "/images/blog3.jpg",
    date: "2025-10-15",
    author: "Emma Dupont",
    tags: ["Mobile", "Sécurité"]
  },
  {
    id: 4,
    title: "Top 10 des librairies JS incontournables",
    excerpt: "Explorez les bibliothèques JS les plus utiles pour développer plus vite et plus proprement...",
    image: "/images/blog4.jpg",
    date: "2025-09-20",
    author: "Lucas Bernard",
    tags: ["JavaScript", "Librairies"]
  },
  {
    id: 5,
    title: "UX Design et développement web",
    excerpt: "Comment combiner UX design et développement pour créer des expériences mémorables...",
    image: "/images/blog5.jpg",
    date: "2025-09-05",
    author: "Sophie Laurent",
    tags: ["UX", "Design"]
  }
];

const categories = ["All", "React", "Web", "Mobile", "JavaScript", "UX"];

const Blog: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Carousel autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const filteredArticles = selectedCategory === "All"
    ? articles
    : articles.filter(article => article.tags.includes(selectedCategory));

  return (
    <div className="flex flex-col items-center px-4 md:px-12 py-12 space-y-16 mt-32">
      {/* Hero Carousel */}
      <div className="relative w-full max-w-6xl h-96 rounded-xl overflow-hidden shadow-lg">
        {heroSlides.map((slide, idx) => (
          <motion.div
            key={slide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: idx === currentSlide ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white px-4 md:px-12">
              <h1 className="text-3xl md:text-5xl font-bold">{slide.title}</h1>
              <p className="mt-2 text-lg md:text-2xl">{slide.subtitle}</p>
            </div>
          </motion.div>
        ))}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition ${idx === currentSlide ? "bg-white" : "bg-gray-400"}`}
            />
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-4 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full font-medium ${selectedCategory === cat ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"} transition`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {filteredArticles.map((article, idx) => (
          <motion.div
            key={article.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer group"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { delay: idx * 0.2, duration: 0.6 } }
            }}
          >
            <div className="overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6 flex flex-col space-y-3">
              <h2 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition">{article.title}</h2>
              <p className="text-gray-600 text-sm">{article.excerpt}</p>
              <div className="flex justify-between text-gray-400 text-xs">
                <span>{article.author}</span>
                <span>{article.date}</span>
              </div>
              <div className="flex gap-2 mt-2 flex-wrap">
                {article.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Quote / Insight */}
      <motion.div
        className="bg-gray-100 p-12 rounded-xl text-center text-gray-800 max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xl md:text-2xl font-semibold italic">"La technologie ne se contente pas de créer des solutions, elle transforme les idées en réalité."</p>
        <span className="mt-4 block text-gray-500">– Équipe DevStart</span>
      </motion.div>

      {/* Stats */}
      <motion.div
        className="flex justify-around w-full max-w-5xl flex-wrap gap-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <h3 className="text-3xl font-bold text-blue-600">120+</h3>
          <p>Articles publiés</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-blue-600">5k+</h3>
          <p>Abonnés newsletter</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-blue-600">3k+</h3>
          <p>Commentaires et interactions</p>
        </div>
      </motion.div>

      {/* Newsletter CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-blue-600 text-white rounded-xl p-8 max-w-3xl w-full text-center space-y-4"
      >
        <h2 className="text-2xl md:text-3xl font-bold">Restez informé !</h2>
        <p>Inscrivez-vous à notre newsletter pour recevoir tous nos articles et astuces en avant-première.</p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-4">
          <input 
            type="email" 
            placeholder="Votre email" 
            className="px-4 py-3 rounded-lg text-gray-800 w-full md:w-2/3 focus:outline-none"
          />
          <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition">
            S'abonner
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Blog;
