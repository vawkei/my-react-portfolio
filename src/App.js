import Layout from "./components/layout/Layout";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";

function App() {
  return (
    <Layout>
      <Routes>
         <Route  path="/" element={<HomePage />} />
         <Route path="/about" element={<AboutPage />} /> 
         <Route path="/contact" element={<ContactPage />} /> 
         <Route path="/projects" element={<ProjectsPage />} /> 
         <Route path="/skills" element={<SkillsPage />} /> 
      </Routes>
    </Layout>
  );
}

export default App;
