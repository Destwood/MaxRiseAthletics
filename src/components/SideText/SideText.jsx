import React from "react";
import style from "./SideText.module.css";

let counter = 0;

function SideText({ titleText, text, imgSrc }) {
  counter += 0.5;
  let toggle;
  if (counter % 2 === 0) {
    toggle = true;
  } else {
    toggle = false;
  }
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
