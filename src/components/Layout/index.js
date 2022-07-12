import React from "react";

import Header from "../header/indes";
import useGithubHooks from "../hooks/github_Hooks";
import * as S from './styled';
const Layout = ({children})=>{
    const {githubState} = useGithubHooks();
   
    return (
        <S.ContainerLayout>
           <Header />
           {githubState.loading ? <p>Loading</p>: <>{children}</>}
               
        </S.ContainerLayout>
    );
}
export default Layout;