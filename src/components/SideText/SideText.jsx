import React from "react";
import style from "./SideText.module.css";

let toggle = false;

function SideText({ titleText, text, imgSrc }) {
  toggle = !toggle;

  return (
    <div
      className={`${style.SideTextWrapper} ${
        toggle ? style.rewersedWrapper : ""
      }`}
    >
      <img src={imgSrc} alt="here" className={style.img} />
      <div
        className={`${style.textContainer} ${
          toggle ? style.rewersedTextContainer : ""
        }`}
      >
        <p className={style.titleText}>{titleText}</p>
        <p className={style.text}>{text}</p>
      </div>
    </div>
  );
}

export default SideText;
