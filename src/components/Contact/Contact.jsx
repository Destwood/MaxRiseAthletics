import React, { useState, useEffect } from "react";
import style from "./Contact.module.css";
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
      number = number + lastChar;
      number = number.replace(/\D/g, "");
      console.log(number);

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
    <div className={style.contactWrapper} id="order">
      <div className={style.contactContent}>
        <h3 className={style.contactTitle}>Замовити</h3>
        <form
          action="https://formspree.io/f/xknlgqvl"
          method="POST"
          className={style.form}
        >
          <div className={style.inputContainer}>
            <div className={style.inputInfo}>
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
          </div>
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
        <div className={style.info}>
          *звертайтесь за додатковою інформацією та консультацією
        </div>
      </div>
    </div>
  );
}

export default Contact;
