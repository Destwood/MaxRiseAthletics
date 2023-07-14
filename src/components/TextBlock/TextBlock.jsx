import React from "react";
import style from "./TextBlock.module.css";

function TextBlock({ titleText, text }) {
  return (
    <div className={style.wrapper}>
      <h3 className={style.title}>{titleText}</h3>
      <p className={style.text}>{text}</p>
    </div>
  );
}

export default TextBlock;
