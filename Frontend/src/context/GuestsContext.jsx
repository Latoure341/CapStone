import { createContext, useState } from "react";

export const GuestsContext = createContext({});

export const GuestsContextProvider = ({ children }) => {
  const [guests, setGuests] = useState("");
  const [guestsModal, setGuestsModal] = useState(false);

  return (
    <GuestsContext.Provider
      value={{ guests, setGuests, guestsModal, setGuestsModal }}
    >
      {children}
    </GuestsContext.Provider>
  );
};
