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
import sideText1 from "./assets/sideText1.png";
import sideText3 from "./assets/sideText3.PNG";
import bgItem from "./assets/GymBg.jpg";

function App() {
  const [isMenuActive, SetIsMenuActive] = useState(false); // show burger or menu
  const [isBurgerChacked, SetisBurgerChacked] = useState(false); // burger opened
  const [scrollOpacity, setScrollOpacity] = useState(0);
  const [showPopup, setShowPopup] = useState(false); // show popup

  const handleButton = () => {
    setShowPopup(true);
  };

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
            <li className="linksItem space">
              <a href="#about" className="link">
                Про нас
              </a>
            </li>
            <li className="linksItem space">
              <a href="#blocktitle" className="link">
                Результати
              </a>
            </li>
            <li className="linksItem space">
              <a href="#services" className="link">
                Послуги
              </a>
            </li>
            <li className="linksItem">
              <a href="#order" className="link">
                Замовити
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
            Про нас
          </a>
          <a href="/" className="dropdownLink">
            Результати
          </a>
          <a href="/" className="dropdownLink">
            Послуги
          </a>
          <a href="/" className="dropdownLink">
            Замовити
          </a>
          {/* dropdown menu */}
        </div>
      </header>
      {/* main */}
      <main>
        <Hero handleButtonClick={handleButton} />
        {/* sideContainer */}
        <div className="sideContainer container" id="about">
          <h2 className="sideTitle title">Про нас</h2>
          <SideText
            titleText={"Досвід"}
            text="Мене звати Максим Гончарук і я з впевненістю можу сказати, що є справжнім професіоналом у своїй галузі. 
            Завдяки 7-річному досвіду занять в тренажерному залі, мені вдалось вийти на рівень висококваліфікованого атлета."
            imgSrc={sideText1}
            side={0}
          />
          <SideText
            titleText={"Профейсійність"}
            text="На нашому сайті  MaxRise athletics я та команда, ділимось своїми знаннями та підходами до тренувань і харчування. Ви знайдете важливі поради, що допоможуть Вам побудувати міцне тіло і підтримувати ефективне харчування, необхідне для досягнення Ваших цілей."
            imgSrc={test}
            side={1}
          />
          <SideText
            titleText={"Вдосконалення"}
            text="Незалежно від Вашого рівня підготовки або спортивних амбіцій, ми переконані, 
            що з мотивацією і нашою допомогою, досягнення успіху - це лише питання часу. 
            Запрошуємо Вас долучатись і розпочати свій захоплюючий шлях до 
            здорового способу життя."
            imgSrc={sideText3}
            side={0}
          />
        </div>
        {/* CardsList */}
        <div className="cardsContainer container" id="blocktitle">
          <h2 className="blockTitle title">Результати</h2>
          <CardsList />
        </div>
        <div
          className="servicesContainer container"
          style={{ backgroundImage: `url(${bgItem})` }}
          id="services"
        >
          <Services />
        </div>
        <div className="contactContainer container" id="order">
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
