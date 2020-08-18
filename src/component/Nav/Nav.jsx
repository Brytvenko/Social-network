import React from "react";
import classes from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import state from "../../redux/store.js";
function Nav() {
  return (
    <nav className={classes.nav}>
      <div>
        <NavLink to="/profile" activeClassName={classes.active}>
          <p>Profile</p>
        </NavLink>
      </div>
      <div>
        <NavLink to="/dialogs" activeClassName={classes.active}>
          <p>Messages</p>
        </NavLink>
      </div>
      <div>
        <NavLink to="/news" activeClassName={classes.active}>
          <p>News</p>
        </NavLink>
      </div>
      <div>
        <NavLink to="/music" activeClassName={classes.active}>
          <p>Music</p>
        </NavLink>
      </div>
      <div>
        <NavLink to="/setting" activeClassName={classes.active}>
          <p>Settings</p>
        </NavLink>
        <div>
          <NavLink to="/users" activeClassName={classes.active}>
            <p>Users</p>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
