import React from "react";
import style from "./Hero.module.css";

function Hero() {
  return (
    <div className={style.heroWrapper}>
      <div className={style.heroContent}>
        <h3 className={style.title}>Transform Yourself</h3>
        <p className={style.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
        <button className={style.btn}>Order now!</button>
      </div>
    </div>
  );
}

export default Hero;
