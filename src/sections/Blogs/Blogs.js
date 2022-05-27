import React from "react";
import PortfolioCard from "../../components/PortfolioCard/PortfolioCard";
import Button from "../../components/Button/Button";
import project1 from "../../assets/blogs/blog1.png";
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
            title="How to Google like a Pro"
            blogLink="https://blog.sohamderoy.dev/how-to-google-like-a-pro-10tips"
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
            title="Understanding Tailwind CSS"
            blogLink="https://blog.sohamderoy.dev/understanding-tailwind-css"
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
            title="Important GIT commands"
            blogLink="https://blog.sohamderoy.dev/important-git-commands-youll-need-to-know-part-2-for-the-major-part-of-your-work"
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
        path="https://blog.sohamderoy.dev/"
        buttonType="button-primary"
        buttonText="Read More"
      />
    </div>
  );
};

export default Projects;
