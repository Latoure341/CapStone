import { createContext, useState } from "react";

export const SignUpContext = createContext({});

export const SignUpProvider = ({ children }) => {
 const [signUp, setSignUp] = useState(false);

  return (
    <SignUpContext.Provider
      value={{ signUp, setSignUp }}
    >
      {children}
    </SignUpContext.Provider>
  );
};
