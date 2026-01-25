import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import LayoutWrapper from "./components/Layout/LayoutWrapper";
import ProjectSection from "./components/Projects/ProjectSection";
import Skills from "./components/Skills/Skills";
import { projects, skills } from "./Data";
function App() {

  
  return (
    <>
      <LayoutWrapper>
        {/* hero */}
        <Hero/>

        {/* About */}
         <About/>

        {/* skills */}
        <Skills skills={skills} />

        {/* Projects */}
        <ProjectSection projects={projects} />

        {/* Get in touch */}
        <Contact/>

        {/* footer */}
        <Footer/>
      </LayoutWrapper>
    </>
  );
}

export default App;
