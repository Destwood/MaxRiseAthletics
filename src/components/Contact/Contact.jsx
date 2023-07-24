import React from "react";
import style from "./Contact.module.css";

function Contact() {
  return (
    <div className={style.contactWrapper}>
      <h3 className={style.contactTitle}>Contact Us</h3>
      <form
        action="https://formspree.io/f/xknlgqvl"
        method="POST"
        className={style.form}
      >
        <div className={style.inputContainer}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className={`${style.name} + ${style.input}`}
          />
          <input
            type="text"
            name="surname"
            placeholder="Surname"
            className={`${style.surname} + ${style.input}`}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className={`${style.mail} + ${style.input}`}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className={`${style.phone} + ${style.input}`}
          />
        </div>
        <textarea
          type="text"
          name="message"
          placeholder="Your message"
          className={`${style.msg} + ${style.input}`}
        ></textarea>
        <button type="submit" className={style.submit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
