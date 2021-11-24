import React from "react";
import "./roadmap.css";

const RoadmapMob = () => {
  return (
    <div id="RoadMap" className="roadmap mob">
      <h1>ROADMAP</h1>
      <div className="road-list">
        <div className="roads-pile mob"></div>
        <div className="left-container">
          <div className="road">
            <div className="road-road">
              <span className="road-name">PROJECT LAUNCH - 0%</span>
              <p className="road-content">
                Community building and social media promotions, educating the
                community on what is the project, our goal, our vision for the
                future and what are we about!
              </p>
            </div>

            <div className="pile-connector"></div>
          </div>
          <div className="road">
            <div className="pile-connector"></div>
            <div className="road-road">
              <span className="road-name">NFT Launch - 10%</span>
              <p className="road-content">
                1,000 Crazy Santa’s will be released into the wild on the MATIC
                blockchain via our website!
              </p>
            </div>
          </div>
          <div className="road left">
            <div className="road-road">
              <span className="road-name">JUST A TASTE OF A REWARD - 20%</span>
              <p className="road-content">
                For our OG holders, we will offer Crazy Santa’s hoodies with
                your first bought NFT’s stamped on them. So that everyone knows
                you are ‘bout this lifestyle.
              </p>
            </div>

            <div className="pile-connector"></div>
          </div>
          <div className="road">
            <div className="pile-connector"></div>
            <div className="road-road">
              <span className="road-name">KEEPING IT ROLLIN’ - 30%</span>
              <p className="road-content">
                For all our adopters, we will be hosting multiple item
                giveaways! We are all about giving back to our supporters, and
                want to make sure our community is taken care of!This will be
                done via a live stream or a spin bot to keep everything clear
                and fair.
              </p>
            </div>
          </div>
          <div className="road">
            <div className="pile-connector"></div>
            <div className="road-road">
              <span className="road-name">
                TAKE PROFITS AND GIVE THEM BACK - 50%
              </span>
              <p className="road-content">
                We will be doing a Discord vote with all holders (and a private
                talk with our biggest ones) to decide the charity where we will
                distribute 10% of the profits made with the CSanta project.
                <br />
                There will be many other donations to come, but this is our main
                focus from the beginning.
              </p>
            </div>
          </div>
          <div className="road">
            <div className="pile-connector"></div>
            <div className="road-road">
              <span className="road-name">GIFTS TIME - 75%</span>
              <p className="road-content">
                Once 75% of the Crazy Santas are minted, there will be daily
                raffles chances to win up $500 per day. Weekly surprises for
                holders: exclusive merch release, collectible figures and launch
                collaborations with artists. Stay in touch for multiple
                surprises throughout this period. A cut of proceeds from
                merchandise sales will be pumped into our community wallet for
                future developments
              </p>
            </div>
          </div>
          <div className="road">
            <div className="pile-connector"></div>
            <div className="road-road">
              <span className="road-name">AFTER PARTY - 100%</span>
              <p className="road-content">
                After all Cazy Santa’s are minted, the team will celebrate with
                several $MATIC giveaways both in our Discord server and on
                social media, and finalize our collection's listings on various
                marketplaces to ensure a safe and secure process for trading
                amongst owners. After that we shall meet with all our holders
                (personally in a futurity disclosed event) to discuss initiation
                of phase 2. Everyone that joins us for this next chapter will
                have great rewards that will sure make up for holding our
                project that far in time!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapMob;
