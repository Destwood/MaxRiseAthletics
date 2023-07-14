import React from "react";
import LatestCard from "./LatestCard/LatestCard";
import style from "./Latest.module.css";

import img from "../../assets/sportNutrition.jpg";

function Latest() {
  return (
    <div className={style.latest}>
      <LatestCard
        img={img}
        titleText={"one"}
        text={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }
      />
      <LatestCard
        img={img}
        titleText={"two"}
        text={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }
      />
      <LatestCard
        img={img}
        titleText={"three"}
        text={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }
      />
    </div>
  );
}

export default Latest;
