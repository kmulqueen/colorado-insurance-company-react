import React from "react";
import SiteLogo from "../SiteLogo";
import "./style.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <SiteLogo />
      <div className="hero__content">
        <h1 className="hero__heading">Colorado Insurance Company</h1>
        <p className="hero__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
          exercitationem.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
