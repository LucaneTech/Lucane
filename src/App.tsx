import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Trainings from "./pages/Trainings";
import Admissions from "./pages/Admissions";
import Actualities from "./pages/Actualities";
import Contact from "./pages/Contact";
import ScrollProgress from "./ui/ScrollProgress";
import BackToTop from "./ui/BackToTop";
import PageLoaderWrapper from "./components/PageLoaderWrapper";


function App() {
  return (
  
   
        <Router>
         <PageLoaderWrapper>
            <ScrollProgress />
            <BackToTop />
            <Routes>
              <Route path="/" element={<Navbar />}>
                <Route index element={<Home />} />
                <Route path="/a-propos" element={<About />} />
                <Route path="/formations" element={<Trainings />} />
                <Route path="/admissions" element={<Admissions />} />
                <Route path="/actualites" element={<Actualities />} />
                <Route path="/contact" element={<Contact />} />
              
                
              </Route>
            </Routes>
      </PageLoaderWrapper>
        </Router>
     
     
      );
}

export default App;