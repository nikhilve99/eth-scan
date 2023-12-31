import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import {
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialLinkedin,
  TiSocialFacebook,
  TiSocialInstagram,
} from "react-icons/ti";

//INTERNAL IMPORT
import Style from "../styles/footer.module.css";

const Footer = () => {
  return (
    <div className={Style.footer}>
      <div className={Style.footer__box}>
        <img src="/footerLogo.png" alt="logo" width={100} height={100} />
      </div>
      <div className={Style.footer__box}>
        <div className={Style.footer__input}>
          <input type="email" placeholder="Email*" />
          <RiSendPlaneFill />
        </div>
      </div>

      <div className={Style.footer__box}>
        <div className={Style.social}>
          <TiSocialTwitter />
          <TiSocialLinkedin />
          <TiSocialFacebook />
          <TiSocialInstagram />
          <TiSocialInstagram />
          <TiSocialYoutube />
        </div>
      </div>
    </div>
  );
};

export default Footer;
