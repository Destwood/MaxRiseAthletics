import React from "react";
import Card from "./Card/Card";
import style from "./Result.module.css";

import img from "../../assets/sportNutrition.jpg";

import first from "../../assets/first.jpeg";
import second from "../../assets/second.png";
import fourth from "../../assets/fourth.jpg";
import third from "../../assets/cardThird.jpg";
import fifth from "../../assets/fifth.jpg";
import sixth from "../../assets/sixth.jpeg";

function CardList() {
  return (
    <div className={style.wrapper} id="results">
      <div className={style.title}>Результати</div>
      <div className={style.result}>
        <Card
          img={`url(${first})`}
          titleText={"one"}
          text={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          }
        />
        <Card
          img={`url(${second})`}
          titleText={"one"}
          text={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          }
        />
        <Card
          img={`url(${third})`}
          titleText={"one"}
          text={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          }
        />
        <Card
          img={`url(${fourth})`}
          titleText={"one"}
          text={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          }
        />
        <Card
          img={`url(${fifth})`}
          titleText={"one"}
          text={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          }
        />
        <Card
          img={`url(${sixth})`}
          titleText={"one"}
          text={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          }
        />
      </div>
    </div>
  );
}

export default CardList;
