import React, { useState, useEffect } from "react";
import style from "./Result.module.scss";

import first from "../../assets/first.jpeg";
import second from "../../assets/second.png";
import fourth from "../../assets/fourth.jpg";
import third from "../../assets/cardThird.jpg";
import fifth from "../../assets/fifth.jpg";
import sixth from "../../assets/sixth.jpeg";

const images = [first, second, third, fourth, fifth, sixth];

function CardList() {
  const [jump, setJump] = useState(30);
  const [position, setPosition] = useState(0);
  const [maxJumps, setMaxJumps] = useState(3);

  const maxMove = jump * (images.length - maxJumps);
  const handleNext = () => {
    if (position <= 0) {
      setPosition(maxMove);
    } else {
      setPosition(position - jump);
    }
  };

  const handlePrev = () => {
    if (position >= maxMove) {
      setPosition(0);
    } else {
      setPosition(position + jump);
    }
  };

  useEffect(() => {
    if (window.innerWidth > 1024) {
      setJump(30);
      setMaxJumps(3);
    }
    if (window.innerWidth <= 1024) {
      setJump(50);
      setMaxJumps(3);
    }
    if (window.innerWidth <= 768) {
      console.log("changed");
      setJump(100);
      setMaxJumps(1);
    }
  }, []);
  return (
    <div className={style.wrapper}>
      <div className={style.id} id="results"></div>
      <div className={style.title}>Результати</div>
      <div className={style.container}>
        <button
          onClick={() => {
            handleNext();
          }}
          className={`${style.button} ${style.left}`}
        >
          <p>&lt;</p>
        </button>
        <div className={style.slider}>
          <div
            className={style.sliderContent}
            style={{ right: `${position}vw` }}
          >
            {images.map((item, index) => (
              <div className={style.imgContainer}>
                <img className={style.img} src={item} alt="resultPicture" />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => {
            handlePrev();
          }}
          className={`${style.button} ${style.right}`}
        >
          <p>&gt;</p>
        </button>
      </div>
      <div className={style.adaptiveControl}>
        <button
          onClick={() => {
            handleNext();
          }}
          className={`${style.button} ${style.left}`}
        >
          <p>&lt;</p>
        </button>
        <button
          onClick={() => {
            handlePrev();
          }}
          className={`${style.button} ${style.right}`}
        >
          <p>&gt;</p>
        </button>
      </div>
    </div>
  );
}

export default CardList;
