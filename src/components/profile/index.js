import React from "react";
import useGithubHooks from "../hooks/github_Hooks";
import * as Style from "./styled";

const Profile = () => {
  const { githubState } = useGithubHooks();
  return (
    
    <Style.Container>
      <div>
        <Style.ImgProfile
          src={githubState.user.avatar_url}
          width="150px"
          height="150px"
          alt="avatar of user"
        />
        <Style.ContainerInfoUserName>
          <div>
            <span>{githubState.user.name}</span>
            <div className="username">
              <h4>Username:</h4>
              <a href={githubState.user.htmlUrl}> {githubState.user.login}</a>
            </div>
          </div>
        </Style.ContainerInfoUserName>
        <Style.ContainerstatusFalow>
        <div className="statusFalow">
              <div className="fallowers">
                <h4>fallowers: </h4>
                <span> {githubState.user.fallowers}</span>
              </div>
              <div className="fallowings">
                <h4>fallowings: </h4>
                <span> {githubState.user.fallowings}</span>
              </div>
        </div>
        </Style.ContainerstatusFalow>
       
        <Style.ContainerStatusCount>
          <div className="status">
            <div className="avatar"> 
            <h4>Avatar:</h4> 
            <a href={githubState.user.avatar_url}  target="_blank" rel="noreferrer">
              {githubState.user.avatar_url} 
              </a>
            </div>
            <div className="company">
              <h4>Company:</h4>
              <span> {githubState.user.company}</span>
            </div>

            <div className="location">
              <h4>Location:</h4>
              <span>{githubState.user.location}</span>
            </div>

            <div className="public_gists">
              <h4>Public gists:</h4>
              <span>{githubState.user.public_gists}{" "}</span>
            </div>
            <div className="public_repos">
              <h4>Public repos:</h4>
              <span>{githubState.user.public_repos}{" "}</span> 
            </div>
            <div className="repos_url">
              <h4>Link to repos:</h4>
              <a href={githubState.user.repos_url}  target="_blank" rel="noreferrer">
              {githubState.user.repos_url} 
              </a>
            </div>
            <div className="html_url">
              <h4>Link to Github:</h4>
              <a href={githubState.user.html_url}  target="_blank" rel="noreferrer">
              {githubState.user.html_url} 
              </a>
            </div>

            
            
          </div>
        </Style.ContainerStatusCount>
        
      </div>
    </Style.Container>
    
  );
};
export default Profile;
