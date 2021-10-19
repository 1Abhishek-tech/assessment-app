import React from "react";
import { Button } from "@material-ui/core";
import "./Login.css";
import { auth, provider } from "./Firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

function Login() {
  const [{}, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        // var token = result.credential.accessToken;
        // localStorage.setItem("token", token);
        var json = JSON.stringify(result.user);
        localStorage.setItem("user", json);
        console.log("result", json);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login_container">
        <div className="login_text">
          <h1>Sign in to App</h1>
        </div>
        <Button type="submit" onClick={signIn}>
          Sign in With Google
        </Button>
      </div>
    </div>
  );
}

export default Login;
