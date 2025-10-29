import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ScrollProgress from "./ui/ScrollProgress";
import BackToTop from "./ui/BackToTop";
// import PageLoaderWrapper from "./components/PageLoaderWrapper";
import { Contact } from "lucide-react";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Projects from "./pages/Projects";
import Technologies from "./pages/Technologies";
import Services from "./pages/services";


function App() {
  return (
  
   
        <Router>
         {/* <PageLoaderWrapper> */}
            <ScrollProgress />
            <BackToTop />
            <Routes>
              <Route path="/" element={<Navbar className="bg-white "/>}>
                <Route index element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/technologies" element={<Technologies />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
              
                
              </Route>
            </Routes>
      {/* </PageLoaderWrapper> */}
        </Router>
     
     
      );
}

export default App;