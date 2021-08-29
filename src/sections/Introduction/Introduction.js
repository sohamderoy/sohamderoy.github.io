import React, { useState, useEffect } from "react";
import "./Introduction.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import SocialmediaApps from "../../components/SocialmediaApps/SocialmediaApps";
import Button from "../../components/Button/Button";

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
          <span className="intro-hi-emoji">👋</span>
          <span> I am</span>
        </h3>
        <h1 className="intro-name">Soham De Roy</h1>
        <h3 className="intro-title">
          SDET @ Mastercard • Tech Blogger • IIT Kanpur
        </h3>

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
