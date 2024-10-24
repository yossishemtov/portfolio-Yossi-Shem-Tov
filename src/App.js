import React, { useState, useEffect } from "react"; 
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Technologies from "./Pages/Technologies";
import useScrollAnimations from "./hooks/useScrollAnimations"; 

function App() {
  useScrollAnimations(); 

  const [activeSection, setActiveSection] = useState("home");

 
  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]');
    
    anchors.forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
  
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
  
        setActiveSection(targetId); 
  
        if (targetSection) {

          const headerOffset = 55; 
          const elementPosition = targetSection.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;
  
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth", 
          });
        }
      });
    });
  
    return () => {
      anchors.forEach((anchor) => {
        anchor.removeEventListener("click", null);
      });
    };
  }, []);
  


  return (
    <>
      <Header />
      <div id="home" className={`section ${activeSection === "home" ? "show" : ""}`}>
        <Home />
      </div>

      <div id="about" className={`section ${activeSection === "about" ? "show" : ""}`}>
        <About />
      </div>

      <div id="projects" className={`section ${activeSection === "projects" ? "show" : ""}`}>
        <Projects />
      </div>

      <div id="technologies" className={`section ${activeSection === "technologies" ? "show" : ""}`}>
        <Technologies />
      </div>

      <div id="contact" className={`section ${activeSection === "contact" ? "show" : ""}`}>
        <Contact />
      </div>

      <Footer />
    </>
  );
}

export default App;
