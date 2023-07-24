import React from "react";
import Card from "./Card/Card";
import style from "./CardsList.module.css";

import img from "../../assets/sportNutrition.jpg";

function CardList() {
  return (
    <div className={style.latest}>
      <Card
        img={`url(${img})`}
        titleText={"one"}
        text={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }
      />
      <Card
        img={`url(${img})`}
        titleText={"one"}
        text={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }
      />
      <Card
        img={`url(${img})`}
        titleText={"one"}
        text={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }
      />
      <Card
        img={`url(${img})`}
        titleText={"one"}
        text={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }
      />
      <Card
        img={`url(${img})`}
        titleText={"one"}
        text={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }
      />
      <Card
        img={`url(${img})`}
        titleText={"one"}
        text={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }
      />
    </div>
  );
}

export default CardList;
