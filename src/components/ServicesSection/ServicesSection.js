import React from "react";
import sprite from "../../icons/sprite.svg";
import { Link } from "react-router-dom";
import "./style.css";

const ServicesSection = () => {
  return (
    <section className="ins-srv">
      <h2 className="ins-srv__heading">Insurance Services</h2>
      <article className="ins-srv__item">
        <svg className="ins-srv__icon">
          <use href={`${sprite}#icon-home1`} />
        </svg>
        <h3 className="ins-srv__title">Home</h3>
        <p className="ins-srv__text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit,
          vero!
        </p>
        <Link to="/home-insurance" className="ins-srv__btn">
          Get home insurance
        </Link>
      </article>
      <article className="ins-srv__item">
        <svg className="ins-srv__icon">
          <use href={`${sprite}#icon-key`} />
        </svg>
        <h3 className="ins-srv__title">Auto</h3>
        <p className="ins-srv__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
          pariatur.
        </p>
        <Link to="/auto-insurance" className="ins-srv__btn">
          Get auto insurance
        </Link>
      </article>
      <article className="ins-srv__item">
        <svg className="ins-srv__icon">
          <use href={`${sprite}#icon-health`} />
        </svg>
        <h3 className="ins-srv__title">Life</h3>
        <p className="ins-srv__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
          consequatur?
        </p>
        <Link to="/life-insurance" className="ins-srv__btn">
          Get life insurance
        </Link>
      </article>
    </section>
  );
};

export default ServicesSection;
