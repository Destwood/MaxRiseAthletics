import React from "react";
import Card from "./Card/Card";
import style from "./Services.module.css";

import gym from "../../assets/gym.svg";
import phone from "../../assets/phone.svg";
import food from "../../assets/food.svg";
import clock from "../../assets/clock.svg";
import bgItem from "../../assets/GymBg.jpg";
function Services() {
  return (
    <div
      className={style.servicesWrapper}
      style={{ backgroundImage: `url(${bgItem})` }}
      id="services"
    >
      <h3 className={style.servicesTitle}>Послуги</h3>
      <div className={style.services}>
        <Card
          img={gym}
          titleText={"Тренування"}
          text={
            "Розбір вправ та їх корегування, щотижневий звіт, підбираємо розклад тренувань з урахуванням ваших потреб і рівня фізичної підготовки."
          }
        />
        <Card
          img={phone}
          titleText={"Консультації"}
          text={
            "Безкоштовна консультація, за якою ми визначимо, що потрібно для досягнення вашої цілі."
          }
        />
        <Card
          img={food}
          titleText={"Харчування"}
          text={
            "Складання плану харчування за визначений бюджет, щотижневий звіт, корегування плану в залежності від результату."
          }
        />
        <Card
          img={clock}
          titleText={"Контроль"}
          text={
            "Постійний контроль, звітність по харчуванню та тренуваннях, зв’язок з нашою командою, підтримка."
          }
        />

        <div className={style.line} />
        <div className={style.price}>Ціна - 2990 грн/міс</div>
      </div>
    </div>
  );
}

export default Services;
