import React, { useEffect, useState } from "react";
import useGithubHooks from "../hooks/github_Hooks";
import RepositoryItem from "../repositories-itens";
import * as T from "./styled";

const Repositories = () => {
  const {githubState , getUserRepositories,getUserStarred} = useGithubHooks();
  const [hasUserSearchRepositories, setHasUserSearchRepositories] = useState(false);
  useEffect(() =>{
    if(githubState.user.login)
    {
      getUserRepositories(githubState.user.login);
      getUserStarred(githubState.user.login);
    }
    setHasUserSearchRepositories( !! githubState.repositories);
    
  },[githubState.user.login]);
  return (
    <>
    {hasUserSearchRepositories ?(
    <T.ContainerTabs
      selectedTabClassName="is-selected"
      selectedTabPanelClassName="is-selected"
    >
      <T.ContainerTabList>
        <T.ContainerTab>Repositories</T.ContainerTab>
        <T.ContainerTab>Starred</T.ContainerTab>
      </T.ContainerTabList>
      <T.ContainerTabPanel>
        <T.ContainerList>
        {githubState.repositories.map((itens) => (
          <RepositoryItem
             key= {itens.id}
          name={itens.name}
          linkToRepo={itens.owner}
          fullName={itens.fullName}
        />
        ))}
        </T.ContainerList>
      </T.ContainerTabPanel>
      <T.ContainerTabPanel>
      <T.ContainerList>
      {githubState.starred.map((itens) => (
          <RepositoryItem
             key= {itens.id}
          name={itens.name}
          linkToRepo={itens.starred}
          fullName={itens.fullName}
        />
        ))}
        </T.ContainerList>
      </T.ContainerTabPanel>
    </T.ContainerTabs>
    ):( <></>)} </>
  );
};

export default Repositories;
