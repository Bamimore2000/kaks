// src/AuthContext.js
import { createContext, useState, useContext } from "react";
import { sectionsName } from "@/app/lib/data";

// Create a Context
const ToggleContext = createContext();

// Create a provider component
export const ToggleProvider = ({ children }) => {
  const [openSheet, setOpenSheet] = useState(false);
  const [current, setCurrent] = useState(sectionsName[0].name);

  return (
    <ToggleContext.Provider
      value={{ openSheet, setOpenSheet, current, setCurrent }}
    >
      {children}
    </ToggleContext.Provider>
  );
};

// Create a custom hook for easy access to the context
export const useToggle = () => {
  return useContext(ToggleContext);
};
