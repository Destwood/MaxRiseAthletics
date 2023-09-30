import React, { useState, useEffect } from "react";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Results from "./components/Result/Result";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import Contact from "./components/Contact/Contact";
import "./App.css";

import Header from "./components/Header/Header";

function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowPopup(true);
    }, 2000);
  }, []);

  useEffect(() => {
    if (showPopup) {
      document.documentElement.classList.add("htmlOverflowHidden");
    } else {
      document.documentElement.classList.remove("htmlOverflowHidden");
    }
  }, [showPopup]);

  return (
    <div className="App">
      <Header />

      <main>
        <Hero />
        <About />
        <Results />
        <Services />
        <Contact />
      </main>

      {showPopup && <Popup showPopup={showPopup} setShowPopup={setShowPopup} />}

      <Footer />
    </div>
  );
}

export default App;
