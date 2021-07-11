import React from "react";
import Card from "react-bootstrap/Card";
import "./PortfolioCard.css";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import { withStyles, makeStyles } from "@material-ui/core/styles";
const PortfolioCard = ({
  isImg,
  isTitle,
  isSubtitle,
  isText,
  isProjectLink,
  isGithubLink,
  isViewCertificate,
  tooltipText,
  imgPath,
  title,
  subtile,
  text,
  projectLink,
  githubLink,
  certificateLink,
}) => {
  const useStylesBootstrap = makeStyles((theme) => ({
    arrow: {
      color: theme.palette.common.black,
    },
    tooltip: {
      backgroundColor: theme.palette.common.black,
    },
  }));
  function BootstrapTooltip(props) {
    const classes = useStylesBootstrap();

    return <Tooltip arrow classes={classes} {...props} />;
  }
  return (
    <div className="portfolio-card-wrapper">
      <BootstrapTooltip
        leaveDelay={200}
        TransitionComponent={Zoom}
        title={tooltipText}
        placement="top"
        arrow
      >
        <Card style={{ width: "100%" }}>
          {isImg && <Card.Img variant="top" src={imgPath} />}
          <Card.Body>
            {isTitle && <Card.Title>{title}</Card.Title>}
            {isSubtitle && (
              <Card.Subtitle className="mb-2 text-muted">
                {subtile}
              </Card.Subtitle>
            )}
            {isText && <Card.Text>{text}</Card.Text>}
            {isProjectLink && (
              <Card.Link target="_blank" href={projectLink}>
                Project Link
              </Card.Link>
            )}
            {isGithubLink && (
              <Card.Link target="_blank" href={githubLink}>
                Github Link
              </Card.Link>
            )}
            {isViewCertificate && (
              <Card.Link target="_blank" href="#">
                View Certificate
              </Card.Link>
            )}
          </Card.Body>
        </Card>
      </BootstrapTooltip>
    </div>
  );
};

export default PortfolioCard;
