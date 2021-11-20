import React from "react";
import "./styles.css";
import crazySanta from "../../assets/crazySanta.png";

const CrazySanta = () => {
  return (
    <div className="crazy-santa">
      <img src={crazySanta} alt="" />
      <div className="crazy-right">
        <h1>
          <span>CRAZY SANTA </span>
          is the most hottest
          <span> NFT.</span>
        </h1>
        <p>
          Crazy Santa is a collection of 10,000 algorithmically generated pieces
          of art with references from hentai, anime, games, and movies.
        </p>
        <p>
          The collection focuses on high-end sexy stuff and iconic gaming
          reference. The collection will be unique and will be discontinued.
        </p>
        <p>The Solagirls team will release an hentai and manga of Solagirls.</p>
        <p>
          All the girls will be gathered in a series where each NFT will allow
          you to access the point of view of the character you own.
        </p>
      </div>
    </div>
  );
};

export default CrazySanta;
