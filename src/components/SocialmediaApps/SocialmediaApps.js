import React from "react";
import "./SocialmediaApps.css";
// import FacebookLogo from "../../assets/social-media-apps/facebook.svg";
import GithubLogo from "../../assets/social-media-apps/github.svg";
import GmailLogo from "../../assets/social-media-apps/gmail.svg";
import LinkedinLogo from "../../assets/social-media-apps/linkedin.svg";
import HashnodeLogo from "../../assets/social-media-apps/hashnode.svg";
import DevtoLogo from "../../assets/social-media-apps/devto.svg";

const SocialmediaApps = () => {
  return (
    <div>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/sohamderoy/"
        rel="noreferrer nofollow"
      >
        <img
          className="social-media-icons"
          draggable="false"
          src={LinkedinLogo}
          alt="Linkedin Logo"
        />
      </a>
      <a
        target="_blank"
        href="https://github.com/sohamderoy"
        rel="noreferrer nofollow"
      >
        <img
          className="social-media-icons"
          draggable="false"
          src={GithubLogo}
          alt="Github Logo"
        />
      </a>
      <a
        target="_blank"
        href="https://blog.sohamderoy.dev/"
        rel="noreferrer nofollow"
      >
        <img
          className="social-media-icons"
          draggable="false"
          src={HashnodeLogo}
          alt="Hashnode Logo"
        />
      </a>
      {/* <a
        target="_blank"
        href="https://dev.to/sohamderoy"
        rel="noreferrer nofollow"
      >
        <img
          className="social-media-icons"
          draggable="false"
          src={DevtoLogo}
          alt="Devto Logo"
        />
      </a> */}

      <a
        target="_blank"
        href="mailto:sohamderoy.iitk@gmail.com"
        rel="noreferrer nofollow"
      >
        <img
          className="social-media-icons"
          draggable="false"
          src={GmailLogo}
          alt="Gmail Logo"
        />
      </a>

      {/* <a
        target="_blank"
        href={process.env.REACT_APP_FACEBOOK_URL}
        rel="noreferrer nofollow"
      >
        <img
          className="social-media-icons"
          draggable="false"
          src={FacebookLogo}
          alt="Facebook Logo"
        />
      </a> */}
    </div>
  );
};

export default SocialmediaApps;
