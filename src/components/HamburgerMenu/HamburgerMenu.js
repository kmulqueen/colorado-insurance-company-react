import React from "react";
import sprite from "../../icons/sprite.svg";
import "./style.css";

const HamburgerMenu = ({ ...buttonProps }) => {
  return (
    <>
      <button className="hamburger-menu-btn" {...buttonProps}>
        <svg className="hamburger-menu">
          <use href={`${sprite}#icon-menu`} />
        </svg>
      </button>
    </>
  );
};

export default HamburgerMenu;
