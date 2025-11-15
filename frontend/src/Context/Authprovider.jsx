

   import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export function Authprovider({ children }) {
  const initialAuthUser = localStorage.getItem("user");

  const [authUser, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : null
  );

  return (
    <AuthContext.Provider value={[ authUser, setAuthUser ]}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);



 