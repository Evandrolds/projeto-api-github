import { useContext } from 'react';
import { GitContext } from '../../providers/gitprovider';

const useGithubHooks = () => {
  const {githubState,getUser,getUserRepositories,getUserStarred} = useContext(GitContext);
  return {githubState,getUser,getUserRepositories,getUserStarred};
};

export default useGithubHooks;