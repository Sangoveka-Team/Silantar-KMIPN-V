"use client";
import {createContext, useContext, useState} from "react";

const UserContext = createContext({});

export const UserContextProvider = ({children}) => {
  const [session, setSession] = useState({
    isAuth: true,
    user: false,
    superAdmin: true,
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
