import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    background-color: transparent;
    box-sizing: border-box;
  }
  body {
    width: 100vw;
    overflow-x: hidden;
    
    background-color: black;
    color: white;
  }
`;
