import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Technologies from "./Pages/Technologies";

function App() {
  return (
    <>
      <Header />

      <div id="home" className="section show">
        <Home />
      </div>

      <div id="about" className="section show">
        <About />
      </div>

      <div id="projects" className="section show">
        <Projects />
      </div>

      <div id="technologies" className="section show">
        <Technologies />
      </div>

      <div id="contact" className="section show">
        <Contact />
      </div>

      <Footer />
    </>
  );
}

export default App;
