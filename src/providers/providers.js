import React from "react";
import App from "../App";
import { ResetCss } from "../global/resetCSS";
import GitProvider from "./gitprovider";

// import { Container } from './styles';

const Providers = () => {
  return (
    <main>
      <GitProvider>
        <ResetCss />
        <App />
      </GitProvider>
    </main>
  );
};

export default Providers;
