import React from "react";
import Router from "./Router.jsx";
import { GlobalStyle } from "./styles/Global.styled.js";
import { HotelLocationProvider } from "./context/HotelLocationContext.jsx";
import { NavBarContextProvider } from "./context/NavBarContext.jsx";
function App() {
  return (
    <>
      <NavBarContextProvider>
        <HotelLocationProvider>
          <GlobalStyle />
          <Router />
        </HotelLocationProvider>
      </NavBarContextProvider>
    </>
  );
}

export default App;
