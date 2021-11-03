import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  return (
    <>
      <div className="flex">
        <NavLink exact activeClassName="selected" to="/">
          Input
        </NavLink>
        <br />
        <NavLink activeClassName="selected" to="/form">
          Form
        </NavLink>
        <br />
        <NavLink activeClassName="selected" to="/loginform">
          Login Form
        </NavLink>
      </div>
    </>
  );
};
export default Menu;
