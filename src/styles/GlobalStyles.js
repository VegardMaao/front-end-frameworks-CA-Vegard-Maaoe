import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

const GlobalStyle = createGlobalStyle`
  html, body{
    margin: 0px;
    font-family: ${theme.fontFamily.copyFont};
    font-weight: 350;
    color: ${theme.color.deepblue};
    scroll-behavior: smooth;
  }

  h1, h2, h3, h4, h5{
    font-family: ${theme.fontFamily.headerFont};
  }
`;

export default GlobalStyle;