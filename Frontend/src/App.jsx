import React from "react";
import Router from "./Router.jsx";
import { GlobalStyle } from "./styles/Global.styled.js";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
