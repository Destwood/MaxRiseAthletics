import React, { useState, useEffect } from "react";
import SideText from "./components/SideText/SideText";
import TextBlock from "./components/TextBlock/TextBlock";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Latest from "./components/Latest/Latest";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import "./App.css";
import "./components/header.css";

import img from "./assets/big.webp";
import test from "./assets/test.jpg";

function App() {
  const [isMenuActive, SetIsMenuActive] = useState(false);
  const [isBurgerChacked, SetisBurgerChacked] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleBurgerChange = (event) => {
    console.log("change button", isBurgerChacked);
    SetisBurgerChacked(event.target.checked);
  };
  const openPopup = () => {
    setShowPopup(true);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024 && isBurgerChacked) {
        SetIsMenuActive(true);
      } else {
        SetIsMenuActive(false);
      }
      setTimeout(() => {
        setShowPopup(true);
      }, 2000);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isBurgerChacked]);

  return (
    <div className="App">
      <div className="wrapper">
        {/* header */}
        <div className="container">
          <header>
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
                <input
                  type="checkbox"
                  id="burger"
                  onClick={handleBurgerChange}
                />
                <span></span>
                <span></span>
                <span></span>
              </label>
              {/* burger */}
            </div>
          </header>
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
          </div>
          {/* dropdown menu */}
        </div>
        {/* main */}
        <main>
          {/* SideText */}
          <div className="container">
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
          {/* TextBlock */}
          <div className="container">
            <TextBlock
              titleText="Title text"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />
          </div>
          {/* Services */}
          <div className="container">
            <Services />
          </div>
          {/* About */}
          <div className="container">
            <About />
          </div>
          {/* TextBlock */}
          <div className="container" onClick={openPopup}>
            <h3 className="contact">Contact us</h3>
          </div>
          {/* Latest */}
          <Latest />
        </main>
        {/* main */}
        {showPopup && (
          <Popup showPopup={showPopup} setShowPopup={setShowPopup} />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
