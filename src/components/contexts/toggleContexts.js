// src/AuthContext.js
import { createContext, useState, useContext } from "react";

// Create a Context
const ToggleContext = createContext();

// Create a provider component
export const ToggleProvider = ({ children }) => {
  const [openSheet, setOpenSheet] = useState(false);

  return (
    <ToggleContext.Provider value={{ openSheet, setOpenSheet }}>
      {children}
    </ToggleContext.Provider>
  );
};

// Create a custom hook for easy access to the context
export const useToggle = () => {
  return useContext(ToggleContext);
};
