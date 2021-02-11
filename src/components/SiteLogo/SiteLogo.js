import React from "react";
import sprite from "../../icons/sprite.svg";
import { Link } from "react-router-dom";
import "./style.css";

const SiteLogo = () => {
  return (
    <Link to="/" className="logo-btn">
      <svg className="site-logo">
        <use href={`${sprite}#icon-key`} />
      </svg>
    </Link>
  );
};

export default SiteLogo;
