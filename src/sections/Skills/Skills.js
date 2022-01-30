import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import "./Skills.css";

import JavaLogo from "../../assets/skills/java.svg";
import JavaScriptLogo from "../../assets/skills/javascript.svg";
import HtmlLogo from "../../assets/skills/html5.svg";
import CssLogo from "../../assets/skills/css3.svg";
import ReactLogo from "../../assets/skills/react.svg";
import ReduxLogo from "../../assets/skills/redux.svg";
import SqlLogo from "../../assets/skills/sql.png";
import GitLogo from "../../assets/skills/git.svg";
import MongoDbLogo from "../../assets/skills/mongodb.svg";
import SeleniumLogo from "../../assets/skills/selenium.svg";
import BootstrapLogo from "../../assets/skills/bootstrap2.svg";
import IntellijLogo from "../../assets/skills/intellij.svg";
import PostmanLogo from "../../assets/skills/postman.svg";
import VsCodeLogo from "../../assets/skills/vscode.svg";
const Skills = () => {
  const useStylesBootstrap = makeStyles((theme) => ({
    arrow: {
      color: theme.palette.common.black,
    },
    tooltip: {
      backgroundColor: theme.palette.common.black,
      fontSize: "1rem",
      fontFamily: "Montserrat Regular",
    },
  }));
  function BootstrapTooltip(props) {
    const classes = useStylesBootstrap();

    return <Tooltip arrow classes={classes} {...props} />;
  }
  return (
    <div>
      <h1 id="skills-link" className="section-title">
        Skills & Tools
      </h1>
      <div className="skills-wrapper">
        <div className="skills-items">
          <img
            draggable="false"
            className="skills-wrapper-img"
            src={JavaScriptLogo}
            alt="JavaScript Logo"
          />
          <h6 className="skills-items-text">
            <bold>Javascript</bold>
          </h6>
        </div>
        <div className="skills-items">
          <img
            draggable="false"
            className="skills-wrapper-img"
            src={ReactLogo}
            alt="React Logo"
          />
          <h6 className="skills-items-text">
            <bold>React</bold>
          </h6>
        </div>
        <div className="skills-items">
          <img
            draggable="false"
            className="skills-wrapper-img"
            src={JavaLogo}
            alt="Java Logo"
          />
          <h6 className="skills-items-text">
            <bold>Java</bold>
          </h6>
        </div>
        <div className="skills-items">
          <img
            draggable="false"
            className="skills-wrapper-img"
            src={ReduxLogo}
            alt="Redux Logo"
          />
          <h6 className="skills-items-text">
            <bold>Redux</bold>
          </h6>
        </div>
        <div className="skills-items">
          <img
            draggable="false"
            className="skills-wrapper-img"
            src={SqlLogo}
            alt="SQL Logo"
          />
          <h6 className="skills-items-text">
            <bold>SQL</bold>
          </h6>
        </div>
        <div className="skills-items">
          <img
            draggable="false"
            className="skills-wrapper-img"
            src={GitLogo}
            alt="GIT Logo"
          />
          <h6 className="skills-items-text">
            <bold>GIT</bold>
          </h6>
        </div>
        <div className="skills-items">
          <img
            draggable="false"
            className="skills-wrapper-img"
            src={HtmlLogo}
            alt="HTML Logo"
          />
          <h6 className="skills-items-text">
            <bold>HTML</bold>
          </h6>
        </div>
        <div className="skills-items">
          <img
            draggable="false"
            className="skills-wrapper-img"
            src={CssLogo}
            alt="CSS Logo"
          />
          <h6 className="skills-items-text">
            <bold>CSS</bold>
          </h6>
        </div>
        <div className="skills-items">
          <img
            draggable="false"
            className="skills-wrapper-img"
            src={SeleniumLogo}
            alt="Selenium Logo"
          />
          <h6 className="skills-items-text">
            <bold>Selenium</bold>
          </h6>
        </div>
        <div className="skills-items">
          <img
            draggable="false"
            className="skills-wrapper-img"
            src={PostmanLogo}
            alt="Postman Logo"
          />
          <h6 className="skills-items-text">
            <bold>Postman</bold>
          </h6>
        </div>
        <div className="skills-items">
          <img
            draggable="false"
            className="skills-wrapper-img"
            src={BootstrapLogo}
            alt="Bootstrap Logo"
          />
          <h6 className="skills-items-text">
            <bold>Bootstrap</bold>
          </h6>
        </div>
        <div className="skills-items">
          <img
            draggable="false"
            className="skills-wrapper-img"
            src={VsCodeLogo}
            alt="VS Code Logo"
          />
          <h6 className="skills-items-text">
            <bold>VS Code</bold>
          </h6>
        </div>
        <div className="skills-items">
          <img
            draggable="false"
            className="skills-wrapper-img"
            src={IntellijLogo}
            alt="Intellij Logo"
          />
          <h6 className="skills-items-text">
            <bold>Intellij</bold>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Skills;
