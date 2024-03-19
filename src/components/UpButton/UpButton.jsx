import React, { useState, useEffect } from "react";
import upIcon from "../../assets/up.svg";
import style from "./UpButton.module.scss";

function UpButton() {
  const [opacity, setOpacity] = useState(0);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 450) {
        setOpacity(1);
      } else setOpacity(0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={() => scrollUp()}
      className={style.scrollUp}
      style={{ opacity: opacity }}
    >
      <img className={style.icon} src={upIcon} alt="" />
    </button>
  );
}

export default UpButton;
