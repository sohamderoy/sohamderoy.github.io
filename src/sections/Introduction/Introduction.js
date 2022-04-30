import React, { useState, useEffect } from "react";
import "./Introduction.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import SocialmediaApps from "../../components/SocialmediaApps/SocialmediaApps";
import Button from "../../components/Button/Button";
import JavaLogo from "../../assets/skills/java.svg";
import ReactLogo from "../../assets/skills/react.svg";
import ReduxLogo from "../../assets/skills/redux.svg";
import JavaScriptLogo from "../../assets/skills/javascript.svg";

const Introduction = () => {
  const [helloText, setHelloText] = useState("Hello!");
  const [helloTextClass, setHelloTextClass] = useState("hello-text-blue");

  useEffect(() => {
    const intervalHandle = setInterval(() => {
      if (helloText === "Hello!") {
        setHelloText("নমস্কার");
        setHelloTextClass("hello-text-red");
      } else if (helloText === "নমস্কার") {
        setHelloText("नमस्ते");
        setHelloTextClass("hello-text-green");
      } else if (helloText === "नमस्ते") {
        setHelloText("Hola!");
        setHelloTextClass("hello-text-blue");
      } else if (helloText === "Hola!") {
        setHelloText("こんにちは");
        setHelloTextClass("hello-text-red");
      } else if (helloText === "こんにちは") {
        setHelloText("你好");
        setHelloTextClass("hello-text-green");
      } else if (helloText === "你好") {
        setHelloText("Bonjour");
        setHelloTextClass("hello-text-blue");
      } else if (helloText === "Bonjour") {
        setHelloText("Aloha");
        setHelloTextClass("hello-text-red");
      } else if (helloText === "Aloha") {
        setHelloText("Hallo");
        setHelloTextClass("hello-text-green");
      } else if (helloText === "Hallo") {
        setHelloText("Привет");
        setHelloTextClass("hello-text-red");
      } else if (helloText === "Привет") {
        setHelloText("Hello!");
        setHelloTextClass("hello-text-blue");
      }
    }, 2000);
    return () => clearInterval(intervalHandle);
  }, [helloText]);
  return (
    <div className="introduction-main-container">
      <div>
        <h3 className="intro-hello-text">
          <span className={`${helloTextClass}`}>{helloText} </span>
          {/* <span className="intro-hi-emoji">👋</span> */}
          <span> I am</span>
        </h3>
        <h1 className="intro-name">Soham De Roy</h1>
        <h3 className="intro-title">
          SDE 2 @ Mastercard • Tech Blogger • IIT Kanpur
        </h3>
        <h6 className="current-location">
          <span>📍</span> Pune, India
        </h6>
        <div className="intro-skills-wrapper">
          <span className="intro-skills visibility-hidden-2">
            <img
              draggable="false"
              className="intro-skills-img"
              src={JavaScriptLogo}
              alt="Javascript Logo"
            />
            <span className="intro-skills-text">Javascript</span>
          </span>
          <span className="intro-skills">
            <img
              draggable="false"
              className="intro-skills-img"
              src={ReactLogo}
              alt="React Logo"
            />
            <span className="intro-skills-text">React</span>
          </span>
          <span className="intro-skills">
            <img
              draggable="false"
              className="intro-skills-img"
              src={JavaLogo}
              alt="Java Logo"
            />
            <span className="intro-skills-text">Java</span>
          </span>
          <span className="intro-skills visibility-hidden-1">
            <img
              draggable="false"
              className="intro-skills-img"
              src={ReduxLogo}
              alt="Redux Logo"
            />
            <span className="intro-skills-text">Redux</span>
          </span>
          <a className="intro-skills-more" href="#skills-link">
            ... More
          </a>
        </div>

        <div className="introduction-text">
          <p className="intro-text">
            An aspiring Full Stack Developer currently focusing on Front-End
            Development and a Web Design enthusiast. I love crafting
            easy-to-use, beautiful and clean products.
          </p>
        </div>
        <div className="introduction-socialmedia-container">
          <SocialmediaApps />
        </div>
        <div className="introduction-button-container">
          <div className="introduction-buttons">
            <Button
              path={process.env.REACT_APP_RESUME_URL}
              buttonType="button-primary"
              buttonText="Resume"
            />
          </div>
          <div className="introduction-buttons">
            <Button
              path={process.env.REACT_APP_BLOG_URL}
              buttonType="button-secondary"
              buttonText="Blogs"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
