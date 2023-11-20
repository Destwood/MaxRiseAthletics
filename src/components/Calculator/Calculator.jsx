import React from "react";

import style from "./Calculator.module.scss";
import experienceImg from "../../assets/GymBg.png";
function Calculator() {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.img}>
          <img className={style.img} src={experienceImg} alt="" />
        </div>
        <div className={style.сalculator}>
          <h2>calculate your bmi</h2>
          <p className={style.desc}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className={style.logic}>
            <div className={style.options}>
              <div className={style.buttons}>
                <button className={style.female}>Female</button>
                <button className={style.male}>Male</button>
              </div>
              <div className="">
                <input className={style.input} type="text" placeholder="Age" />
                <input
                  className={style.input}
                  type="text"
                  placeholder="Weight"
                />
                <input
                  className={style.input}
                  type="text"
                  placeholder="Height"
                />
                <select className={style.select} name="" id="">
                  <option value="">Active</option>
                  <option value="">Relativly active</option>
                  <option value="">Not active</option>
                  <option value="">Sitting life style</option>
                </select>
              </div>
              <button className={style.calculate}>Calculate</button>
            </div>
            <div className={style.resultContainer}>
              <div className={style.result}>
                <h4>
                  3320<span>/kcal</span>
                </h4>
                <div className={style.desc}>
                  Daily calorie intake according to MIFFIN's formula - San
                  Geora, (kcal)
                </div>
              </div>
              <p className={style.details}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                nec risus at lectus sollicitudin hendrerit in ac risus. Etiam ut
                tortor egestas, tincidunt felis vel, convallis arcu. Proin
                ligula tortor, aliquam eu elit in, euismod consequat libero.
                Quisque condimentum scelerisque nulla. Integer a convallis
                purus, in malesuada sapien. Praesent gravida diam eget
                scelerisque efficitur. Nulla fringilla urna lorem, nec tempor
                diam dictum vel. Vestibulum ante ipsum primis in faucibus orci
                luctus et ultrices posuere cubilia curae; Quisque ac ultricies
                nibh, a hendrerit leo. Nunc aliquet risus tellus, a viverra
                justo ullamcorper a.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
