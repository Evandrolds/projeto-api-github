import useGithubHooks from "./components/hooks/github_Hooks";
import Layout from "./components/Layout";
import NoSearch from "./components/no_search";
import Profile from "./components/profile";
import Repositories from "./components/repositories";

const App = () => {
  const { githubState } = useGithubHooks();
  return (
    <Layout>
      {githubState.hasUser ? (
        <>
          {githubState.loading ? (
            <p>Loading</p>
          ) : (
            <>
              <Profile />
              <Repositories />
            </>
          )}
        </>
      ) : (
        <NoSearch />
      )}
    </Layout>
  );
};

export default App;
