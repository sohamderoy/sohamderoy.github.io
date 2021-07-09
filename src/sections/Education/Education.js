import React from "react";
import "./Education.css";
import IITKLogo from "../../assets/education/iitk-logo.png";
import MSRITLogo from "../../assets/education/msrit-logo.png";

const Education = () => {
  return (
    <div>
      <h1 id="education-link" className="section-title">
        Education
      </h1>
      <div className="education-wrapper">
        <div className="education-iitk">
          <img
            draggable="false"
            className="education-wrapper-img"
            src={IITKLogo}
            alt="IITK Logo"
          />
          <h2>IIT Kanpur</h2>
          <h3 className="education-degree">M.Tech</h3>
          <i className="education-time">July 2018 - August 2020</i>
        </div>
        <div className="education-msrit">
          <img
            draggable="false"
            className="education-wrapper-img"
            src={MSRITLogo}
            alt="MSRIT Logo"
          />

          <h2>MSRIT Bangalore</h2>
          <h3 className="education-degree">B.Tech</h3>
          <i className="education-time">August 2013 - June 2017</i>
        </div>
      </div>
    </div>
  );
};

export default Education;
