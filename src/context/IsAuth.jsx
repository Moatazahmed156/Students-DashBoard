import { createContext, useState } from "react";

export const IsAuthorized = createContext();

export const ISAuthProvider = ({ children }) => {
  const [Auth, setAuth] = useState(false);

  const MakeAuth = () => {
    setAuth(true);
  };

  return (
    <IsAuthorized.Provider value={{ Auth, MakeAuth }}>
      {children}
    </IsAuthorized.Provider>
  );
};
