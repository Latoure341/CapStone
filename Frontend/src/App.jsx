import React from "react";
import Router from "./Router.jsx";
import { GlobalStyle } from "./styles/Global.styled.js";
import { HotelLocationProvider } from "./context/HotelLocationContext.jsx";

function App() {
  return (
    <>
      <HotelLocationProvider>
        <GlobalStyle />
        <Router />
      </HotelLocationProvider>
    </>
  );
}

export default App;
