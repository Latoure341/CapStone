import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    background-color: transparent;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  body {
    width: 100vw;
    overflow-x: hidden;
    margin: 0;
    
    background-color: white;
    color: black;
  }
`;
