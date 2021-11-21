import React from "react";
import "./styles.css";
import ftr_twitter from "../../assets/ftr_twitter.png";
import ftr_opensea from "../../assets/ftr_opensea.png";
import ftr_insta from "../../assets/ftr_insta.png";
import ftr_discord from "../../assets/ftr_discord.png";
const Footer = () => {
  return (
    <div className="footer">
      <p>ⓒ 2021 The Chameleon Colective</p>
      <div>
        <img src={ftr_opensea} alt="" />
        <img src={ftr_discord} alt="" />
        <img src={ftr_twitter} alt="" />
        <img src={ftr_insta} alt="" />
      </div>
    </div>
  );
};

export default Footer;
