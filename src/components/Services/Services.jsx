import React from "react";
import style from "./Services.module.scss";

import meal from "../../assets/meal.svg";
import timer from "../../assets/timer2.svg";
import plan from "../../assets/plan.svg";
import fitness from "../../assets/fitness.svg";
import cardio from "../../assets/cardio.svg";
import weight from "../../assets/dumbell.svg";
import yes from "../../assets/yes.svg";
import no from "../../assets/no.svg";

function Services() {
  return (
    <div className={style.wrapper} id="services">
      <h2 className={style.sectionTitle}>Послуги</h2>
      <div className={style.container}>
        {/* <div className={style.main}>
          <div className={style.top}>
            <p className={style.slogan}>Створіть тіло своєї мрії</p>
            <h3>Прогресуй</h3>
          </div>
      
          <div className={style.middle}>
            <span className={style.month}>₴ </span>3990
            <p className={style.monthly}>/місяць</p>
          </div>
       
          <div className={style.bottom}>
            <p className={style.bottomDesc}>
              Стань <span>учасником</span>
              <a href="#order" className={style.order}>
                Замовити
              </a>
            </p>
          </div>
        </div> */}
        <div className={style.serviceColumn}>
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
              <p>Персональний графік, створений під твої цілі та можливості</p>
            </div>
          </div>
          <div className={style.gridItem}>
            <img className={style.icon} src={cardio} alt="" />
            <div className="">
              <h4>Кардіо</h4>
              <p>Ефективні вправи для здоров'я серця та енергії</p>
            </div>
          </div>
        </div>
        <div className={style.pricing}>
          <div className={style.leftPricingColumn}>
            <div className={style.pricingColumn}>
              <h3>Базовий</h3>
              <div className={style.pricingService}>
                <img src={yes} alt="" className={style.logo} />
                <p>Персональний раціон для досягнення ваших цілей</p>
              </div>
              <div className={style.pricingService}>
                <img src={yes} alt="" className={style.logo} />
                <p>Супровід та підтримка 7 днів на тиждень</p>
              </div>
              <div className={style.pricingService}>
                <img src={yes} alt="" className={style.logo} />
                <p>Контроль Результатів</p>
              </div>
              <div className={style.pricingService}>
                <img src={no} alt="" className={style.logo} />
                <p>Індивідуальний план тренувань</p>
              </div>
              <div className={style.pricingService}>
                <img src={no} alt="" className={style.logo} />
                <p>Корекція техніки та трекінг прогрессу</p>
              </div>

              <p className={style.price}>2990 грн.</p>
              <button>Замовити</button>
            </div>
          </div>
          <div className={style.rightPricingColumn}>
            <div className={style.pricingColumn}>
              <h3>Комплексний</h3>
              <div className={style.pricingService}>
                <img src={yes} alt="" className={style.logo} />
                <p>Персональний раціон для досягнення ваших цілей</p>
              </div>
              <div className={style.pricingService}>
                <img src={yes} alt="" className={style.logo} />
                <p>Супровід та підтримка 7 днів на тиждень</p>
              </div>
              <div className={style.pricingService}>
                <img src={yes} alt="" className={style.logo} />
                <p>Контроль Результатів</p>
              </div>
              <div className={style.pricingService}>
                <img src={yes} alt="" className={style.logo} />
                <p>Індивідуальний план тренувань</p>
              </div>
              <div className={style.pricingService}>
                <img src={yes} alt="" className={style.logo} />
                <p>Корекція техніки та трекінг прогрессу</p>
              </div>
              <p className={style.price}>3990 грн.</p>
              <button>Замовити</button>
            </div>
          </div>
        </div>
        <div className={style.serviceColumn}>
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
  );
}

export default Services;
