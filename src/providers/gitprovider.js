import React, { createContext, useCallback, useState } from "react";
import api from "../services/Api";

export const GitContext = createContext({
 
  user: {},
  repositories: [],
  starred: [],
});
const GitProvider = ({ children }) => {
  const [githubState, setGithubState] = useState({
    hasUser: false,
    loading: false,
    user: {
      id: undefined,
      login: undefined,
      name: undefined,
      avatar_url: undefined,
      html_url: undefined,
      fallowers: 0,
      fallowings: 0,
      company: undefined,
      location: undefined,
      public_gists: 0,
      public_repos: 0,
      repos_url: undefined,
      stargazers_count: 0,
      watchers_count: 0,
      language: undefined,
      visibility: undefined,
      watchers: undefined,
    },
    repositories: [],
    starred: [],
  });
  const getUser = (username) => {
    setGithubState((prevSate) => ({
      ...prevSate,
      loading: !prevSate.loading,
    }));
    api.get(`users/${username}`).then(({ data }) => {
      setGithubState((prevSate) => ({
        ...prevSate,
        hasUser: true,
        user: {
          id: data.id,
          login: data.login,
          nome: data.nome,
          avatar_url: data.avatar_url,
          html_url: data.html_url,
          fallowers: data.fallowers,
          fallowings: data.fallowings,
          company: data.company,
          location: data.location,
          public_gists: data.public_gists,
          public_repos: data.public_repos,
          repos_url: data.repos_url,
          stargazers_count: data.stargazers_count,
          watchers_count: data.watchers_count,
          language: data.language,
          visibility: data.visibility,
          watchers: data.watchers,
        },
      }));
    }).finally( ()=>
    {
      setGithubState((prevSate) => ({
        ...prevSate,
        loading: !prevSate.loading,
      }));
    })
  };
  const getUserRepositories = (username) => {
    
    api.get(`users/${username}/repos`).then(({ data }) => {
      setGithubState((prevSate) => ({
        ...prevSate,
        
        repositories: data,
        
      }));
    });
  };
  const getUserStarred = (username) => {
    
    api.get(`users/${username}/starred`).then(({ data }) => {
      setGithubState((prevSate) => ({
        ...prevSate,
        
        starred: data,
        
      }));
    });
  };
  const contextValue = {
    githubState,
    getUser: useCallback((username) => getUser(username), []),
    getUserRepositories: useCallback((username) => getUserRepositories(username), []),
    getUserStarred: useCallback((username) => getUserStarred(username), []),
  };

  return (
    <GitContext.Provider value={contextValue}>{children}</GitContext.Provider>
  );
};

export default GitProvider;
