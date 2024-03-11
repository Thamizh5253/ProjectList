import React from "react";
import "./projectLink.css";

const ProjectLink = ({ linkUrl, linkTitle }) => {
  return (
    <div className="prodiv">
      <a
        className="link"
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3>{linkTitle}</h3>
      </a>
    </div>
  );
};

export default ProjectLink;
