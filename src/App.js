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
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
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
