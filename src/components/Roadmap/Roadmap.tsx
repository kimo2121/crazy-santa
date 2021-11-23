import React from "react";
import "./roadmap.css";

const Roadmap = () => {
  return (
    <div id="RoadMap" className="roadmap web">
      <h1>ROADMAP</h1>
      <div className="road-list">
        <div className="right-container">
          <div className="road left">
            <div className="road-road">
              <span className="road-name">Step 1</span>
              <p className="road-content">Ready to play</p>
            </div>
            <div className="pile-connector"></div>
          </div>
          <div className="road left">
            <div className="road-road">
              <span className="road-name">Step 3</span>
              <p className="road-content">Start Journey</p>
            </div>
            <div className="pile-connector"></div>
          </div>
        </div>
        <div className="roads-pile web"></div>
        <div className="left-container">
          <div className="road">
            <div className="pile-connector"></div>
            <div className="road-road">
              <span className="road-name">Step 2</span>
              <p className="road-content">The First Hints</p>
            </div>
          </div>
          <div className="road">
            <div className="pile-connector"></div>
            <div className="road-road">
              <span className="road-name">Step 4</span>
              <p className="road-content">Announcement</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
