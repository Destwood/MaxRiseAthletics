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
        <h3 className={style.title}>Contuct us</h3>
        <form
          action="https://formspree.io/f/xknlgqvl"
          method="POST"
          className={style.form}
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            className={`${style.name} + ${style.input}`}
          />
          <input
            type="email"
            name="_replyto"
            placeholder="Email"
            className={`${style.mail} + ${style.input}`}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className={`${style.phone} + ${style.input}`}
          />
          <input
            type="text"
            name="message"
            placeholder="Your message"
            className={`${style.msg} + ${style.input}`}
          />
          <button type="submit" className={style.submit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Popup;
