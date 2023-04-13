import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p>Copyright SucuLove</p>
      <Link to="https://florrueda.github.io/" target="_blank">
        Designed by Florencia Rueda
      </Link>
    </footer>
  );
};

export default Footer;
