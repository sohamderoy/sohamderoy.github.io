import React from "react";
import PortfolioCard from "../../components/PortfolioCard/PortfolioCard";
import Button from "../../components/Button/Button";
import project1 from "../../assets/projects/project1.PNG";
import project2 from "../../assets/projects/project2.PNG";
import project3 from "../../assets/projects/project3.PNG";

import "./Projects.css";

const Projects = () => {
  return (
    <div>
      <h1 id="projects-link" className="section-title">
        Projects & Contributions
      </h1>
      <div className="projects-wrapper">
        <div className="projects-card-1-wrapper">
          <PortfolioCard
            isImg={true}
            isTitle={true}
            isSubtitle={true}
            isText={true}
            isProjectLink={true}
            isGithubLink={true}
            isViewCertificate={false}
            imgPath={project1}
            tooltipText="Building a Software Developer Portfolio with clean design that will help to showcase your work and skills as a software developer. Personal website hosted on: sohamderoy.dev"
            title="sohamderoy.github.io"
            subtile="Developer portfolio made with React"
            text="Building a Software Developer Portfolio with clean design that will help to showcase ..."
            projectLink="https://sohamderoy.dev"
            githubLink="https://github.com/sohamderoy/sohamderoy.github.io"
          />
        </div>
        <div className="projects-card-2-wrapper">
          <PortfolioCard
            isImg={true}
            isTitle={true}
            isSubtitle={true}
            isText={true}
            isProjectLink={true}
            isGithubLink={true}
            isViewCertificate={false}
            imgPath={project2}
            tooltipText="A responsive dummy website deployment site using CSS grid. Hosted on Netlify."
            title="calida"
            subtile="Card Subtitle"
            text="A responsive dummy website deployment site using CSS grid. Hosted on Netlify."
            projectLink="https://www.sohamderoy.dev/calida/"
            githubLink="https://github.com/sohamderoy/calida"
          />
        </div>
        <div className="projects-card-3-wrapper">
          <PortfolioCard
            isImg={true}
            isTitle={true}
            isSubtitle={true}
            isText={true}
            isProjectLink={true}
            isGithubLink={true}
            isViewCertificate={false}
            imgPath={project3}
            tooltipText="A todo Application, made with React. Uses local browser local memory to save the todos. Implements functional components, and react hooks like useState, useEffect."
            title="todoapp"
            subtile="Card Subtitle"
            text="A todo Application, made with React. Uses local browser local memory to save ..."
            projectLink="https://www.sohamderoy.dev/todoapp/"
            githubLink="https://github.com/sohamderoy/todoapp"
          />
        </div>
        {/* <div className="projects-card-4-wrapper">
          <PortfolioCard
            isImg={false}
            isTitle={true}
            isSubtitle={true}
            isText={true}
            isProjectLink={true}
            isGithubLink={true}
            isViewCertificate={false}
            tooltipText="Building a Software Developer Portfolio with clean design that will help to showcase your work and skills as a software developer. Personal website hosted on: sohamderoy.dev"
            title="Card Title"
            subtile="Card Subtitle"
            text="Some quick example text to build on the card title and make up
                the bulk of the card's content."
            projectLink=""
            githubLink=""
          />
        </div>
        <div className="projects-card-5-wrapper">
          <PortfolioCard
            isImg={false}
            isTitle={true}
            isSubtitle={true}
            isText={true}
            isProjectLink={true}
            isGithubLink={true}
            isViewCertificate={false}
            tooltipText="Building a Software Developer Portfolio with clean design that will help to showcase your work and skills as a software developer. Personal website hosted on: sohamderoy.dev"
            title="Card Title"
            subtile="Card Subtitle"
            text="Some quick example text to build on the card title and make up
                the bulk of the card's content."
            projectLink=""
            githubLink=""
          />
        </div>
        <div className="projects-card-6-wrapper">
          <PortfolioCard
            isImg={false}
            isTitle={true}
            isSubtitle={true}
            isText={true}
            isProjectLink={true}
            isGithubLink={true}
            isViewCertificate={false}
            tooltipText="Building a Software Developer Portfolio with clean design that will help to showcase your work and skills as a software developer. Personal website hosted on: sohamderoy.dev"
            title="Card Title"
            subtile="Card Subtitle"
            text="Some quick example text to build on the card title and make up
                the bulk of the card's content."
            projectLink=""
            githubLink=""
          />
        </div> */}
      </div>
      <Button
        path={process.env.REACT_APP_GITHUB_URL}
        buttonType="button-primary"
        buttonText="More on Github"
      />
    </div>
  );
};

export default Projects;
