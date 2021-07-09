import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <h3 className="footer-text">
        Designed & developed with{" "}
        <img
          alt="❤️"
          draggable="false"
          src="https://twemoji.maxcdn.com/2/72x72/2764.png"
          style={{
            height: "1rem",
            width: "1rem",
            margin: "0px 0.05em 0px 0.1em",
            verticalAlign: "-0.1em",
          }}
        />{" "}
        by Soham De Roy
      </h3>
    </div>
  );
};

export default Footer;
