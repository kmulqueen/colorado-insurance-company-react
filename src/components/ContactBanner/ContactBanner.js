import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const ContactBanner = () => {
  return (
    <aside className="contact">
      <p className="contact__text">
        Still have questions? We're happy to help.
      </p>
      <Link to="/contact" className="contact__btn">
        Contact Us
      </Link>
    </aside>
  );
};

export default ContactBanner;
