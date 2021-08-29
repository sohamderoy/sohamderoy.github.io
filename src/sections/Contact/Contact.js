import React from "react";
import SocialmediaApps from "../../components/SocialmediaApps/SocialmediaApps";
import "./Contact.css";
import Button from "../../components/Button/Button";
import preval from "preval.macro";
const Contact = () => {
  return (
    <div>
      <h1>Let's Connect</h1>
      <div className="contact-text-wrapper">
        <h3 className="contact-text">
          Discuss a project or just want to say Hi?
        </h3>
        <h3 className="contact-text">My inbox is always open!</h3>
      </div>
      <SocialmediaApps />
      <Button
        path={process.env.REACT_APP_RESUME_URL}
        buttonType="button-primary"
        buttonText="Resume"
      />
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
