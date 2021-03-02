import React from "react";
import ServicesCard from "../ServicesCard";
import sprite from "../../icons/sprite.svg";
import { Link } from "react-router-dom";
import "./style.css";

const ServicesSection = () => {
  const services = [
    {
      icon: `${sprite}#icon-heart2`,
      heading: "Life",
      text: "Life insurance info stuff blah blah",
      buttonText: "Get life insurance",
      path: "/life-insurance",
    },
    {
      icon: `${sprite}#icon-home4`,
      heading: "Home",
      text: "Home insurance info stuff blah blah",
      buttonText: "Get home insurance",
      path: "/home-insurance",
    },
    {
      icon: `${sprite}#icon-car`,
      heading: "Auto",
      text: "Auto insurance info stuff blah blah",
      buttonText: "Get auto insurance",
      path: "/auto-insurance",
    },
  ];
  return (
    <section className="ins-srv">
      <h2 className="ins-srv__heading">Insurance Services</h2>
      {services.map((service) => (
        <ServicesCard
          key={service.heading}
          icon={service.icon}
          heading={service.heading}
          text={service.text}
          buttonText={service.buttonText}
          path={service.path}
        />
      ))}
    </section>
  );
};

export default ServicesSection;
