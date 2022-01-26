import React from "react";
import "./SocialmediaApps.css";
import FacebookLogo from "../../assets/social-media-apps/facebook.svg";
import GithubLogo from "../../assets/social-media-apps/github.svg";
import GoogleLogo from "../../assets/social-media-apps/google.svg";
import LinkedinLogo from "../../assets/social-media-apps/linkedin.svg";
import HashnodeLogo from "../../assets/social-media-apps/hashnode.svg";
import DevtoLogo from "../../assets/social-media-apps/devto.svg";

const SocialmediaApps = () => {
  return (
    <div>
      <a
        target="_blank"
        href={process.env.REACT_APP_LINKEDIN_URL}
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
        href={process.env.REACT_APP_GITHUB_URL}
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
        href={process.env.REACT_APP_BLOG_URL}
        rel="noreferrer nofollow"
      >
        <img
          className="social-media-icons"
          draggable="false"
          src={HashnodeLogo}
          alt="Hashnode Logo"
        />
      </a>
      <a
        target="_blank"
        href={process.env.REACT_APP_DEV_TO_URL}
        rel="noreferrer nofollow"
      >
        <img
          className="social-media-icons"
          draggable="false"
          src={DevtoLogo}
          alt="Devto Logo"
        />
      </a>

      <a
        target="_blank"
        href={process.env.REACT_APP_GMAIL_URL}
        rel="noreferrer nofollow"
      >
        <img
          className="social-media-icons"
          draggable="false"
          src={GoogleLogo}
          alt="Google Logo"
        />
      </a>

      <a
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
      </a>
    </div>
  );
};

export default SocialmediaApps;
