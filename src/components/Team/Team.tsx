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
        <h2>JOHN</h2>
        <p>Founder</p>
        <span>Ilustrator and 3D artist extraordinaire</span>
      </div>
      <div className="member">
        <img src={member2} alt="" />
        <h2>smith</h2>
        <p>Founder</p>
        <span>Brand and product builder</span>
      </div>
      <div className="member">
        <img src={member3} alt="" />
        <h2>stephen</h2>
        <p>CEO</p>
        <span>Business strategist and financial planner</span>
      </div>
    </div>
  );
};

export default Team;
