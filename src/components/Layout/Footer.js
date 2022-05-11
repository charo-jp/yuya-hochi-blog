import React from "react";

import "./Footer.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="page-footer">
      <p className="page-p">&#169; {currentYear} Created by YuyaHochi</p>
    </footer>
  );
};

export default Footer;
