import React, { useState } from "react";
import * as S from "./styled";
import useGithubHooks from "../hooks/github_Hooks";
// import { Container } from './styles';

const Header = () => {
    const {getUser} =  useGithubHooks();
    const [usernameForSearch, setUsernameForSerach] = useState()
    const submitGetUser = () => {
        if(!usernameForSearch) return;
        return getUser(usernameForSearch);
    };
  return (
    <header>
      <S.ContainerHeader>
          <h2>Pesquisar: </h2>
        <input type="text"
         placeholder="Search username..."
          onChange={(event) => setUsernameForSerach(event.target.value)} />
        <div className="button"><button type="submit" onClick={submitGetUser}>Search</button></div>
        
      </S.ContainerHeader>
    </header>
  );
};

export default Header;
