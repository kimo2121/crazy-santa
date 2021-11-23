import React from "react";
import "./styles.css";
import santa from "../../assets/santa.png";

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="welcome-left">
        <p>WELCOME TO THE</p>
        <h1>
          CRAZY
          <br />
          SANTA NFT
        </h1>
        <span>
          We’re a collection of 10,000 truly crazy santas, each one has
          attributes from over 20+ traits.
          <br />
          Some will have unique attributes later designed for special rarity.
        </span>
        <button className="mint-nft">MINT YOUR NFT</button>
      </div>
      <img src={santa} alt="" />
    </div>
  );
};

export default Welcome;
