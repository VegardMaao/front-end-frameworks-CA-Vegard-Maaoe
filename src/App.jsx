import React from "react";
import { HelmetProvider } from "react-helmet-async";
import {PageRouter} from "pages";
import { GlobalStyle } from "./styles/index.js";

function App() {
  return (
    <HelmetProvider>
      <GlobalStyle />
      <PageRouter />
    </HelmetProvider>
  );
}



export default App;
