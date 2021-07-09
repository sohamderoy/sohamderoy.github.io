import React from "react";
import "../../App.css";
import Introduction from "../../sections/Introduction/Introduction";
import IntroScroll from "../../sections/IntroScroll/IntroScroll";
import Skills from "../../sections/Skills/Skills";
import Education from "../../sections/Education/Education";
import ProfEx from "../../sections/ProfEx/ProfEx";
import Projects from "../../sections/Projects/Projects";
import Certificates from "../../sections/Certificates/Certificates";
import Contact from "../../sections/Contact/Contact";
import Footer from "../../sections/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";

import SkillsImage from "../../assets/skills/undraw_Coding3.svg";
const IndexPage = () => {
  return (
    <div>
      <div className="main-grid-wrapper">
        <div className="grid-navbar-wrapper">
          <NavBar />
        </div>
        <div className="grid-introduction-wrapper">
          <Introduction />
        </div>
        <div className="grid-intro-scroll-wrapper">
          <IntroScroll />
        </div>
        <div className="grid-skills-wrapper">
          <Skills />
        </div>
        <div className="grid-skills-svg-wrapper">
          <img draggable="false" src={SkillsImage} alt="Java Logo" />
        </div>
        <div className="grid-education-wrapper">
          <Education />
        </div>
        <div className="grid-prof-ex-wrapper">
          <ProfEx />
        </div>
        <div className="grid-projects-wrapper">
          <Projects />
        </div>
        <div className="grid-certificates-wrapper">
          <Certificates />
        </div>
        <div className="grid-contact-wrapper">
          <Contact />
        </div>
        <div className="grid-intro-scroll-2-wrapper">
          <IntroScroll />
        </div>
        <div className="grid-footer-wrapper">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
