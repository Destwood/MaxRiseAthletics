import React, { useState, useEffect } from "react";
import style from "./Footer.module.scss";

import bg from "../../assets/GymBg.png";
import phoneImg from "../../assets/phone.svg";
import inst from "../../assets/instagram.svg";
import telegram from "../../assets/telegram.svg";
import mail from "../../assets/mail.svg";
import footerImg from "../../assets/footerImg.webp";
import logo from "../../assets/logoTemp.png";
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
    <footer className={style.wrapper} style={{ backgroundImage: `url(${bg})` }}>
      <div className={style.container}>
        <h2>
          <span>Зв'язок</span> з нами
        </h2>
        <div className={style.contactContainer}>
          <div className={style.contacts}>
            <div className={style.contactsItem}>
              {/* <p className={style.linkName}>098 &#40;908&#41; 54 50</p> */}
              <img
                src={phoneImg}
                alt="inst"
                className={`${style.logo} ${style.phone}`}
              />
              <div className={style.ContactInfo}>
                <h5>Телефон:</h5>
                <a href="tel:098 908 54 50" className={style.link}>
                  +38 098 908 54 50
                </a>
              </div>
            </div>
            <div className={style.contactsItem}>
              <img
                src={mail}
                alt="inst"
                className={`${style.logo} ${style.mail}`}
              />
              <div className={style.ContactInfo}>
                <h5>Пошта:</h5>
                <a
                  href="mailto:maxrise.athletics@gmail.com"
                  className={style.link}
                >
                  MaxRise.Athletics@gmail.com
                </a>
              </div>
            </div>
            <div className={style.contactsItem}>
              <img
                src={inst}
                alt="inst"
                className={`${style.logo} ${style.instagram}`}
              />
              <div className={style.ContactInfo}>
                <h5>Instagram:</h5>
                <a
                  href="https://instagram.com/maxrise_athletics?igshid=MzRlODBiNWFlZA=="
                  className={style.link}
                  target="blank"
                >
                  maxrise_athletics
                </a>
              </div>

              <div className=""></div>
            </div>
            <div className={style.contactsItem}>
              <img
                src={telegram}
                alt="telegram"
                className={`${style.logo} ${style.telegram}`}
              />
              <div className={style.ContactInfo}>
                <h5>Telegram:</h5>
                <a
                  href="https://t.me/MaxRise_Athletics"
                  className={style.link}
                  target="blank"
                >
                  @MaxRise_Athletics
                </a>
              </div>
            </div>
          </div>
          <form
            action="https://formspree.io/f/xknlgqvl"
            method="POST"
            className={style.form}
          >
            <input
              type="text"
              name="name"
              placeholder="Ім'я"
              className={`${style.name} + ${style.input}`}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Електронна пошта"
              className={`${style.mail} + ${style.input}`}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="+38 (___) ___-__-__"
              className={`${style.phone} + ${style.input}`}
              required
              value={phone}
              onChange={handlePhoneChange}
              onKeyDown={handleKeyDown}
            />
            <textarea
              type="text"
              name="message"
              placeholder="Ваше повідомлення (необов‘язково)"
              className={`${style.msg} + ${style.input}`}
            ></textarea>
            <button type="submit" className={style.submit}>
              Підтвердити
            </button>
          </form>
        </div>
      </div>
      <div className={style.footer}>
        <img className={style.footerImg} src={footerImg} alt="" />
        <div className={style.footerContent}>
          <img className={style.mainLogo} src={logo} alt="" />
          <div className={style.footerLinks}>
            <a href="#about" className={style.main}>
              Головна
            </a>
            <a href="#results" className={style.link}>
              Про нас
            </a>
            <a href="#services" className={style.link}>
              Досвід
            </a>
            <a href="#order" className={style.link}>
              Послуги
            </a>
            <a href="#order" className={style.link}>
              Калькулятор
            </a>
            <a href="#order" className={style.link}>
              Замовити
            </a>
          </div>
          <div className={style.footerSocial}>
            <a href="#services" className={style.link}>
              <img src={inst} className={style.footerLogo} alt="" />
            </a>
            <a href="#order" className={style.link}>
              <img src={telegram} className={style.footerLogo} alt="" />
            </a>
            <a href="#order" className={style.link}>
              <img src={phoneImg} className={style.footerLogo} alt="" />
            </a>
            <a href="#order" className={style.link}>
              <img src={mail} className={style.footerLogo} alt="" />
            </a>
          </div>
          <p>MaxRise ©. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
