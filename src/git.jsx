import React from "react";
import "./git.css";
import { DiGithubBadge } from "react-icons/di";
const git = () => {
  const handleDivClick = () => {
    window.open("https://github.com/Thamizh5253/", "_blank");
  };

  return (
    <>
      <div className="gitlogo" onClick={handleDivClick}>
        <DiGithubBadge />
      </div>
    </>
  );
};

export default git;
