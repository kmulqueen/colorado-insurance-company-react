import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Footer = () => {
  return (
    <footer>
      <h4 className="footer__title">Insurance Services</h4>
      <div className="footer__links footer__links--services">
        <Link to="/home-insurance" className="footer__link">
          Home
        </Link>
        <Link to="/auto-insurance" className="footer__link">
          Auto
        </Link>
        <Link to="/life-insurance" className="footer__link">
          Life
        </Link>
      </div>
      <h4 className="footer__title">About</h4>
      <div className="footer__links footer__links--about">
        <Link to="/about" className="footer__link">
          About Our Company
        </Link>
        <Link to="/contact" className="footer__link">
          Contact Us
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
