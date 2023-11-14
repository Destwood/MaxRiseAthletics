import React from "react";
import style from "./Hero.module.css";

function Hero() {
  return (
    <div className={style.heroWrapper}>
      <div className={style.heroContent}>
        <h3 className={style.title}>Готові до змін?</h3>
        <p className={style.text}>
          MaxRise - це про здоров’я, тож результат гарантовано отримують всі.
          Незалежно від вашого досвіду та фізичної підготовки, ви знайдете
          відповідні рекомендації для розвитку вашого тіла та духу.
        </p>
        <a href="#order" className={style.btn}>
          Замовити
        </a>
      </div>
    </div>
  );
}

export default Hero;
