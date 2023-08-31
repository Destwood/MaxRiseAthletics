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
  const [showPopup, setShowPopup] = useState(false); // show popup

  const handleButton = () => {
    setShowPopup(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setShowPopup(true);
    }, 2000);

    if (showPopup) {
      document.body.classList.add("disableScroll");
    } else {
      document.body.classList.remove("disableScroll");
    }
  }, []);

  return (
    <div className="App">
      <Header />

      <main>
        <Hero handleButtonClick={handleButton} />
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
