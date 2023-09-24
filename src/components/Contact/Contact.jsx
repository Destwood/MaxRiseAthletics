import React, { useState } from "react";
import style from "./Contact.module.css";

function Contact() {
  const [phone, setPhone] = useState(""); // Початкове значення пустого номеру

  const formatPhoneNumber = (input) => {
    // Забираємо всі символи, крім цифр
    const cleaned = input.replace(/\D/g, "");

    // Встановлюємо максимальну довжину номера
    const maxLength = 10;
    let formattedValue = cleaned.substring(0, maxLength);

    // Форматуємо номер за потрібним шаблоном
    if (formattedValue.length >= 1) {
      formattedValue = `+38(${formattedValue.slice(
        1,
        4
      )})${formattedValue.slice(4, 7)}-${formattedValue.slice(
        7,
        9
      )}-${formattedValue.slice(9)}`;
    }
    return formattedValue;
  };

  const handlePhoneChange = (event) => {
    const inputValue = event.target.value;
    const formattedValue = formatPhoneNumber(inputValue);
    setPhone(formattedValue);
  };

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
                type="text"
                name="phone"
                placeholder="Телефон"
                className={`${style.phone} + ${style.input}`}
                value={phone}
                onChange={handlePhoneChange}
                required
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
