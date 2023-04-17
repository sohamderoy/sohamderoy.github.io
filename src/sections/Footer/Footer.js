import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <h3 className="footer-text">
        Designed & developed with ❤️{" "}
        {/* <img
          alt="❤️"
          draggable="false"
          src="https://twemoji.maxcdn.com/2/72x72/2764.png"
          style={{
            height: "1rem",
            width: "1rem",
            margin: "0px 0.05em 0px 0.1em",
            verticalAlign: "-0.1em",
          }}
        />{" "} */}
        by{" "}
        <a className="footer-name-link" href="https://www.sohamderoy.dev">
          Soham De Roy
        </a>
      </h3>
    </div>
  );
};

export default Footer;
