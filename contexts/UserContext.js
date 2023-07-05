"use client";
import {createContext, useContext, useState} from "react";

const UserContext = createContext({});

export const UserContextProvider = ({children}) => {
  const [session, setSession] = useState({
    user: false,
    superAdmin: true,
  });

  return (
    <UserContext.Provider value={{session, setSession}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
