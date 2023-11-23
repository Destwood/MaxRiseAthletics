import React, { useState } from "react";

import style from "./Calculator.module.scss";
import experienceImg from "../../assets/GymBg.png";
function Calculator() {
  const ratio = { Атлет: 1.5, Активний: 1.55, Змішаний: 1.375, Сидячий: 1.2 };
  const [gender, setGender] = useState("Жінка");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activity, setActivity] = useState("");
  const [bmi, setBmi] = useState(0);

  const handleClick = () => {
    if (age && weight && height && activity) {
      const bmi = 10 * weight + 6.25 * height - 5 * age;
      if (gender === "Жінка") {
        setBmi(Math.round((bmi - 161) * ratio[activity]));
        console.log();
      } else {
        setBmi(Math.round((bmi + 5) * ratio[activity]));
      }
    } else {
      console.log("Please fill all fields");
      setBmi(0);
    }
  };
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.img}>
          <img className={style.img} src={experienceImg} alt="" />
        </div>
        <div className={style.сalculator}>
          <h2>Розрахувати ІМТ</h2>
          <p className={style.desc}>
            Індекс маси тіла {"(ІМТ)"} - це вага людини в кілограмах, поділена
            на квадрат зросту в метрах.
          </p>
          <div className={style.logic}>
            <div className={style.options}>
              <div className={style.buttons}>
                <button
                  className={`${style.genderBtn} ${
                    gender === "Жінка" ? style.active : ""
                  }`}
                  onClick={(e) => setGender("Жінка")}
                >
                  Жінка
                </button>
                <button
                  className={`${style.genderBtn} ${
                    gender !== "Жінка" ? style.active : ""
                  }`}
                  onClick={(e) => setGender("Чоловік")}
                >
                  Чоловік
                </button>
              </div>
              <div className="">
                <input
                  className={style.input}
                  type="text"
                  placeholder="Вік"
                  onChange={(e) => setAge(e.target.value)}
                />
                <input
                  className={style.input}
                  type="text"
                  placeholder="Вага"
                  onChange={(e) => setWeight(e.target.value)}
                />
                <input
                  className={style.input}
                  type="text"
                  placeholder="Зріст"
                  onChange={(e) => setHeight(e.target.value)}
                />
                <select
                  className={style.select}
                  onChange={(e) => setActivity(e.target.value)}
                >
                  <option value="Атлет">Атлет</option>
                  <option value="Активний">Активний</option>
                  <option value="Змішаний">Змішаний</option>
                  <option value="Сидячий">Сидячий</option>
                </select>
              </div>
              <button onClick={() => handleClick()} className={style.calculate}>
                Розрахувати
              </button>
            </div>
            <div className={style.resultContainer}>
              <div className={style.result}>
                <h4>
                  {bmi}
                  <span>/Ккал</span>
                </h4>
                <div className={style.desc}>
                  {bmi === 0
                    ? "Для розрахунку щоденної калорійної норми необхідно заповнити всі поляі"
                    : "Калорійна норма у відповідності з формулою Міффліна - Сан                  Жеора Ккал"}
                </div>
              </div>
              <p className={style.details}>
                <p>
                  Загальний розрахунок калорій для створення харчових раціонів
                  втрачає свою актуальність серед фахівців через вплив багатьох
                  факторів на споживання енергії.
                </p>
                <p>
                  юдське харчування та обмін речовин залежать від різноманітних
                  аспектів, включаючи не лише якість та спосіб приготування їжі,
                  але й індивідуальні особливості кожного організму.
                </p>
                <p>
                  Л Важливим аспектом раціонального харчування залишається
                  збалансованість між енергією, яку отримуємо з їжею, та
                  витратами цієї енергії.
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
