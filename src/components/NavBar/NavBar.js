import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    // <div className="navbar">
    //   <div id="navbar-list" className="container flex">
    //     <nav>
    //       <ul>
    //         <li>
    //           <HashLink smooth to="/#skills-link">
    //             <a>Skills</a>
    //           </HashLink>
    //         </li>
    //         <li>
    //           <HashLink smooth to="/#education-link">
    //             <a>Education</a>
    //           </HashLink>
    //           {/* <a href="index.html">Education</a> */}
    //         </li>
    //         <li>
    //           <HashLink smooth to="/#experience-link">
    //             <a>Experience</a>
    //           </HashLink>
    //           {/* <a href="features.html">Experience</a> */}
    //         </li>
    //         <li>
    //           <HashLink smooth to="/#projects-link">
    //             <a>Projects</a>
    //           </HashLink>
    //           {/* <a href="docs.html">Projects</a> */}
    //         </li>
    //         <li>
    //           <HashLink smooth to="/#certificate-link">
    //             <a>Certificates</a>
    //           </HashLink>
    //           {/* <a href="#certificate-link">Certificates</a> */}
    //         </li>
    //       </ul>
    //     </nav>
    //   </div>
    // </div>
    <div className="nav-wrapper">
      <HashLink className="nav-item nav-item-1" smooth to="/#skills-link">
        <h1>Skills</h1>
      </HashLink>
      <HashLink className="nav-item nav-item-2" smooth to="/#education-link">
        <h1>Education</h1>
      </HashLink>
      <HashLink className="nav-item nav-item-3" smooth to="/#experience-link">
        <h1>Experience</h1>
      </HashLink>
      <HashLink className="nav-item nav-item-4" smooth to="/#projects-link">
        <h1>Projects</h1>
      </HashLink>
      {/* <HashLink className="nav-item nav-item-5" smooth to="/#certificate-link">
        <h1>Certificates</h1>
      </HashLink> */}
      {/* <HashLink className="nav-item nav-item-6" smooth to="/#blogs-link">
        <button className="nav-btn">Blogs</button>
      </HashLink> */}
      <Link
        className="nav-item nav-item-6"
        smooth
        to={{
          pathname: "https://blogs.sohamderoy.dev/",
        }}
        target="_blank"
        rel="noreferrer nofollow"
      >
        <button className="nav-btn">Blogs</button>
      </Link>
    </div>
  );
};

export default NavBar;
