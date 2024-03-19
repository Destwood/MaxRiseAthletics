import React, { useState, useEffect } from "react";
import style from "./Popup.module.scss";
let number = "";

function Popup({ showPopup, setShowPopup }) {
  const [phone, setPhone] = useState("+38 (___) ___-__-__");
  const [changed, setChanged] = useState("");
  const mask = "+38 (___) ___-__-__";

  useEffect(() => {
    setPhone(changed);
  }, [changed]);

  function handlePhoneChange(event) {
    if (number.length <= 9) {
      const str = event.target.value.replace(/\D/g, "");
      const lastChar = str[str.length - 1];
      number = number + lastChar;
      number = number.replace(/\D/g, "");

      processMaskedValue(number);
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
    <div
      className={`${style.popupWrapper} ${showPopup ? "" : style.hide}`}
      onClick={() => {
        setShowPopup(false);
      }}
    >
      <div className={style.popupContent} onClick={(e) => e.stopPropagation()}>
        <h3 className={style.title}>Замовити</h3>

        <div
          className={style.close}
          onClick={() => {
            setShowPopup(false);
          }}
        >
          Х
        </div>
        <form
          action="https://formspree.io/f/xknlgqvl"
          method="POST"
          className={style.form}
        >
          <div className={style.inputContainer}>
            <input
              type="text"
              name="name"
              placeholder="Ім'я"
              className={`${style.name} + ${style.input}`}
              required
            />
            <input
              type="text"
              name="surname"
              placeholder="Прізвище"
              className={`${style.surname} + ${style.input}`}
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
          </div>
          <textarea
            type="text"
            name="message"
            placeholder="Ваше повідомлення"
            className={`${style.msg} + ${style.input}`}
          ></textarea>
          <button type="submit" className={style.submit}>
            Підтвердити
          </button>
        </form>
      </div>
    </div>
  );
}

export default Popup;
