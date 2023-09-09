import React from "react";
import SideText from "./SideText/SideText";
import style from "./About.module.css";

import sideText1 from "../../assets/sideText1.png";
import sideText2 from "../../assets/test.jpg";
import sideText3 from "../../assets/sideText3.PNG";

function About() {
  return (
    <div className={style.wrapper} id="about">
      <h2 className={style.title}>Про нас</h2>
      <SideText
        title={"Досвід"}
        text="Мене звати Максим Гончарук і я з впевненістю можу сказати, що є справжнім професіоналом у своїй галузі. 
            Завдяки 7-річному досвіду занять в тренажерному залі, мені вдалось вийти на рівень висококваліфікованого атлета."
        imgSrc={sideText1}
        side={0}
      />
      <SideText
        title={"Профейсійність"}
        text="На нашому сайті  MaxRise-Athletics я та команда, ділимось своїми знаннями та підходами до тренувань і харчування. Ви знайдете важливі поради, що допоможуть Вам побудувати міцне тіло і підтримувати ефективне харчування, необхідне для досягнення Ваших цілей."
        imgSrc={sideText2}
        side={1}
      />
      <SideText
        title={"Вдосконалення"}
        text="Незалежно від Вашого рівня підготовки або спортивних амбіцій, ми переконані, 
            що з мотивацією і нашою допомогою, досягнення успіху - це лише питання часу. 
            Запрошуємо Вас долучатись і розпочати свій захоплюючий шлях до 
            здорового способу життя."
        imgSrc={sideText3}
        side={0}
      />
    </div>
  );
}

export default About;
