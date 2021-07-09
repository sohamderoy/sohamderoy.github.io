import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PortfolioCard from "../../components/PortfolioCard/PortfolioCard";
import img1 from "../../assets/certs/python-3.png";
import Button from "../../components/Button/Button";
import "./Certificates.css";

const Certificates = () => {
  return (
    <div>
      <h1 id="certificate-link" className="section-title">
        Certificates
      </h1>
      <div className="certificates-wrapper">
        <div className="certificates-card-1-wrapper">
          <PortfolioCard
            isImg={false}
            isTitle={true}
            isSubtitle={false}
            isText={false}
            isProjectLink={false}
            isGithubLink={false}
            isViewCertificate={true}
            imgPath={img1}
            title="Card Title"
            certificateLink=""
          />
        </div>
        <div className="certificates-card-2-wrapper">
          <PortfolioCard
            isImg={false}
            isTitle={true}
            isSubtitle={false}
            isText={false}
            isProjectLink={false}
            isGithubLink={false}
            isViewCertificate={true}
            imgPath={img1}
            title="Card Title"
            certificateLink=""
          />
        </div>
        <div className="certificates-card-3-wrapper">
          <PortfolioCard
            isImg={false}
            isTitle={true}
            isSubtitle={false}
            isText={false}
            isProjectLink={false}
            isGithubLink={false}
            isViewCertificate={true}
            imgPath={img1}
            title="Card Title"
            certificateLink=""
          />
        </div>
        <div className="certificates-card-4-wrapper">
          <PortfolioCard
            isImg={false}
            isTitle={true}
            isSubtitle={false}
            isText={false}
            isProjectLink={false}
            isGithubLink={false}
            isViewCertificate={true}
            imgPath={img1}
            title="Card Title"
            certificateLink=""
          />
        </div>
        <div className="certificates-card-5-wrapper">
          <PortfolioCard
            isImg={false}
            isTitle={true}
            isSubtitle={false}
            isText={false}
            isProjectLink={false}
            isGithubLink={false}
            isViewCertificate={true}
            imgPath={img1}
            title="Card Title"
            certificateLink=""
          />
        </div>
        <div className="certificates-card-6-wrapper">
          <PortfolioCard
            isImg={false}
            isTitle={true}
            isSubtitle={false}
            isText={false}
            isProjectLink={false}
            isGithubLink={false}
            isViewCertificate={true}
            imgPath={img1}
            title="Card Title"
            certificateLink=""
          />
        </div>
      </div>
      <Link to="/certificates">
        <Button buttonType="button-primary" buttonText="All Certificates" />
      </Link>
    </div>
  );
};

export default Certificates;
