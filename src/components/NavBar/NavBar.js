import React from "react";
import { HashLink } from "react-router-hash-link";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div id="navbar-list" className="container flex">
        <nav>
          <ul>
            <li>
              <HashLink smooth to="/#skills-link">
                <a>Skills</a>
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#education-link">
                <a>Education</a>
              </HashLink>
              {/* <a href="index.html">Education</a> */}
            </li>
            <li>
              <HashLink smooth to="/#experience-link">
                <a>Experience</a>
              </HashLink>
              {/* <a href="features.html">Experience</a> */}
            </li>
            <li>
              <HashLink smooth to="/#projects-link">
                <a>Projects</a>
              </HashLink>
              {/* <a href="docs.html">Projects</a> */}
            </li>
            <li>
              <HashLink smooth to="/#certificate-link">
                <a>Certificates</a>
              </HashLink>
              {/* <a href="#certificate-link">Certificates</a> */}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
