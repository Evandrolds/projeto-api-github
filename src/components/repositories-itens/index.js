import React from "react";
import { StyledRepository } from "./styled";

const RepositoryItem = ({ name, fullName, linkToRepo }) => {
  return (
    <StyledRepository>
      <h2 className="name">
        Name:
      <h2> {name} </h2>
      </h2>
      <a href={linkToRepo} target="blank" rel="noreferrer">
        {fullName}
      </a>
    </StyledRepository>
  );
};

export default RepositoryItem;
