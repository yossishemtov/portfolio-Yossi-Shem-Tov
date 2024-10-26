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
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    let lastScrollY = window.scrollY;
    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY ? "down" : "up");
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", updateScrollDirection);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.getAttribute("id");

          if (
            entry.isIntersecting &&
            !entry.target.classList.contains("show")
          ) {
            setActiveSection(sectionId);
            entry.target.classList.add("show");
          } else if (!entry.isIntersecting && scrollDirection === "down") {
            entry.target.classList.remove("show");
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -30% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [scrollDirection]);

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
