import React from "react";
import "./styles.css";
import twitter from "../../assets/twitter.png";
import discord from "../../assets/discord.png";
import telegram from "../../assets/telegram.png";
import logo from "../../assets/logo.png";
import language from "../../assets/language.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-up">
        <img src={logo} alt="" />
        <p>support@crazysantanft.com</p>
        <p>©2021 by CRAZYSANTA </p>
        <div className="footer-links">
          <img src={twitter} alt="" />
          <img src={telegram} alt="" />
          <img src={discord} alt="" />
        </div>
      </div>
      <div className="footer-down">
        <div>
          <a href="/">Terms of Service</a>
          <a href="/">Privacy policy</a>
          <a href="/">Help Center</a>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img style={{ marginRight: "10px" }} src={language} alt="" />
          EN
        </div>
      </div>
    </div>
  );
};

export default Footer;
