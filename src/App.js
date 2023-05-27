import React from "react";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About"
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Social from "./components/Social";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Social />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
