import React from "react";
import style from "./Card.module.css";

function Card({ titleText, text, img }) {
  return (
    <div className={style.cardWrapper}>
      <div className={style.card}>
        <div className={style.imgContainer}>
          <img src={img} alt="asd" className={style.img} />
        </div>

        <h5 className={style.title}>{titleText}</h5>
        <p className={style.text}>{text}</p>
      </div>
    </div>
  );
}

export default Card;
