import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const ServicesCard = ({ icon, heading, text, buttonText, path }) => {
  return (
    <article className="service-card">
      <svg className="service-card__icon">
        <use href={icon} />
      </svg>
      <h3 className="service-card__heading">{heading}</h3>
      <p className="service-card__text">{text}</p>
      <Link to={path} className="service-card__button">
        {buttonText}
      </Link>
    </article>
  );
};

export default ServicesCard;
