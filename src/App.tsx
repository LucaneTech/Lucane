import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import { ThemeProvider } from "./theme/ThemeProvider";
import SmoothScroll from "./motion/SmoothScroll";
import PageTransition from "./motion/PageTransition";
import ScrollProgress from "./ui/ScrollProgress";
import BackToTop from "./ui/BackToTop";
import Cursor from "./ui/Cursor";
import Intro from "./ui/Intro";
import WhatsAppFab from "./ui/WhatsAppFab";

// Pages chargées à la demande : le premier affichage ne télécharge que l'accueil.
const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const Projects = lazy(() => import("./pages/Projects"));
const Technologies = lazy(() => import("./pages/Technologies"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const CaseStudy = lazy(() => import("./pages/CaseStudy"));
const NotFound = lazy(() => import("./pages/NotFound"));
// Banc d'essai des animations — développement uniquement
const MotionLab = import.meta.env.DEV ? lazy(() => import("./pages/MotionLab")) : null;

function App() {
  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        <Intro />
        <Cursor />
        <Layout>
          <Router>
            <SmoothScroll>
              <ScrollProgress />
              <PageTransition />
              <BackToTop />
              <WhatsAppFab />
              <Suspense fallback={<div className="min-h-screen bg-canvas" />}>
                <Routes>
                  <Route path="/" element={<Navbar />}>
                    <Route index element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/realisations" element={<Projects />} />
                    <Route path="/realisations/:slug" element={<CaseStudy />} />
                    <Route path="/projets" element={<Navigate to="/realisations" replace />} />
                    <Route path="/technologies" element={<Technologies />} />
                    <Route path="/a-propos" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    {MotionLab && <Route path="/__motion" element={<MotionLab />} />}
                  </Route>
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </SmoothScroll>
          </Router>
        </Layout>
      </MotionConfig>
    </ThemeProvider>
  );
}

export default App;
