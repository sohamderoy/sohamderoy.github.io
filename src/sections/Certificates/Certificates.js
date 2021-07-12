import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PortfolioCard from "../../components/PortfolioCard/PortfolioCard";
import img1 from "../../assets/certs/certs-2.png";
import img2 from "../../assets/certs/certs-3.jpg";
import img3 from "../../assets/certs/certs-4.png";
import img4 from "../../assets/certs/certs-5.png";
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
            isImg={true}
            isTitle={true}
            isSubtitle={false}
            isText={false}
            isProjectLink={false}
            isGithubLink={false}
            isViewCertificate={true}
            imgPath={img3}
            tooltipText="Build Facebook Messenger from scratch (System Design Masterclass)"
            title="Build Facebook Messenger from ..."
            certificateLink="https://moonshot.scaler.com/s/sl/qHbBvq-2zI"
          />
        </div>
        <div className="certificates-card-2-wrapper">
          <PortfolioCard
            isImg={true}
            isTitle={true}
            isSubtitle={false}
            isText={false}
            isProjectLink={false}
            isGithubLink={false}
            isViewCertificate={true}
            imgPath={img4}
            tooltipText="JavaScript (Basic) Certificate"
            title="JavaScript (Basic) Certificate"
            certificateLink="https://www.hackerrank.com/certificates/491251b74f43"
          />
        </div>
        <div className="certificates-card-3-wrapper">
          <PortfolioCard
            isImg={true}
            isTitle={true}
            isSubtitle={false}
            isText={false}
            isProjectLink={false}
            isGithubLink={false}
            isViewCertificate={true}
            tooltipText="Ultimate Java Part 1: Fundamentals"
            imgPath={img2}
            title="Ultimate Java Part 1: Fundamentals"
            certificateLink="https://github.com/sohamderoy/OCW-Certificates/blob/master/Ultimate%20Java%20Part%201%20Fundamentals.pdf"
          />
        </div>
        <div className="certificates-card-4-wrapper">
          <PortfolioCard
            isImg={true}
            isTitle={true}
            isSubtitle={false}
            isText={false}
            isProjectLink={false}
            isGithubLink={false}
            isViewCertificate={true}
            tooltipText="Programming, Data Structures and Algorithms using Python"
            imgPath={img1}
            title="Programming, Data Structures ..."
            certificateLink="https://github.com/sohamderoy/OCW-Certificates/blob/master/NPTEL/Programming%2C%20Data%20Structures%20and%20Algorithms%20Using%20Python.jpg"
          />
        </div>

        {/* <div className="certificates-card-5-wrapper">
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
        </div> */}
      </div>
      <Link to="/certificates">
        <Button buttonType="button-primary" buttonText="All Certificates" />
      </Link>
    </div>
  );
};

export default Certificates;
