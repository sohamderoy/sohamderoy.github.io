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
import SqlLogo from "../../assets/skills/sql.png";
import MongoDbLogo from "../../assets/skills/mongodb.svg";
import SeleniumLogo from "../../assets/skills/selenium.svg";
const Skills = () => {
  const useStylesBootstrap = makeStyles((theme) => ({
    arrow: {
      color: theme.palette.common.black,
    },
    tooltip: {
      backgroundColor: theme.palette.common.black,
      fontSize: "1rem",
      fontFamily: "Google Sans Regular",
    },
  }));
  function BootstrapTooltip(props) {
    const classes = useStylesBootstrap();

    return <Tooltip arrow classes={classes} {...props} />;
  }
  return (
    <div>
      <h1 id="skills-link" className="section-title">
        Skills
      </h1>
      <div className="skills-wrapper">
        <BootstrapTooltip
          leaveDelay={200}
          TransitionComponent={Zoom}
          title="Java"
          placement="top"
          arrow
        >
          <img
            draggable="false"
            className="skills-wrapper-img"
            src={JavaLogo}
            alt="Java Logo"
          />
        </BootstrapTooltip>
        <BootstrapTooltip
          leaveDelay={200}
          TransitionComponent={Zoom}
          title="JavaScript"
          placement="top"
          arrow
        >
          <img
            draggable="false"
            className="skills-wrapper-img"
            src={JavaScriptLogo}
            alt="JavaScript Logo"
          />
        </BootstrapTooltip>
        <BootstrapTooltip
          leaveDelay={200}
          TransitionComponent={Zoom}
          title="React"
          placement="top"
          arrow
        >
          <img
            draggable="false"
            className="skills-wrapper-img"
            src={ReactLogo}
            alt="React Logo"
          />
        </BootstrapTooltip>
        <BootstrapTooltip
          leaveDelay={200}
          TransitionComponent={Zoom}
          title="SQL"
          placement="top"
          arrow
        >
          <img
            draggable="false"
            className="skills-wrapper-img"
            src={SqlLogo}
            alt="SQL Logo"
          />
        </BootstrapTooltip>
        <BootstrapTooltip
          leaveDelay={200}
          TransitionComponent={Zoom}
          title="HTML"
          placement="top"
          arrow
        >
          <img
            draggable="false"
            className="skills-wrapper-img"
            src={HtmlLogo}
            alt="HTML Logo"
          />
        </BootstrapTooltip>
        <BootstrapTooltip
          leaveDelay={200}
          TransitionComponent={Zoom}
          title="CSS"
          placement="top"
          arrow
        >
          <img
            draggable="false"
            className="skills-wrapper-img"
            src={CssLogo}
            alt="CSS Logo"
          />
        </BootstrapTooltip>
        <BootstrapTooltip
          leaveDelay={200}
          TransitionComponent={Zoom}
          title="Selenium"
          placement="top"
          arrow
        >
          <img
            draggable="false"
            className="skills-wrapper-img"
            src={SeleniumLogo}
            alt="Selenium Logo"
          />
        </BootstrapTooltip>
        {/* <BootstrapTooltip
          leaveDelay={200}
          TransitionComponent={Zoom}
          title="Selenium"
          placement="top"
          arrow
        >
          <img
            draggable="false"
            className="skills-wrapper-img"
            src={SeleniumLogo}
            alt="Selenium Logo"
          />
        </BootstrapTooltip>
        <BootstrapTooltip
          leaveDelay={200}
          TransitionComponent={Zoom}
          title="Selenium"
          placement="top"
          arrow
        >
          <img
            draggable="false"
            className="skills-wrapper-img"
            src={SeleniumLogo}
            alt="Selenium Logo"
          />
        </BootstrapTooltip>
        <BootstrapTooltip
          leaveDelay={200}
          TransitionComponent={Zoom}
          title="Selenium"
          placement="top"
          arrow
        >
          <img
            draggable="false"
            className="skills-wrapper-img"
            src={SeleniumLogo}
            alt="Selenium Logo"
          />
        </BootstrapTooltip>
        <BootstrapTooltip
          leaveDelay={200}
          TransitionComponent={Zoom}
          title="Selenium"
          placement="top"
          arrow
        >
          <img
            draggable="false"
            className="skills-wrapper-img"
            src={SeleniumLogo}
            alt="Selenium Logo"
          />
        </BootstrapTooltip> */}
      </div>
    </div>
  );
};

export default Skills;
