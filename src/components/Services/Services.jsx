import React from "react";
import Card from "./Card/Card";
import style from "./Services.module.css";

import img from "../../assets/sportNutrition.jpg";

function Services() {
  return (
    <div className={style.services}>
      <Card
        img={img}
        titleText={"title"}
        text={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }
      />
      <Card
        img={img}
        titleText={"title"}
        text={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }
      />
      <Card
        img={img}
        titleText={"title"}
        text={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }
      />
      <Card
        img={img}
        titleText={"title"}
        text={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }
      />
      <Card
        img={img}
        titleText={"title"}
        text={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }
      />
      <Card
        img={img}
        titleText={"title"}
        text={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }
      />
    </div>
  );
}

export default Services;
