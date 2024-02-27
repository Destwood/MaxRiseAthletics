import React from "react";
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
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />

      {/* {showPopup && <Popup showPopup={showPopup} setShowPopup={setShowPopup} />} */}
      <UpButton />
    </div>
  );
}

export default App;
