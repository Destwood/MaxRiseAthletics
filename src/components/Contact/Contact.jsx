import React, { useState, useEffect } from "react";
import style from "./Contact.module.scss";

import bg from "../../assets/GymBg.png";
import bgBlack from "../../assets/GymBgBlack.png";
import phoneImg from "../../assets/phone.svg";
import inst from "../../assets/instagram.svg";
import telegram from "../../assets/telegram.svg";
import mail from "../../assets/mail.svg";

let number = "";
function Contact() {
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
    <div className={style.wrapper} id="order">
      <div className={style.bg} style={{ backgroundImage: `url(${bg})` }}>
        <div className={style.container}>
          <h2>
            Маєш <span>запитання</span>?
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
              <form
                method="POST"
                accept-charset="utf-8"
                target="_blank"
                action="https://www.liqpay.ua/api/3/checkout"
              >
                <input
                  type="hidden"
                  name="data"
                  value="eyJ2ZXJzaW9uIjozLCJhY3Rpb24iOiJwYXkiLCJhbW91bnQiOiI1IiwiY3VycmVuY3kiOiJVQUgiLCJkZXNjcmlwdGlvbiI6ItCc0ZbQuSDRgtC+0LLQsNGAIiwicHVibGljX2tleSI6InNhbmRib3hfaTczNjE1MzQxMTU4IiwibGFuZ3VhZ2UiOiJ1ayJ9"
                />
                <input
                  type="hidden"
                  name="signature"
                  value="VR8QEf/W1cQqyB49kibrouvHNls="
                />
                <button className={style.order}>
                  <img
                    src="https://static.liqpay.ua/buttons/logo-white.svg"
                    name="btn_text"
                    style={{
                      verticalAlign: "middle",
                    }}
                    alt=""
                  />
                  <span style={{ verticalAlign: "middle", marginLeft: "8px" }}>
                    Сплатити
                  </span>
                </button>
              </form>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
