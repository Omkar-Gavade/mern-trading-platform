import { createContext, useState } from "react";

export const GeneralContext = createContext();

export const GeneralContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState("dashboard");

  return (
    <GeneralContext.Provider value={{ activeMenu, setActiveMenu }}>
      {children}
    </GeneralContext.Provider>
  );
};
