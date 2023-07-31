import React from "react";
import style from "./Footer.module.css";
import inst from "../../assets/instagram.svg";
import telegram from "../../assets/telegram.svg";
import mail from "../../assets/mail.svg";

function Footer() {
  return (
    <div className={style.wrapper}>
      <div className={style.footer}>
        <div className={style.footerItem}>
          <h4 className={style.descTitle}>MaxRise Athletics</h4>
          <p className={style.descText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <p>©MaxRise Athletics</p>
        </div>

        <div className={style.footerItem + " " + style.social}>
          <h5 className={style.socialTitle}>Contuct us</h5>
          <div className={style.socialLinks}>
            <div className={style.instagram + " " + style.socialLink}>
              <a href="/" className={style.link}>
                <p className={style.linkName}>Instagram</p>
                <img src={inst} alt="inst" className={style.logo} />
              </a>
            </div>

            <div className={style.telegram + " " + style.socialLink}>
              <a href="/" className={style.link}>
                <p className={style.linkName}>Telegram</p>
                <img src={telegram} alt="inst" className={style.logo} />
              </a>
            </div>

            <div className={style.mail + " " + style.socialLink}>
              <a href="/" className={style.link}>
                <p className={style.linkName}>Mail</p>
                <img src={mail} alt="inst" className={style.logo} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
