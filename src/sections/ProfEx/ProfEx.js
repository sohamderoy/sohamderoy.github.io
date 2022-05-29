import React from "react";
import { Chrono } from "react-chrono";
import MastercardLogo from "../../assets/prof-ex/mastercard-logo.jpg";
import "./ProfEx.css";

const ProfEx = () => {
  /* update this section regularly */
  const items = [
    {
      title: "Mar '22 - Present",
      cardTitle: "Software Engineer II",
    },
    {
      title: "Aug '20 - Feb '22",
      cardTitle: "Software Engineer I",
    },
  ];

  return (
    <div>
      <h1 id="experience-link" className="section-title">
        Professional Exp.
      </h1>
      <div className="prof-ex-company-details">
        <div className="prof-ex-wrapper">
          <div className="prof-ex-company-logo-img">
            <img
              draggable="false"
              className="prof-ex-wrapper-img"
              src={MastercardLogo}
              alt="Mastercard Logo"
            />
          </div>
          <div className="prof-ex-company-name">
            <h2 className="prof-ex-company">Mastercard</h2>
            <p className="prof-ex-absolute-time">August 2022 - Present</p>
          </div>
        </div>

        <Chrono
          items={items}
          mode="VERTICAL"
          slideShow={false}
          borderLessCards={true}
          scrollable={{ scrollbar: true }}
        />
      </div>
    </div>
  );
};

export default ProfEx;
