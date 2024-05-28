import React, { useRef, useState } from "react";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Menu, Close } from "@material-ui/icons";

const Navbar = () => {
  const MenuRef = useRef();

  const OpenMenu = () => {
    MenuRef.current.style.right = "0";
  };
  const CloseMenu = () => {
    MenuRef.current.style.right = "-350px";
  };
  return (
    <div className="Navbar-Conatiner">
      <span className="logo">Prashanth</span>
      <p className="nav-open" onClick={OpenMenu}>
        <Menu />
      </p>
      <ul ref={MenuRef} className="Nav-list">
        <p className="nav-close" onClick={CloseMenu}>
          <Close />
        </p>

        <li className="nav-listItem">
          <AnchorLink className="Anchor-Link" href="#home">
            {" "}
            <p>Home</p>
          </AnchorLink>
        </li>
        <li className="nav-listItem">
          <AnchorLink className="Anchor-Link" offset={0} href="#about">
            {" "}
            <p>About me</p>
          </AnchorLink>
        </li>
        <li className="nav-listItem">
          <AnchorLink className="Anchor-Link" offset={50} href="#contact">
            {" "}
            <p>Contact</p>
          </AnchorLink>
        </li>
      </ul>
      <AnchorLink className="Anchor-Link" offset={50} href="#contact">
        <button className="nav-btn">Connect Withme</button>
      </AnchorLink>
    </div>
  );
};

export default Navbar;
