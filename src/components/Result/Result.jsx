import React, { useState } from "react";
import Card from "./Card/Card";
import style from "./Result.module.css";
import first from "../../assets/first.jpeg";
import second from "../../assets/second.png";
import fourth from "../../assets/fourth.jpg";
import third from "../../assets/cardThird.jpg";
import fifth from "../../assets/fifth.jpg";
import sixth from "../../assets/sixth.jpeg";

const images = [first, second, third, fourth, fifth, sixth];
const cards = [
  <Card
    img={`url(${first})`}
    titleText={"one"}
    text={
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    }
  />,
  <Card
    img={`url(${second})`}
    titleText={"one"}
    text={
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    }
  />,
  <Card
    img={`url(${third})`}
    titleText={"one"}
    text={
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    }
  />,
  <Card
    img={`url(${fourth})`}
    titleText={"one"}
    text={
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    }
  />,
  <Card
    img={`url(${fifth})`}
    titleText={"one"}
    text={
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    }
  />,
  <Card
    img={`url(${sixth})`}
    titleText={"one"}
    text={
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    }
  />,
];

function CardList() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  return (
    <div className={style.wrapper} id="results">
      <div className={style.title}>Результати</div>
      <div className={style.slider}>
        {cards[currentIndex]}
        <div className={style.sliderControl}>
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={style.sliderBtn}
          >
            &lt;
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex === cards.length - 1}
            className={style.sliderBtn}
          >
            &gt;
          </button>
        </div>

        {/* <p>
          {currentIndex + 1} / {cards.length}
        </p> */}
      </div>
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
