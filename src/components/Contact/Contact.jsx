import React from "react";
import style from "./Contact.module.css";

function Contact() {
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
                placeholder="Телефон"
                className={`${style.phone} + ${style.input}`}
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
