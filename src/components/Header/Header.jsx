import React, { useState, useEffect } from "react";
import style from "./Header.module.scss";

import logo from "../../assets/logo.png";
import telegram from "../../assets/telegram.svg";
import instagram from "../../assets/instagram.svg";
import phone from "../../assets/phone.svg";
import mail from "../../assets/mail.svg";
import star from "../../assets/star.svg";
import logo2 from "../../assets/logo.jpg";
function Header() {
  const [isMenuActive, SetIsMenuActive] = useState(false);
  const [isBurgerChacked, SetisBurgerChacked] = useState(false);

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
      // popup delay
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isBurgerChacked]);

  return (
    <header>
      <div className={style.headerContainer}>
        {/* logo */}
        <a href="/" className={style.logo}>
          <img className={style.logoImg} src={logo} alt=""></img>
          <img className={style.logo2} src={logo2} alt=""></img>
        </a>
        {/* logo */}

        {/* menu */}
        <ul className={style.links}>
          <li className={`${style.linksItem}`}>
            <a href="#hero" className={style.main}>
              Головна
            </a>
          </li>
          <li className={`${style.linksItem}`}>
            <a href="#about" className={style.link}>
              Про нас
            </a>
          </li>
          <li className={`${style.linksItem}`}>
            <a href="#experience" className={style.link}>
              Досвід
            </a>
          </li>
          <li className={style.linksItem}>
            <a href="#services" className={style.link}>
              Послуги
            </a>
          </li>
          <li className={style.linksItem}>
            <a href="#calculator" className={style.link}>
              Калькулятор
            </a>
          </li>
          <li className={`${style.linksItem} ${style.space}`}>
            <a href="#order" className={style.link}>
              Замовити
            </a>
          </li>
          <li className={`${style.linksItem} ${style.social}`}>
            <a
              href="https://instagram.com/maxrise_athletics?igshid=MzRlODBiNWFlZA=="
              className={style.link}
              target="blank"
            >
              <img src={instagram} alt="inst" className={style.linkLogo} />
            </a>
            <a
              href="https://t.me/MaxRise_Athletics"
              className={style.link}
              target="blank"
            >
              <img src={telegram} alt="telegram" className={style.linkLogo} />
            </a>
            <a href="tel:098 908 54 50" className={style.link}>
              <img src={phone} alt="inst" className={style.linkLogo} />
            </a>
            <a href="mailto:maxrise.athletics@gmail.com" className={style.link}>
              <img src={mail} alt="telegram" className={style.linkLogo} />
            </a>
          </li>
        </ul>
        {/* menu */}
        {/* burger */}
        <label className={style.burger} htmlFor="burger">
          <input
            type="checkbox"
            id="burger"
            onChange={handleBurgerChange}
            checked={isBurgerChacked}
          />
          <span></span>
          <span></span>
          <span></span>
        </label>
        {/* burger */}
      </div>
      {/* dropdown menu */}
      <div className={`${isMenuActive ? style.dropdown : style.showDropdown}`}>
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
          href="#results"
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
        <div className="">
          <div className={style.socialLinks}>
            <div className={style.telegram + " " + style.socialLink}>
              <a
                href="https://t.me/MaxRise_Athletics"
                className={style.link}
                target="blank"
              >
                <img src={telegram} alt="telegram" className={style.linkLogo} />
              </a>
            </div>

            <div className={style.mail + " " + style.socialLink}>
              <a
                href="https://instagram.com/maxrise_athletics?igshid=MzRlODBiNWFlZA=="
                className={style.link}
                target="blank"
              >
                <img src={instagram} alt="inst" className={style.linkLogo} />
              </a>
            </div>
            <div className={style.mail + " " + style.socialLink}>
              <a href="tel:098 908 54 50" className={style.link}>
                <img src={phone} alt="inst" className={style.linkLogo} />
              </a>
            </div>
            <div className={style.mail + " " + style.socialLink}>
              <a
                href="mailto:maxrise.athletics@gmail.com"
                className={style.link}
              >
                <img src={mail} alt="telegram" className={style.linkLogo} />
              </a>
            </div>
          </div>
          <a
            href="#order"
            className={style.button}
            onClick={() => {
              SetisBurgerChacked(false);
              SetIsMenuActive(false);
            }}
          >
            <img src={star} alt="" className={style.linkLogo} />
            Записатись
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
