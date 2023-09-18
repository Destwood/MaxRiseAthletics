import React from "react";
import style from "./Footer.module.css";

import phone from "../../assets/phone.svg";
import inst from "../../assets/instagram.svg";
import telegram from "../../assets/telegram.svg";
import mail from "../../assets/mail.svg";

function Footer() {
  return (
    <div className={style.wrapper}>
      <div className={style.footer}>
        <div className={style.footerItem}>
          <h4 className={style.descTitle}>MaxRise Athletics</h4>
          {/* <p className={style.descText}> </p> */}
          <p>©MaxRise Athletics</p>
        </div>

        <div className={style.footerItem + style.social}>
          <h5 className={style.socialTitle}>Контакти</h5>
          <div className={style.socialLinks}>
            <div className={style.instagram + " " + style.socialLink}>
              <a href="tel:098 908 54 50" className={style.link}>
                <p className={style.linkName}>098 &#40;908&#41; 54 50</p>
                <img src={phone} alt="inst" className={style.logo} />
              </a>
            </div>

            <div className={style.instagram + " " + style.socialLink}>
              <a
                href="https://instagram.com/maxrise_athletics?igshid=MzRlODBiNWFlZA=="
                className={style.link}
                target="blank"
              >
                <p className={style.linkName}>Instagram</p>
                <img src={inst} alt="inst" className={style.logo} />
              </a>
            </div>

            <div className={style.telegram + " " + style.socialLink}>
              <a
                href="https://t.me/MaxRise_Athletics"
                className={style.link}
                target="blank"
              >
                <p className={style.linkName}>Telegram</p>
                <img src={telegram} alt="inst" className={style.logo} />
              </a>
            </div>

            <div className={style.mail + " " + style.socialLink}>
              <a
                href="mailto:maxrise.athletics@gmail.com"
                className={style.link}
              >
                <p className={style.linkName}>Mail</p>
                <img src={mail} alt="inst" className={style.logo} />
              </a>
            </div>
            {/* <a
                href="https://t.me/MaxRise_Athletics"
                className={style.link}
                target="blank"
              >
                <img src={telegram} alt="telegram" className={style.linkLogo} />
              </a>
            </div>

            <div className={style.mail + " " + style.socialLink}>
              <a
                href="https://instagram.com/maxrise_athletics?igshid=MzRlODBiNWFlZA=="
                className={style.link}
                target="blank"
              > */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
