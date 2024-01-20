import React, { useState, useEffect } from "react";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";
// import Popup from "./components/Popup/Popup";
import Calculator from "./components/Calculator/Calculator";
import Experience from "./components/Experience/Experience";
import "./App.scss";

import Header from "./components/Header/Header";
import UpButton from "./components/UpButton/UpButton";

function App() {
  // const [showPopup, setShowPopup] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowPopup(true);
  //   }, 2000);
  // }, []);

  // useEffect(() => {
  //   if (showPopup) {
  //     document.documentElement.classList.add("htmlOverflowHidden");
  //   } else {
  //     document.documentElement.classList.remove("htmlOverflowHidden");
  //   }
  // }, [showPopup]);

  return (
    <div className="App">
      <Header />

      <main>
        <Hero />
        <About />
        <Experience />
        <Calculator />
        <Services />
      </main>

      {/* {showPopup && <Popup showPopup={showPopup} setShowPopup={setShowPopup} />} */}
      <UpButton />
      <Footer />
    </div>
  );
}

export default App;
