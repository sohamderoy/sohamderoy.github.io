import React from "react";
import PortfolioCard from "../../components/PortfolioCard/PortfolioCard";
import Button from "../../components/Button/Button";
// import project1 from "../../assets/blogs/blog1.png";
import project2 from "../../assets/blogs/blog2.png";
import project3 from "../../assets/blogs/blog3.png";
import project4 from "../../assets/blogs/blog4.png";

import "./Blogs.css";

const Projects = () => {
  return (
    <div>
      <h1 id="projects-link" className="section-title">
        Blogs
      </h1>
      <div className="projects-wrapper">
        <div className="projects-card-1-wrapper">
          <PortfolioCard
            isImg={true}
            isTitle={true}
            isSubtitle={false}
            isText={false}
            isProjectLink={false}
            isGithubLink={false}
            isReadBlog={true}
            isViewCertificate={false}
            imgPath={project4}
            title="How to make a Redux powered React application?"
            blogLink="https://www.freecodecamp.org/news/how-to-build-a-redux-powered-react-app/"
          />
        </div>
        <div className="projects-card-2-wrapper">
          <PortfolioCard
            isImg={true}
            isTitle={true}
            isSubtitle={false}
            isText={false}
            isProjectLink={false}
            isGithubLink={false}
            isReadBlog={true}
            isViewCertificate={false}
            imgPath={project3}
            title="What is Redux? Understanding Store, Action and Reducers in Redux"
            blogLink="https://www.freecodecamp.org/news/what-is-redux-store-actions-reducers-explained/"
          />
        </div>
        <div className="projects-card-3-wrapper">
          <PortfolioCard
            isImg={true}
            isTitle={true}
            isSubtitle={false}
            isText={false}
            isProjectLink={false}
            isGithubLink={false}
            isReadBlog={true}
            isViewCertificate={false}
            imgPath={project2}
            title="How to Center a Div with CSS – 10 Different Ways"
            blogLink="https://www.freecodecamp.org/news/how-to-center-a-div-with-css-10-different-ways/"
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
        path="https://blogs.sohamderoy.dev/"
        buttonType="button-primary"
        buttonText="Read More on freeCodeCamp"
      />
    </div>
  );
};

export default Projects;
