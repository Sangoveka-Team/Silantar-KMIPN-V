"use client";
import {createContext, useContext, useState} from "react";

const UserContext = createContext({});

export const UserContextProvider = ({children}) => {
  const [session, setSession] = useState({
    isAuth: true,
    user: true,
    superAdmin: false,
    adminInstansi: false,
    adminPejabat: false,
  });

  return (
    <UserContext.Provider value={{session, setSession}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
