import React from "react";
import Button from "../../components/Button/Button";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const CertificatePage = () => {
  return (
    <div className="introduction-main-container">
      <div>
        <h1 className="intro-name">Page Under Construction</h1>
        <Link to="/">
          <Button buttonType="button-primary" buttonText="Home" />
        </Link>
      </div>
    </div>
  );
};

export default CertificatePage;
