import React from "react";
import style from "./About.module.css";

import profile from "../../assets/profile.jpg";

function About() {
  return (
    <div className={style.about}>
      <h2 className={style.title}>about</h2>
      <div className={style.content}>
        <div className={style.personal}>
          <img src={profile} alt="" className={style.img} />
          <div className={style.profileInfo}>
            <h4 className={style.profileTitle}>Name Surname</h4>
            <p className={style.profileDesc}>position</p>
          </div>
        </div>
        <p className={style.desc}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>
    </div>
  );
}

export default About;
