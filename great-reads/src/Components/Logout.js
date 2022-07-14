import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Logout.css";
import { logout, selectUser } from "../features/userSlice";

const Logout = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const logout = (e) => {
    dispatch(logout());
  };

  return (
    <form className="logout">
      <h1>
        Welcome <span className="user__name">{user.name}</span>!
      </h1>
      <button className="logout__button" onClick={(e) => logout(e)}>
        Log out
      </button>
    </form>
  );
};

export default Logout;