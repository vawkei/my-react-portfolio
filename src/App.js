import Layout from "./components/layout/Layout";
import { Routes, Route,useLocation } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";
import { AnimatePresence } from "framer-motion";


function App() {

  const location = useLocation()

  return (
    <Layout>
      <AnimatePresence mode="wait" >
      <Routes location={location} key={location.key}>
         <Route  path="/" element={<HomePage />} />
         <Route path="/about" element={<AboutPage />} /> 
         <Route path="/contact" element={<ContactPage />} /> 
         <Route path="/projects" element={<ProjectsPage />} /> 
         <Route path="/skills" element={<SkillsPage />} /> 
      </Routes>
      </AnimatePresence> 
    </Layout>
  );
}

export default App;
