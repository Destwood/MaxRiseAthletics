import React from "react";
import style from "./SideText.module.css";

function SideText({ titleText, text, imgSrc, side }) {
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
        <p className={style.titleText}>{titleText}</p>
        <p className={style.text}>{text}</p>
      </div>
    </div>
  );
}

export default SideText;
