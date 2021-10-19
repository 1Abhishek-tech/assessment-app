import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./Login";
import Home from "./Home";
// import * as jwtDecode from "jwt-token";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      // const user = jwtDecode(token);
      console.log("user", user);
      dispatch({
        type: actionTypes.SET_USER,
        user: user,
      });
    }
  }, []);
  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          <Home />
        </div>
      )}
    </div>
  );
}

export default App;
