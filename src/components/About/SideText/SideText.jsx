import React from "react";
import style from "./SideText.module.css";

function SideText({ title, text, imgSrc, side }) {
  return (
    <div
      className={`${style.SideTextWrapper} ${
        side ? style.rewersedWrapper : ""
      }`}
    >
      <img src={imgSrc} alt="here" className={style.img} />
      <div
        className={`${style.textContainer} ${
          side ? style.rewersedTextContainer : ""
        }`}
      >
        <p className={style.title}>{title}</p>
        <p className={style.text}>{text}</p>
      </div>
    </div>
  );
}

export default SideText;
