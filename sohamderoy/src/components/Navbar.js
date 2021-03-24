import React, { useState } from "react";
import { Button } from "./Button";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          Epic
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/skills" className="nav-links" onClick={closeMobileMenu}>
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/works" className="nav-links" onClick={closeMobileMenu}>
              Works <i className="fas fa-caret-down"></i>
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className="nav-item">
            <Link to="/resume" className="nav-links" onClick={closeMobileMenu}>
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
