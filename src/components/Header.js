import React from "react";
import { useAuth } from "../context/authContext";

const Header = () => {
  const { user, setUser } = useAuth();

  return (
    <div className="p-4 bg-white shadow-md flex items-center justify-center">
      {user ? (
        <div className="flex items-center gap-x-3">
          <img
            src="https://images.unsplash.com/photo-1669181310799-fc929c93ed58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80"
            alt=""
            className="w-10 h-10 rounded-full object-cover"
          />
          <span>
            Welcome back! <strong>Duclt</strong>
          </span>
        </div>
      ) : (
        <span className="text-sm font-medium">Welcome</span>
      )}
      <button className="p-2 rounded-md bg-gray-300 ml-auto" onClick={()=> setUser(null)}>Sign out</button>
    </div>
  );
};

export default Header;
