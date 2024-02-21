import React from "react";
import style from "./Services.module.scss";

import meal from "../../assets/meal.svg";
import timer from "../../assets/timer2.svg";
import plan from "../../assets/plan.svg";
import fitness from "../../assets/fitness.svg";
import cardio from "../../assets/cardio.svg";
import weight from "../../assets/dumbell.svg";

function Services() {
  return (
    <div className={style.wrapper}>
      <h2 className={style.sectionTitle}>Про нас</h2>
      <div className={style.container}>
        <div className={style.main}>
          <div className={style.top}>
            <p className={style.slogan}>Створіть тіло своєї мрії</p>
            <h3>Прогресуй</h3>
          </div>
          {/* Order button */}
          <div className={style.middle}>
            <span className={style.month}>₴ </span>3990
            <p className={style.monthly}>/місяць</p>
          </div>
          {/*  */}
          <div className={style.bottom}>
            <p className={style.bottomDesc}>
              Стань <span>учасником</span>
            </p>

            <form
              method="POST"
              accept-charset="utf-8"
              target="_blank"
              action="https://www.liqpay.ua/api/3/checkout"
            >
              <input
                type="hidden"
                name="data"
                value="eyJ2ZXJzaW9uIjozLCJhY3Rpb24iOiJwYXkiLCJhbW91bnQiOiI1IiwiY3VycmVuY3kiOiJVQUgiLCJkZXNjcmlwdGlvbiI6ItCc0ZbQuSDRgtC+0LLQsNGAIiwicHVibGljX2tleSI6InNhbmRib3hfaTczNjE1MzQxMTU4IiwibGFuZ3VhZ2UiOiJ1ayJ9"
              />
              <input
                type="hidden"
                name="signature"
                value="VR8QEf/W1cQqyB49kibrouvHNls="
              />
              <button className={style.order}>
                <img
                  src="https://static.liqpay.ua/buttons/logo-white.svg"
                  name="btn_text"
                  style={{
                    verticalAlign: "middle",
                  }}
                  alt=""
                />
                <span style={{ verticalAlign: "middle", marginLeft: "8px" }}>
                  Сплатити
                </span>
              </button>
            </form>
          </div>
        </div>
        <div className={style.details}>
          <div className={style.grid}>
            <div className={style.gridItem}>
              <img className={style.icon} src={meal} alt="" />
              <div className="">
                <h4>Харчування</h4>
                <p>Різноманітні та здорові страви для смачного харчування</p>
              </div>
            </div>
            <div className={style.gridItem}>
              <img className={style.icon} src={plan} alt="" />
              <div className="">
                <h4>План</h4>
                <p>
                  Персональний графік, створений під твої цілі та можливості
                </p>
              </div>
            </div>
            <div className={style.gridItem}>
              <img className={style.icon} src={cardio} alt="" />
              <div className="">
                <h4>Кардіо</h4>
                <p>Ефективні вправи для здоров'я серця та енергії</p>
              </div>
            </div>
            <div className={style.gridItem}>
              <img className={style.icon} src={timer} alt="" />
              <div className="">
                <h4>Ефективність</h4>
                <p>Контроль часу та оптимізація занять</p>
              </div>
            </div>

            <div className={style.gridItem}>
              <img className={style.icon} src={weight} alt="" />
              <div className="">
                <h4>Сила</h4>
                <p>Тренування для досягнення нових результатів</p>
              </div>
            </div>
            <div className={style.gridItem}>
              <img className={style.icon} src={fitness} alt="" />
              <div className="">
                <h4>Фігура</h4>
                <p>Створення омрієної фігури</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
