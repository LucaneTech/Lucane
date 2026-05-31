import { motion, type Variants } from "framer-motion";
import Button from "../../ui/Button";

/* -------------------- Assets -------------------- */
const IMAGES = {
  topLeft:
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1470",
  bottomRight:
    "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1470",
};

const VIDEO_SRC =
  "images/services/heroVideo.mp4";

/* -------------------- Animations -------------------- */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const mediaAnimation: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

/* -------------------- Media Components -------------------- */
type MediaProps = {
  src: string;
  className?: string;
};

const HeroImage = ({ src, className = "" }: MediaProps) => (
  <motion.img
    src={src}
    alt="Hero visual"
    loading="lazy"
    variants={mediaAnimation}
    className={`
      object-cover rounded-2xl
       outline-1 outline-gray-300 dark:outline-gray-600
      outline-offset-8 md:outline-offset-16
      shadow-[0_25px_60px_-15px_rgba(0,128,128,0.8)]
      ${className}
    `}
  />
);

const HeroVideo = ({ src, className = "" }: MediaProps) => (
  <motion.video
    src={src}
    autoPlay
    loop
    muted
    playsInline
    preload="auto"
    variants={mediaAnimation}
    className={`
      w-full object-cover rounded-2xl
   outline-1 outline-gray-300 dark:outline-gray-600
      outline-offset-8 md:outline-offset-16
      shadow-[0_25px_60px_-15px_rgba(0,128,128,0.8)]
      ${className}
    `}
  />
);

/* -------------------- Hero Section -------------------- */
const HeroSection = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="relative mt-12 flex flex-col items-center justify-center overflow-hidden px-4 text-center text-gray-700"
    >
      {/* Tagline */}
      <motion.div
        variants={fadeUp}
        className="mb-6"
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#008080]/30 bg-[#008080]/10 text-sm font-semibold text-[#008080]">
          <span className="w-2 h-2 rounded-full bg-[#008080] animate-pulse" />
          Agence B2B · Depuis 2023
        </span>
      </motion.div>

      {/* Title */}
      <motion.h1
        variants={fadeUp}
        className="max-w-4xl text-3xl font-bold text-gray-800 sm:text-5xl md:text-6xl dark:text-white"
      >
        L’expertise technique au service de{" "}
          <span className="text-[#008080]">votre croissance.</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        variants={fadeUp}
        className="mt-6 max-w-xl text-gray-600 leading-relaxed dark:text-gray-200"
      >
        Nous concevons, développons et faisons évoluer des solutions digitales
        sur mesure — web, mobile et cloud — pour des entreprises qui veulent croître sans compromis.
      </motion.p>

      {/* Buttons */}
      <motion.div
        variants={fadeUp}
        className="flex flex-col items-center gap-4 pt-6 sm:flex-row"
      >
        <Button
          label="Découvrez nos services"
          changeColor="primary"
          to="/services"
        />
        <Button
          label="Contactez-nous"
          changeColor="secondary"
          to="/contact"
        />
      </motion.div>

      {/* Media */}
      <div className="relative mt-24 mb-48 w-full max-w-4xl">
        {/* Center video */}
        <HeroVideo src={VIDEO_SRC} className="h-[500px]" />

        {/* Top left image */}
        <motion.div
          variants={mediaAnimation}
          className="absolute -top-12 -left-56 hidden md:block"
        >
          <HeroImage src={IMAGES.topLeft} className="h-[300px] w-full" />
        </motion.div>

        {/* Bottom right image */}
        <motion.div
          variants={mediaAnimation}
          className="absolute -bottom-32 -right-56 hidden md:block"
        >
          <HeroImage src={IMAGES.bottomRight} className="h-[300px] w-full" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
