import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { FiAlignJustify } from "react-icons/fi";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import "./Navbar.scss";

const Navbar = () => {
  const [show, setShow] = useState(null);
  const open = Boolean(show);

  const handleClick = (event) => {
    setShow(event.currentTarget);
  };

  const handleClose = () => {
    setShow(null);
  };

  const [showCategories, setShowCategories] = useState(false);

  const handleCategories = (event) => {
    setShowCategories((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <h1>
            <Link to="/" className="logo">
              <StaticImage
                src="../../assets/images/Yuya Hochi-logo.png"
                alt="Yuya Hochi"
                className="logo-picture"
                placeholder="blurred"
                layout="constrained"
              />
            </Link>
          </h1>
          <button className="nav-btn" onClick={handleClick}>
            <FiAlignJustify size="2rem" style={{ color: "#D4F1F4" }} />
          </button>
          <Menu
            anchorEl={show}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            onClose={handleClose}
            open={open}
          >
            <MenuItem onClick={handleClose}>
              <Link to="/portfolio" className="nav-item">
                Portfolio
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/blog" className="nav-item">
                Blog
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/contact" className="nav-item">
                Contact
              </Link>
            </MenuItem>
          </Menu>
          <div className="nav-links">
            <Link
              to="/portfolio"
              className="nav-item"
              activeClassName="active-link"
              partiallyActive={true}
            >
              Portfolio
            </Link>
            <Link
              to="/blog"
              className="nav-item"
              activeClassName="active-link"
              partiallyActive={true}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="nav-item"
              activeClassName="active-link"
              partiallyActive={true}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
