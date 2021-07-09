import React from "react";
import SocialmediaApps from "../../components/SocialmediaApps/SocialmediaApps";
import "./Contact.css";
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
    </div>
  );
};

export default Contact;
