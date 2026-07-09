import React from "react";
import Router from "./Router.jsx";
import { ThemeProvider } from "styled-components";
import { media } from "./styles/theme.js";
import { GlobalStyle } from "./styles/Global.styled.js";
import { HotelLocationProvider } from "./context/HotelLocationContext.jsx";
import { NavBarContextProvider } from "./context/NavBarContext.jsx";
import { GuestsContextProvider } from "./context/GuestsContext.jsx";
import { LogInProvider } from "./context/LogInContext.jsx";
import { SignUpProvider } from "./context/SignUpContext.jsx";
function App() {
  return (
    <ThemeProvider theme={media}>
      <SignUpProvider>
        <LogInProvider>
          <NavBarContextProvider>
            <GuestsContextProvider>
              <HotelLocationProvider>
                <GlobalStyle />
                <Router />
              </HotelLocationProvider>
            </GuestsContextProvider>
          </NavBarContextProvider>
        </LogInProvider>
      </SignUpProvider>
    </ThemeProvider>
  );
}

export default App;
