import { createContext, useState } from "react";

export const LogInContext = createContext({});

export const LogInProvider = ({ children }) => {
 const [loggedIn, setLoggedIn] = useState(false);

  return (
    <LogInContext.Provider
      value={{ loggedIn, setLoggedIn }}
    >
      {children}
    </LogInContext.Provider>
  );
};
