import React, { useState } from "react";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [Menu, SetMenu] = useState("Home");
  return (
    <div className="Navbar-Conatiner">
      <span className="logo">Prashanth</span>
      <ul className="Nav-list">
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
      <button className="nav-btn">Connect Withme</button>
    </div>
  );
};

export default Navbar;
