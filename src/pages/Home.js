import React from "react";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Services from "../components/Services/Services";
// import Popup from "../components/Popup/Popup";
import Calculator from "../components/Calculator/Calculator";
import Experience from "../components/Experience/Experience";
import Contact from "../components/Contact/Contact";
function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Calculator />
      <Services />
      <Contact />
    </>
  );
}

export default Home;
