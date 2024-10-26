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

  const handleScroll = () => {
    const sections = document.querySelectorAll(".section");
    let currentSection = "home";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (window.scrollY >= sectionTop - sectionHeight / 4) {
        currentSection = section.getAttribute("id");
      }
    });

    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <div
        id="home"
        className={`section ${activeSection === "home" ? "show" : ""}`}
      >
        <Home />
      </div>

      <div
        id="about"
        className={`section ${activeSection === "about" ? "show" : ""}`}
      >
        <About />
      </div>

      <div
        id="projects"
        className={`section ${activeSection === "projects" ? "show" : ""}`}
      >
        <Projects />
      </div>

      <div
        id="technologies"
        className={`section ${activeSection === "technologies" ? "show" : ""}`}
      >
        <Technologies />
      </div>

      <div
        id="contact"
        className={`section ${activeSection === "contact" ? "show" : ""}`}
      >
        <Contact />
      </div>

      <Footer />
    </>
  );
}

export default App;
