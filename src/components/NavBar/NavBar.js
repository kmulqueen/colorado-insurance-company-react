import React, { useState } from "react";
import HamburgerMenu from "../HamburgerMenu";
import NavLinkList from "../NavLinkList";
import NavLinkListMobile from "../NavLinkListMobile";
import SiteLogo from "../SiteLogo";
import "./style.css";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleHamburgerClick = (e) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  return (
    <>
      <header className="site-nav-header">
        <nav className="nav">
          <SiteLogo />
          <HamburgerMenu onClick={handleHamburgerClick} />
          <NavLinkList />
          {showMenu && <NavLinkListMobile />}
        </nav>
      </header>
    </>
  );
};

export default NavBar;
