import React from "react";
import "./styles.css";
import mint from "../../assets/mint.png";
import face from "../../assets/face.png";
const Minting = () => {
  return (
    <div id="Mint" className="minting">
      <div className="minting-left">
        <h1>MINTING</h1>
        <p>
          These will be minted on a sliding scale slightly discounted for early
          adopters.
        </p>
        <span>Discounted Partner Mint</span>
        <span>
          <img src={face} alt="" /> Whitelist 1.0
        </span>
        <span>
          <img src={face} alt="" /> Whitelist 2.0
        </span>
        <span>
          <img src={face} alt="" /> Whitelist 3.0
        </span>
        <span>
          <img src={face} alt="" /> Whitelist 4.0
        </span>
        <br />
        <button className="mint-nft">MINT YOUR SANTA!</button>
      </div>
      <img src={mint} alt="" />
    </div>
  );
};

export default Minting;
