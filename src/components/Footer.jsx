import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <Container>
        <Row xs={1} md={2} lg={4}>
          <Col>
            <div className="footer-details-container footer-logo">
              <Link to="/">
                <span className="footer-text">Travel</span>
                <span className="footer-text-2">now!</span>
              </Link>
            </div>
          </Col>
          <Col>
            <div className="footer-details-container">
              <Link to="/">
                <h1 className="footer-detail-title">Tour</h1>
              </Link>
              <Link to="/">
                <span className="footer-detail-list">Tailand</span>
              </Link>
              <Link to="/">
                <span className="footer-detail-list">Canada</span>
              </Link>
              <Link to="/">
                <span className="footer-detail-list">Korea</span>
              </Link>
              <Link to="/">
                <span className="footer-detail-list">Italy</span>
              </Link>
            </div>
          </Col>
          <Col>
            <div className="footer-details-container">
              <Link to="/">
                <h1 className="footer-detail-title">Account</h1>
              </Link>
              <Link to="/">
                <span className="footer-detail-list">Legal</span>
              </Link>
              <Link to="/">
                <span className="footer-detail-list">Contact</span>
              </Link>
              <Link to="/">
                <span className="footer-detail-list">Pricacy policy</span>
              </Link>
              <Link>
                <span className="footer-detail-list">Support</span>
              </Link>
            </div>
          </Col>
          <Col>
            <div className="footer-details-container">
              <Link to="/">
                <h1 className="footer-detail-title">Useful Pages</h1>
              </Link>
              <Link>
                <span className="footer-detail-list">Deals</span>
              </Link>
              <Link to="/">
                <span className="footer-detail-list">FAQS</span>
              </Link>
              <Link to="/">
                <span className="footer-detail-list">Why US</span>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="footer-end">
        <span>@2021 by Mohamed Ali, all rights recieved</span>
      </div>
    </div>
  );
};

export default Footer;
