import React from "react";
import Btn from "../UsableComonents/Btn";
import "./Hero.css";
import { ReactComponent as HeroSvg } from "../svgs and images/herosvg.svg";
import { ReactComponent as SecondHeroSvg } from "../svgs and images/2ndherosvg.svg";

const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="hero-info">
          <h1 className="hero-info-title">Find your next place to travel</h1>
          <span className="hero-info-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
            sed illum itaque vero unde saepe rerum sit quas in dicta.
          </span>
          <div className="hero-info-searchbox-container">
            <input
              className="hero-info-searchbox-text"
              type="text"
              placeholder="Start Searching"
            ></input>
            <Btn distnation="/sign">Enroll now</Btn>
          </div>
        </div>
        <div className="svg-container">
          <HeroSvg className="hero-svg" />
        </div>
      </div>
      <div className="hero-container" style={{ marginTop: "50px" }}>
        <div className="second-svg">
          <SecondHeroSvg />
        </div>
        <div className="hero-info">
          <span className="second-title">Travel to any corner of the word</span>
          <span className="second-subtitle">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
            voluptatibus rem, atque eum doloribus obcaecati.
          </span>
          <div className="hero-history">
            <div className="hero-history-card">
              <h2>20</h2>
              <span>
                Years <br />
                Experience
              </span>
            </div>
            <div className="hero-history-card">
              <h2>25</h2>
              <span>
                Destination
                <br /> Collaboration
              </span>
            </div>
            <div className="hero-history-card">
              <h2>600</h2>
              <span>
                Tourist
                <br />
                Destination
              </span>
            </div>
          </div>
          <div className="explore-btn">
            <Btn color="#0F214F">Explore the destination</Btn>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
