"use client";
import { createContext, useContext, useState } from "react";

// Create a Global Context to manage global state
const GlobalContext = createContext();

// Global Provider component to wrap around the application
export const GlobalProvider = ({ children }) => {
  const [unreadMessageCount, setUnreadMessageCount] = useState(0);

  return (
    <GlobalContext.Provider
      value={{
        unreadMessageCount,
        setUnreadMessageCount,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export function useGlobalContext() {
  return useContext(GlobalContext);
}
