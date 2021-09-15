import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-contrainer">
      <div className="logo">
        <Link to="/">
          <span className="logo-text">Travel</span>
          <span className="logo-text-2">now!</span>
        </Link>
      </div>
      <div className="nav-links-container">
        <div className="nav-links">
          <span className="nav-link-item">Disconver</span>
          <span className="nav-link-item">Distenation</span>
          <span className="nav-link-item">About Us</span>
        </div>
      </div>
      <div className="btn-container">
        <button className="nav-btn">
          <Link to="/sign">
            <span className="btn-text">Book a Tour!</span>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
