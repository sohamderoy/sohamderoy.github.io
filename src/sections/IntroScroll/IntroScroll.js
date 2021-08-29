import React, { useState, useEffect } from "react";
import "./IntroScroll.css";
const IntroScroll = () => {
  const [introText, setIntroText] = useState("Learn");
  const [introTextClass, setIntroTextClass] = useState("learn");

  useEffect(() => {
    const intervalHandle = setInterval(() => {
      if (introText === "Learn") {
        setIntroText("Design");
        setIntroTextClass("design");
      } else if (introText === "Design") {
        setIntroText("Hack");
        setIntroTextClass("hack");
      } else if (introText === "Hack") {
        setIntroText("Repeat");
        setIntroTextClass("repeat");
      } else if (introText === "Repeat") {
        setIntroText("Learn");
        setIntroTextClass("learn");
      }
    }, 4000);
    return () => clearInterval(intervalHandle);
  }, [introText]);

  return (
    <div className="intro-scroll-main-container">
      <h2 className={`intro-scroll-text ${introTextClass}`}>{introText}</h2>
    </div>
  );
};

export default IntroScroll;
