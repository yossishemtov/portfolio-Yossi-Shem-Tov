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
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute("id");
          setActiveSection(sectionId); 
          entry.target.classList.add("show"); 
        } else {
          entry.target.classList.remove("show");
        }
      });
    }, { threshold: 0.5 }); 

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
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
