import React, { createContext, useState, useContext } from "react";
import { initialFlights } from "../data/flights";

const FlightContext = createContext();

export const useFlightContext = () => useContext(FlightContext);

export const FlightProvider = ({ children }) => {
  // Initialisations ------------------

  // State ----------------------------
  const [flights, setFlights] = useState(initialFlights);

  // Handlers -------------------------
  const addFlight = (newFlightDetails) => {
    setFlights((currentFlights) => {
      const lastFlightID =
        currentFlights.length > 0
          ? Math.max(...currentFlights.map((flight) => flight.FlightID))
          : -1;
      const nextFlightID = lastFlightID + 1;

      const flightToAdd = {
        ...newFlightDetails,
        FlightID: nextFlightID,
      };

      return [...currentFlights, flightToAdd];
    });
  };

  return (
    <FlightContext.Provider value={{ flights, addFlight }}>
      {children}
    </FlightContext.Provider>
  );
};
