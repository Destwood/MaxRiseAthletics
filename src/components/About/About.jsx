import React from "react";
import style from "./About.module.scss";

import sideText1 from "../../assets/Calculator.png";
import sideText2 from "../../assets/test.jpg";
import sideText3 from "../../assets/sideText3.PNG";
import clock from "../../assets/clock.svg";
import running from "../../assets/clock.svg";
import weight from "../../assets/weight.svg";

function About() {
  const text = [
    "Мене звати Максим Гончарук і я з впевненістю можу сказати, що є справжнім професіоналом у своїй галузі. Завдяки 7 - річному досвіду занять в тренажерному залі, мені вдалось вийти на рівень висококваліфікованого атлета.",
    "На нашому сайті  MaxRise-Athletics я та команда, ділимось своїми знаннями та підходами до тренувань і харчування. Ви знайдете важливі поради, що допоможуть Вам побудувати міцне тіло і підтримувати ефективне харчування, необхідне для досягнення Ваших цілей.",
    "Незалежно від Вашого рівня підготовки або спортивних амбіцій, ми переконані, що з мотивацією і нашою допомогою, досягнення успіху - це лише питання часу.  Запрошуємо Вас долучатись і розпочати свій захоплюючий шлях до  здорового способу життя.",
  ];
  return (
    <div className={style.wrapper}>
      <div className={style.id} id="about"></div>
      <h2 className={style.sectionTitle}>Про нас</h2>
      <div className={style.container}>
        <div>
          <div className={style.imgContainer}>
            <img className={style.img} src={sideText3} alt="" />
          </div>
        </div>
        <div>
          <div className={style.content}>
            <img className={style.icon} src={clock} alt="" />
            <h3>Швидше</h3>
            <p className={style.desc}>{text[0]}</p>
          </div>
        </div>
        <div>
          <div className={style.imgContainer}>
            <img className={style.img} src={sideText2} alt="" />
          </div>
        </div>
        <div>
          <div className={style.content}>
            <img className={style.icon} src={running} alt="" />
            <h3>Активніше</h3>
            <p className={style.desc}>{text[1]}</p>
          </div>
        </div>
        <div>
          <div className={style.imgContainer}>
            <img className={style.img} src={sideText1} alt="" />
          </div>
        </div>
        <div>
          <div className={style.content}>
            <img className={style.icon} src={weight} alt="" />
            <h3>Сильніше</h3>
            <p className={style.desc}>{text[2]}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
