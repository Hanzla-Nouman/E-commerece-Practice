
import React, { createContext, useState, useContext } from "react";

const inputContext = createContext();

export const InputStateProvider = ({ children }) => {
  const [result, setResult] = useState(""); // State to store the result value

  return (
    <inputContext.Provider value={{ result, setResult }}>
      {children}
    </inputContext.Provider>
  );
};

export const useInputState = () => {
  const context = useContext(inputContext);
  if (!context) {
    throw new Error("useInputState must be used within a inputStateProvider");
  }
  return context;
};

export default inputContext;
