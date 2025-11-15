import React from "react";
import { useAuth } from "../Context/Authprovider.jsx";

function Logout() {
  const [authUser, setAuthUser] = useAuth();

  const handleLogout = () => {
    localStorage.removeItem("user");
    setAuthUser(null);
    console.log("Logged out, authUser:", null); // this will print null (correct)
  };

  return (
    <button className="btn btn-error" onClick={handleLogout}>
      Logout
    </button>
  );
}

export default Logout;
