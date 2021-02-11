import React from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../NavLinks/NavLinks";
import "./style.css";

const NavLinkListMobile = () => {
  return (
    <ul className="nav__list--mobile">
      {navLinks.map((link, idx) => (
        <li className="nav__item" key={idx}>
          <Link to={link.to} className="nav__link">
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinkListMobile;
