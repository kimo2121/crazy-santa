import React from "react";
import "./styles.css";
import roadmap from "../../assets/roadmap.png";
const Roadmap = () => {
  return (
    <div id="Roadmap" className="roadmap">
      <h1>ROADMAP</h1>
      <img src={roadmap} alt="" />
    </div>
  );
};

export default Roadmap;
