import React from "react";
import style from "./Card.module.css";

function LatestCard({ titleText, text, img }) {
  return (
    <div
      className={style.card}
      style={{
        backgroundImage: `${img}`,
      }}
    >
      {/* <div className={style.textContainer}>
        <h5 className={style.title}>{titleText}</h5>
        <p className={style.text}>{text}</p>
      </div> */}
    </div>
  );
}

export default LatestCard;