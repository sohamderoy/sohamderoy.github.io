import React, { useState, useEffect } from "react";
import "./IntroScroll.css";
const IntroScroll = () => {
  const [introText, setIntroText] = useState("(un)(re)learn");
  const [introTextClass, setIntroTextClass] = useState("learn");

  useEffect(() => {
    const intervalHandle = setInterval(() => {
      if (introText === "(un)(re)learn") {
        setIntroText("design");
        setIntroTextClass("design");
      } else if (introText === "design") {
        setIntroText("hack");
        setIntroTextClass("hack");
      } else if (introText === "hack") {
        setIntroText("repeat");
        setIntroTextClass("repeat");
      } else if (introText === "repeat") {
        setIntroText("(un)(re)learn");
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
