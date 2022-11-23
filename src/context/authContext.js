import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const AuthContext = createContext();

function AuthProvider(props) {
  const [user, setUser] = useState({
    userId: 1,
    name: "duclt",
    email: "duclt@gmail.com",
  });

  return (
    <AuthContext.Provider
      {...props}
      value={{user, setUser}}
    ></AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (typeof context === "undefined") {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return context;
}

export { useAuth, AuthProvider };
