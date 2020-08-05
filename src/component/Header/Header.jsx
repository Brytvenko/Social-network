import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <header className={classes.header}>
      <img src="https://static.rfstat.com/renderforest/images/v2/logo-homepage/gradient_2.png"></img>
      <NavLink to="/Login">
        <p>LOGIN</p>
      </NavLink>
    </header>
  );
}
export default Header;
