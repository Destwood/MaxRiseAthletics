import React from "react";
import style from "./Experience.module.scss";

import experienceImg from "../../assets/GymBg.png";
import trophy from "../../assets/trophy.svg";

function Experience() {
  return (
    <div className={style.wrapper} id="experience">
      <div className={style.container}>
        <div className={style.experience}>
          <div className={style.contantContainer}>
            <h3>Більш ніж 7 років досвіду</h3>
            <div className={style.text}>
              Завдяки своєму життєвому досвіду в тренуваннях та вивченню
              харчування, я є ідеальним прикладом того, як здоровий спосіб життя
              може перетворити ваше тіло та розкрити ваш потенціал. Я не лише
              довів свою здатність до досягнення максимальних результатів, але й
              надихнув інших до покращення самих себе.
            </div>
            <div className={style.video}>
              <img src={experienceImg} alt="" />
            </div>
            <div className={style.desc}>
              Твої результати в твоїх руках. Бути кращим це вибір!
            </div>
            <button className={style.button}>Долучитись</button>
          </div>
        </div>
        <div className={style.achivements}>
          <div className={style.contantContainer}>
            <div className={style.item}>
              <p className={style.number}>7</p>
              <p className={style.desc}>років досвіду</p>
            </div>
            <div className={style.item}>
              <p className={style.number}>100%</p>
              <p className={style.desc}>гарантія успіху</p>
            </div>
            <div className={style.item}>
              <p className={style.number}>148</p>
              <p className={style.desc}>задоволених клієнтів</p>
            </div>
            <div className={style.item}>
              <p className={style.number}>28</p>
              <p className={style.desc}>Днів на місяць</p>
            </div>
            <div className={style.trophyContainer}>
              <img className={style.trophy} src={trophy} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
