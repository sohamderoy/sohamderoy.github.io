import React from "react";
import SocialmediaApps from "../../components/SocialmediaApps/SocialmediaApps";
import "./Contact.css";
import Button from "../../components/Button/Button";
import preval from "preval.macro";
import SohamDeRoy from "../../assets/img/sohamderoy.jpg";
const Contact = () => {
  return (
    <div>
      <div className="contact-text-wrapper">
        <h1 className="section-title">Let's Connect</h1>
        <h3 className="contact-text">
          Discuss a project or just want to say Hi?
        </h3>
        <h3 className="contact-text">My inbox is always open!</h3>
      </div>
      <div className="contact-main-wrapper">
        <div className="contact-profile-img-wrapper">
          <img
            draggable="false"
            className="contact-profile-img"
            src={SohamDeRoy}
            alt="Profile Pic."
          />
        </div>
        <div>
          <h1 className="contact-name">Soham De Roy</h1>
          <h3 className="contact-title">
            SDE 2 @ Mastercard • Tech Blogger • IIT Kanpur
          </h3>
          <h6 className="current-location">
            <span>📍</span> Pune, India
          </h6>
          <SocialmediaApps />
          <div className="contact-button-container">
            <div className="contact-buttons">
              <Button
                path={process.env.REACT_APP_RESUME_URL}
                buttonType="button-primary"
                buttonText="Resume"
              />
            </div>
            <div className="contact-buttons">
              <Button
                path={process.env.REACT_APP_BLOG_URL}
                buttonType="button-secondary"
                buttonText="Blogs"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="contact-luo">
        <div>
          {/* <i className="contact-last-updated-on-white">
            Last updated on:{" "}
            {preval`module.exports = new Date().toLocaleString();`}
          </i> */}
          <i className="contact-last-updated-on-opacity-0">
            Last updated on (invisible):{" "}
            {preval`module.exports = new Date().toLocaleString();`}
          </i>
        </div>
        <div>
          <i className="contact-last-updated-on">
            Last updated on:{" "}
            {preval`module.exports = new Date().toLocaleString();`}
          </i>
        </div>
      </div>
    </div>
  );
};

export default Contact;
