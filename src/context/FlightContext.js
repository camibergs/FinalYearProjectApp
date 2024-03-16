import React, { createContext, useState, useContext } from "react";
import { initialFlights } from "../data/flights";

const FlightContext = createContext();

export const useFlightContext = () => useContext(FlightContext);

export const FlightProvider = ({ children }) => {
  // Initialisations ------------------

  // State ----------------------------
  const [flights, setFlights] = useState(initialFlights);

  // Handlers -------------------------
  const addFlight = (flightDetails) => {
    setFlights((currentFlights) => [...currentFlights, flightDetails]);
  };

  return (
    <FlightContext.Provider value={{ flights, addFlight }}>
      {children}
    </FlightContext.Provider>
  );
};
