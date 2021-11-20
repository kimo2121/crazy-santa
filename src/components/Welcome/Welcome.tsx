import React from "react";
import "./styles.css";
import santa from "../../assets/santa.png";

const Welcome = () => {
  return (
    <div style={{ backgroundColor: "#A210F2" }}>
      <div className="welcome">
        <div className="welcome-left">
          <p>WELCOME TO THE</p>
          <h1>
            crazy
            <br />
            santa nft
          </h1>
          <span>
            We’re a collection of 10,000 almost truly wild chameleons, evolved
            out of 220+ unique assets.
          </span>
          <button className="mint-nft">MINT YOUR NFT</button>
        </div>
        <img src={santa} alt="" />
      </div>
    </div>
  );
};

export default Welcome;
