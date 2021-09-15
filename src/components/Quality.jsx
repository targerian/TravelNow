import React from "react";
import "./Quality.css";
import "./Hero.css";
import { ReactComponent as CarSvg } from "../svgs and images/car svg.svg";
import { ReactComponent as PlanSvg } from "../svgs and images/plan svg.svg";
import { ReactComponent as TicketSvg } from "../svgs and images/ticket svg.svg";
import { ReactComponent as BusSvg } from "../svgs and images/bus.svg";

const Quality = () => {
  return (
    <div className="hero-container">
      <div className="hero-info" style={{ width: "60%" }}>
        <BusSvg className="bus-svg" />
      </div>
      <div className="hero-info" style={{ width: "40%" }}>
        <h1 className="second-title">Our Quality Services</h1>
        <div className="quality-container">
          <div className="quality-list">
            <TicketSvg />{" "}
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium, veniam.
            </span>
          </div>
          <div className="quality-list">
            <CarSvg />{" "}
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium, veniam.
            </span>
          </div>
          <div className="quality-list">
            <PlanSvg />{" "}
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium, veniam.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quality;
