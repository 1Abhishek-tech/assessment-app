import React from "react";
import "./Home.css";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
import LogoutIcon from "@mui/icons-material/Logout";

function Home() {
  const [{ user }, dispatch] = useStateValue();
  console.log(user);
  const logout = () => {
    console.log("clicked");
    localStorage.removeItem("user");
    dispatch({
      type: actionTypes.REMOVE_USER,
      user: null,
    });
  };
  return (
    <div className="home">
      <div className="header">
        <h3>Welcome {user.displayName}</h3>
        <span className="logoutIcon" onClick={logout}>
          <LogoutIcon />
        </span>
      </div>
      {user.displayName}
    </div>
  );
}

export default Home;
