import React from "react";
import MastercardLogo from "../../assets/prof-ex/mastercard-logo.jpg";
import "./ProfEx.css";

const ProfEx = () => {
  /* update this section regularly */

  return (
    <div>
      <h1 id="experience-link" className="section-title">
        Professional Exp.
      </h1>
      <div className="prof-ex-wrapper">
        <div className="prof-ex-mastercard-img">
          <img
            draggable="false"
            className="prof-ex-wrapper-img"
            src={MastercardLogo}
            alt="Mastercard Logo"
          />
        </div>
        <div className="prof-ex-mastercard">
          <h2 className="prof-ex-company">Mastercard</h2>
          <h3 className="prof-ex-title">
            Software Development Engineer in Test I
          </h3>
          <i className="prof-ex-time">August 2020 - Present</i>
          <div className="prof-ex-content-wrapper">
            {/* <ul>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non,
                voluptas.
              </li>
              <li>Lorem ipsum dolor sit.</li>
            </ul> */}
          </div>
          {/* <h3>Software Development Engineer in Test I</h3>
          <h4>August 2020 - Present</h4>
          <ul>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non,
              voluptas.
            </li>
            <li>Lorem ipsum dolor sit.</li>
          </ul> */}
        </div>
        {/* <div className="prof-ex-anothercompany-img">
          <img
            draggable="false"
            className="prof-ex-wrapper-img"
            src={MastercardLogo}
            alt="Mastercard Logo"
          />
        </div> */}
        {/* <div className="prof-ex-anothercompany">
          <h2>anothercompany</h2>
          <h3>Software Development Engineer in Test II</h3>
          <h4>August 2020 - Present</h4>
          <div className="prof-ex-content-wrapper">
            <ul>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non,
                voluptas.
              </li>
              <li>Lorem ipsum dolor sit.</li>
            </ul>
          </div>

          <h3>Software Development Engineer in Test I</h3>
          <h4>August 2020 - Present</h4>
          <ul>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non,
              voluptas.
            </li>
            <li>Lorem ipsum dolor sit.</li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default ProfEx;
