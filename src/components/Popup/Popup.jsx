import React from "react";
import style from "./Popup.module.css";

function Popup({ showPopup, setShowPopup }) {
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
              placeholder="Телефон"
              className={`${style.phone} + ${style.input}`}
              required
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
