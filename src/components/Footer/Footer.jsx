import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./Footer.module.scss";

import phoneImg from "../../assets/phone.svg";
import inst from "../../assets/instagram.svg";
import telegram from "../../assets/telegram.svg";
import mail from "../../assets/mail.svg";
import footerImg from "../../assets/footerImg.webp";
import logo from "../../assets/logo.jpg";
let number = "";
function Footer() {
  const [phone, setPhone] = useState("");
  const [changed, setChanged] = useState("");
  const mask = "+38 (___) ___-__-__";

  useEffect(() => {
    setPhone(changed);
  }, [changed]);

  function handlePhoneChange(event) {
    if (number.length <= 9) {
      const str = event.target.value.replace(/\D/g, "");
      const lastChar = str[str.length - 1];

      if (!isNaN(event.target.value[event.target.value.length - 1])) {
        number = number + lastChar;
        number = number.replace(/\D/g, "");
        processMaskedValue(number);
      }
    }
  }

  function handleKeyDown(event) {
    if (event.key === "Backspace") {
      event.preventDefault();
      if (number.length > 0) {
        number = number.slice(0, -1);
        processMaskedValue(number);
      }
    }
  }

  function processMaskedValue(inputValue) {
    let maskedArray = mask.split("");
    let num = inputValue.split("");

    let counter = 0;
    for (let i = 0; i < maskedArray.length; i++) {
      if (maskedArray[i] === "_" && num[counter]) {
        maskedArray[i] = num[counter];
        counter++;
      }
    }
    maskedArray = maskedArray.join("");
    setChanged(maskedArray);
  }

  return (
    <footer className={style.wrapper} id="order">
      <div className={style.footer}>
        {/* <img className={style.footerImg} src={footerImg} alt="" /> */}
        <div className={style.footerContent}>
          <img className={style.mainLogo} src={logo} alt="" />
          <div className={style.footerLinks}>
            <a href="#hero" className={style.main}>
              Головна
            </a>
            <a href="#about" className={style.link}>
              Про нас
            </a>
            <a href="#experience" className={style.link}>
              Досвід
            </a>
            <a href="#calculator" className={style.link}>
              Калькулятор
            </a>
            <a href="#services" className={style.link}>
              Послуги
            </a>
            <a href="#order" className={style.link}>
              Замовити
            </a>
          </div>
          <div className={style.footerSocial}>
            <a
              href="https://instagram.com/maxrise_athletics?igshid=MzRlODBiNWFlZA=="
              target="blank"
              className={style.link}
            >
              <img src={inst} className={style.footerLogo} alt="" />
            </a>
            <a
              href="https://t.me/MaxRise_Athletics"
              target="blank"
              className={style.link}
            >
              <img src={telegram} className={style.footerLogo} alt="" />
            </a>
            <a href="tel:098 908 54 50" className={style.link}>
              <img src={phoneImg} className={style.footerLogo} alt="" />
            </a>
            <a href="mailto:maxrise.athletics@gmail.com" className={style.link}>
              <img src={mail} className={style.footerLogo} alt="" />
            </a>
          </div>
          <p className={style.rights}>
            <Link to={"/info"}>
              © 2023 MaxRise-Athletics. All rights reserved.
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
