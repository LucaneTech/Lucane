import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ScrollProgress from "./ui/ScrollProgress";
import BackToTop from "./ui/BackToTop";
// import PageLoaderWrapper from "./components/PageLoaderWrapper";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Technologies from "./pages/Technologies";
import Services from "./pages/services";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";
import { ScrollToTop } from "./components/ScrollToTop";


function App() {
  return (
  
      <Layout>
        <Router>
         {/* <PageLoaderWrapper> */}
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
            </Routes>
            
      {/* </PageLoaderWrapper> */}
        </Router>
        </Layout>
     
     
      );
}

export default App;