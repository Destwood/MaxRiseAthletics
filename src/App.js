import React, { useState, useEffect } from "react";
import Hero from "./components/Hero/Hero";
import SideText from "./components/SideText/SideText";
import Services from "./components/Services/Services";
import CardsList from "./components/CardsList/CardsList";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import Contact from "./components/Contact/Contact";
import "./App.css";
import "./components/header.css";

import img from "./assets/big.webp";
import test from "./assets/test.jpg";
import bgItem from "./assets/GymBg.jpg";

function App() {
  const [isMenuActive, SetIsMenuActive] = useState(false); // show burger or menu
  const [isBurgerChacked, SetisBurgerChacked] = useState(false); // burger opened
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const [showPopup, setShowPopup] = useState(false); // show popup

  const handleBurgerChange = (event) => {
    console.log("change button", isBurgerChacked);
    SetisBurgerChacked(event.target.checked);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024 && isBurgerChacked) {
        SetIsMenuActive(true);
      } else {
        SetIsMenuActive(false);
      }

      // popup delay
      setTimeout(() => {
        setShowPopup(true);
      }, 2000);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const opacity = scrollTop / 300;
      setScrollOpacity(opacity);
    };
    if (showPopup) {
      document.body.classList.add("disableScroll");
    } else {
      document.body.classList.remove("disableScroll");
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isBurgerChacked]);

  return (
    <div className="App">
      {/* header */}
      <header style={{ opacity: scrollOpacity }}>
        <div className="headerContainer">
          {/* logo */}
          <a href="/" className="logo">
            <p className="logoIcon">M</p>
            <p className="logoName">MaxRise-Athletics</p>
          </a>
          {/* logo */}

          {/* menu */}
          <ul className="links">
            <li className="linksItem">
              <a href="/" className="link">
                First
              </a>
            </li>
            <li className="linksItem">
              <a href="/" className="link">
                Second
              </a>
            </li>
            <li className="linksItem">
              <a href="/" className="link">
                Third
              </a>
            </li>
          </ul>
          {/* menu */}
          {/* burger */}
          <label className="burger" htmlFor="burger">
            <input type="checkbox" id="burger" onClick={handleBurgerChange} />
            <span></span>
            <span></span>
            <span></span>
          </label>
          {/* burger */}
        </div>
        {/* dropdown menu */}
        <div className={`dropdown ${isMenuActive ? "" : "showDropdown"}`}>
          <a href="/" className="dropdownLink">
            First
          </a>
          <a href="/" className="dropdownLink">
            Second
          </a>
          <a href="/" className="dropdownLink">
            Third
          </a>
          {/* dropdown menu */}
        </div>
      </header>
      {/* main */}
      <main>
        <Hero />
        {/* sideContainer */}
        <div className="sideContainer container">
          <h2 className="sideTitle title">Block Title</h2>
          <SideText
            titleText={"one"}
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
            unknown printer took a galley of type and scrambled it to make a type specimen book."
            imgSrc={img}
          />
          <SideText
            titleText={"two"}
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
            unknown printer took a galley of type and scrambled it to make a type specimen book."
            imgSrc={test}
          />
          <SideText
            titleText={"three"}
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
            unknown printer took a galley of type and scrambled it to make a type specimen book."
            imgSrc={img}
          />
        </div>
        {/* CardsList */}
        <div className="cardsContainer container">
          <h2 className="blockTitle title">Block Title</h2>
          <CardsList />
        </div>
        <div
          className="servicesContainer container"
          style={{ backgroundImage: `url(${bgItem})` }}
        >
          <Services />
        </div>
        <div className="contactContainer container">
          <Contact />
        </div>
      </main>
      {/* popup */}
      {showPopup && <Popup showPopup={showPopup} setShowPopup={setShowPopup} />}
      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
