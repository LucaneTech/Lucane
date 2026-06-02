import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ScrollProgress from "./ui/ScrollProgress";
import BackToTop from "./ui/BackToTop";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Technologies from "./pages/Technologies";
import Services from "./pages/services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import { ScrollToTop } from "./components/ScrollToTop";
import CursorEffect from "./ui/CursorEffect";
import PageLoader from "./ui/PageLoader";


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <PageLoader isLoading={isLoading} />
      <CursorEffect />
      <Layout>
        <Router>
          <ScrollToTop />
            <ScrollProgress />
            <BackToTop />

            <Routes>
              <Route path="/" element={<Navbar className="bg-white "/>}>
                <Route index element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/projets" element={<Projects />} />
                <Route path="/technologies" element={<Technologies />} />
                <Route path="/a-propos" element={<About />} />
                <Route path="/contact" element={<Contact/>} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>


        </Router>
        </Layout>
    </>
      );
}

export default App;