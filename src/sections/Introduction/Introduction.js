import React from "react";
import "./Introduction.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import SocialmediaApps from "../../components/SocialmediaApps/SocialmediaApps";
import Button from "../../components/Button/Button";

const Introduction = () => {
  return (
    <div className="introduction-main-container">
      <div>
        <h1 className="intro-name">Soham De Roy</h1>
        <p className="intro-title">Mastercard | IIT Kanpur</p>

        <div className="introduction-text">
          <h3 className="intro-text">
            An aspiring Full Stack Developer currently focusing on Front-End
            Development and a Web Design enthusiast. I love crafting
            easy-to-use, beautiful and clean products.
          </h3>
        </div>
        <div className="introduction-socialmedia-container">
          <SocialmediaApps />
        </div>

        <Button
          path={process.env.REACT_APP_RESUME_URL}
          buttonType="button-primary"
          buttonText="Resume"
        />
      </div>
    </div>
  );
};

export default Introduction;
