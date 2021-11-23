import React from "react";
import "./styles.css";
import member1 from "../../assets/member1.png";
import member2 from "../../assets/member2.png";
import member3 from "../../assets/member3.png";
const Team = () => {
  return (
    <div id="Team" className="team">
      <div className="member">
        <img src={member1} alt="" />
        <h2>ADAM</h2>
        <p>Founder</p>
        <span>Founder and business strategist</span>
      </div>
      <div className="member">
        <img src={member2} alt="" />
        <h2>AYAAN</h2>
        <p>Founder</p>
        <span>Illustrator and design specialist</span>
      </div>
      <div className="member">
        <img src={member3} alt="" />
        <h2>MO</h2>
        <p>CEO</p>
        <span>Social Media and merchandise</span>
      </div>
    </div>
  );
};

export default Team;
