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
          CRAZY SANTA is the most hottest NFT. <br /> Crazy Santa is a
          collection of 10,000 algorithmically generated pieces of art with
          references from hentai, anime, games, and movies.
        </p>
        <p>
          The collection focuses on giving the Christmas spirit going with a
          touch of craziness, which the team believes is essencial for a
          balanced experience
        </p>
        <p>
          The Crazy Santa team will release merchandise and also gifts and
          rewards for top holder.
        </p>
        <p>
          The team is currently working on 3D designs for the Santa’s to be used
          in the Metaverse in a future nearby.
        </p>
        <p>
          Also, and most importantly, 10% of all profits made by this project
          are going to revert to a charity which will be decided by the founders
          and top holders together.
        </p>
      </div>
    </div>
  );
};

export default CrazySanta;
