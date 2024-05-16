import React from "react";
import "./Footer.css";
import { LinkedIn, Facebook, Mail } from "@material-ui/icons";

const Footer = () => {
  return (
    <div className="footer-container">
      <hr className="Footer-hr" />
      <div className="social-Icons">
        <LinkedIn className="icon" />
        <Facebook className="icon" />
        <Mail className="icon" />
      </div>
    </div>
  );
};

export default Footer;
