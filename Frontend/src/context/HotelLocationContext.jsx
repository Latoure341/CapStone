import { createContext, useState } from "react";

export const HotelLocationContext = createContext({});

export const HotelLocationProvider = ({ children }) => {
  const [hotelLocation, setHotelLocation] = useState("");
  const [hotelModal, setHotelModal] = useState(false);

  return (
    <HotelLocationContext.Provider
      value={{ hotelLocation, setHotelLocation, hotelModal, setHotelModal }}
    >
      {children}
    </HotelLocationContext.Provider>
  );
};
