import React from "react";
import "./Btn.css";
import { Link } from "react-router-dom";

const Btn = ({ children, distnation, color }) => {
  return (
    <button className="nav-btn" style={{ backgroundColor: color }}>
      <Link to={distnation}>
        <span className="btn-text">{children}</span>
      </Link>
    </button>
  );
};

export default Btn;
