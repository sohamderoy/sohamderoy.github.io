import React from "react";
import Card from "react-bootstrap/Card";

const PortfolioCard = ({
  isImg,
  isTitle,
  isSubtitle,
  isText,
  isProjectLink,
  isGithubLink,
  isViewCertificate,
  imgPath,
  title,
  subtile,
  text,
  projectLink,
  githubLink,
  certificateLink,
}) => {
  return (
    <div>
      <Card style={{ width: "100%" }}>
        {isImg && <Card.Img variant="top" src={imgPath} />}
        <Card.Body>
          {isTitle && <Card.Title>{title}</Card.Title>}
          {isSubtitle && (
            <Card.Subtitle className="mb-2 text-muted">{subtile}</Card.Subtitle>
          )}
          {isText && <Card.Text>{text}</Card.Text>}
          {isProjectLink && <Card.Link href="#">Project Link</Card.Link>}
          {isGithubLink && <Card.Link href="#">Github Link</Card.Link>}
          {isViewCertificate && (
            <Card.Link href="#">View Certificate</Card.Link>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default PortfolioCard;
