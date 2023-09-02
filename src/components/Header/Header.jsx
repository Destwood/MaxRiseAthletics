import React, { useState, useEffect } from "react";
import style from "./Header.module.css";

import logo from "../../assets/logo.png";
function Header() {
  const [isMenuActive, SetIsMenuActive] = useState(false); // show burger or menu
  const [isBurgerChacked, SetisBurgerChacked] = useState(false); // burger opened
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const handleBurgerChange = (event) => {
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
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const opacity = scrollTop / 300;
      setScrollOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isBurgerChacked]);

  return (
    <header style={{ opacity: scrollOpacity }}>
      <div className={style.headerContainer}>
        {/* logo */}
        <a href="/" className={style.logo}>
          <img className={style.logoImg} src={logo} alt=""></img>

          <p className={style.logoName}>MaxRise-Athletics</p>
        </a>
        {/* logo */}

        {/* menu */}
        <ul className={style.links}>
          <li className={`${style.linksItem} ${style.space}`}>
            <a href="#about" className={style.link}>
              Про нас
            </a>
          </li>
          <li className={`${style.linksItem} ${style.space}`}>
            <a href="#blocktitle" className={style.link}>
              Результати
            </a>
          </li>
          <li className={`${style.linksItem} ${style.space}`}>
            <a href="#services" className={style.link}>
              Послуги
            </a>
          </li>
          <li className={style.linksItem}>
            <a href="#order" className={style.link}>
              Замовити
            </a>
          </li>
        </ul>
        {/* menu */}
        {/* burger */}
        <label className={style.burger} htmlFor="burger">
          <input type="checkbox" id="burger" onClick={handleBurgerChange} />
          <span></span>
          <span></span>
          <span></span>
        </label>
        {/* burger */}
      </div>
      {/* dropdown menu */}
      <div
        className={`${style.dropdown} ${
          isMenuActive ? "" : style.showDropdown
        }`}
      >
        <a
          href="#about"
          className={style.dropdownLink}
          onClick={() => {
            SetisBurgerChacked(false);
            SetIsMenuActive(false);
          }}
        >
          Про нас
        </a>
        <a
          href="#blocktitle"
          className={style.dropdownLink}
          onClick={() => {
            SetisBurgerChacked(false);
            SetIsMenuActive(false);
          }}
        >
          Результати
        </a>
        <a
          href="#services"
          className={style.dropdownLink}
          onClick={() => {
            SetisBurgerChacked(false);
            SetIsMenuActive(false);
          }}
        >
          Послуги
        </a>
        <a
          href="#order"
          className={style.dropdownLink}
          onClick={() => {
            SetisBurgerChacked(false);
            SetIsMenuActive(false);
          }}
        >
          Замовити
        </a>
        {/* dropdown menu */}
      </div>
    </header>
  );
}

export default Header;
