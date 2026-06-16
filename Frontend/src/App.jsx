import React from "react";
import Router from "./Router.jsx";
import { GlobalStyle } from "./styles/Global.styled.js";
import { HotelLocationProvider } from "./context/HotelLocationContext.jsx";
import { NavBarContextProvider } from "./context/NavBarContext.jsx";
import { LogInProvider } from "./context/LogInContext.jsx";
function App() {
  return (
    <>
      <LogInProvider>
        <NavBarContextProvider>
          <HotelLocationProvider>
            <GlobalStyle />
            <Router />
          </HotelLocationProvider>
        </NavBarContextProvider>
      </LogInProvider>
    </>
  );
}

export default App;
