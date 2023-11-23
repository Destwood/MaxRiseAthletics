import React from "react";
import style from "./Hero.module.scss";

import img from "../../assets/sideText1.png";
import checked from "../../assets/checked.svg";

function Hero() {
  return (
    <div className={style.wrapper}>
      <div className={style.hero}>
        <div className={style.imgContainer}>
          <img className={style.img} src={img} alt="" />
        </div>

        <div className={style.content}>
          <h1>
            <span>Персональний </span>тренер це запорука<span> успіху</span>
          </h1>
          <div className={style.decs}>
            MaxRise - це про здоров’я, тож результат гарантовано отримують всі.
            Незалежно від вашого досвіду та фізичної підготовки, ви знайдете
            відповідні рекомендації для розвитку вашого тіла та духу.
          </div>
          <ul className={style.list}>
            <li>
              <img src={checked} alt="asd" />
              Персональна програма тренувань
            </li>
            <li>
              <img src={checked} alt="asd" />
              Збалансоване та ефективне харчування
            </li>
            <li>
              <img src={checked} alt="asd" />
              Онлайн підтримка 7 днів на тиждень
            </li>
          </ul>
          <button className={style.order}>Замовити</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
