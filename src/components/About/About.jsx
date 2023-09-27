import React, { useState, useEffect, useRef } from "react";
import SideText from "./SideText/SideText";
import style from "./About.module.css";

import sideText1 from "../../assets/sideText1.png";
import sideText2 from "../../assets/test.jpg";
import sideText3 from "../../assets/sideText3.PNG";

function About() {
  const titleRef = useRef(null);
  const containerRefs = [useRef(null), useRef(null), useRef(null)];
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isContainersVisible, setIsContainersVisible] = useState([
    false,
    false,
    false,
  ]);

  useEffect(() => {
    const options = {
      threshold: 0.1,
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          if (entry.target === titleRef.current) {
            setIsTitleVisible(true); // Заголовок видно
          }
          if (entry.target === containerRefs[0].current) {
            setIsContainersVisible((prev) => {
              const newVisibility = [...prev];
              newVisibility[0] = true;
              return newVisibility;
            });
          }
          if (entry.target === containerRefs[1].current) {
            setIsContainersVisible((prev) => {
              const newVisibility = [...prev];
              newVisibility[1] = true;
              return newVisibility;
            });
          }
          if (entry.target === containerRefs[2].current) {
            setIsContainersVisible((prev) => {
              const newVisibility = [...prev];
              newVisibility[2] = true;
              return newVisibility;
            });
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    containerRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={style.wrapper} id="about">
      <h2
        className={`${style.title} ${isTitleVisible ? style.visible : ""}`}
        ref={titleRef}
      >
        Про нас
      </h2>
      <div className={style.blockList}>
        <div
          className={`${style.leftContainer} ${
            isContainersVisible[0] ? style.container : ""
          }`}
          ref={containerRefs[0]}
        >
          <SideText
            text="Мене звати Максим Гончарук і я з впевненістю можу сказати, що є справжнім професіоналом у своїй галузі. 
            Завдяки 7-річному досвіду занять в тренажерному залі, мені вдалось вийти на рівень висококваліфікованого атлета."
            imgSrc={sideText1}
            side={0}
          />
        </div>
        <div
          className={`${style.rightContainer} ${
            isContainersVisible[1] ? style.container : ""
          }`}
          ref={containerRefs[1]}
        >
          <SideText
            text="На нашому сайті  MaxRise-Athletics я та команда, ділимось своїми знаннями та підходами до тренувань і харчування. Ви знайдете важливі поради, що допоможуть Вам побудувати міцне тіло і підтримувати ефективне харчування, необхідне для досягнення Ваших цілей."
            imgSrc={sideText2}
            side={1}
          />
        </div>
        <div
          className={`${style.leftContainer} ${
            isContainersVisible[2] ? style.container : ""
          }`}
          ref={containerRefs[2]}
        >
          <SideText
            text="Незалежно від Вашого рівня підготовки або спортивних амбіцій, ми переконані, 
            що з мотивацією і нашою допомогою, досягнення успіху - це лише питання часу. 
            Запрошуємо Вас долучатись і розпочати свій захоплюючий шлях до 
            здорового способу життя."
            imgSrc={sideText3}
            side={0}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
