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
          {/*<div className={classes.frends}>
            <NavLink to="/1" state={state.pData}>
              <img
                src="https://avatars.mds.yandex.net/get-pdb/1352825/a5f8fbd7-515e-49f8-81d6-be55a2daac92/s600?webp=false"
                alt=""
              />
            </NavLink>
            <NavLink to="/2" state={state.pData}>
              <img
                src="https://avatars.mds.yandex.net/get-pdb/1352825/a5f8fbd7-515e-49f8-81d6-be55a2daac92/s600?webp=false"
                alt=""
              />
            </NavLink>
            <NavLink to="/3" state={state.pData}>
              <img
                src="https://avatars.mds.yandex.net/get-pdb/1352825/a5f8fbd7-515e-49f8-81d6-be55a2daac92/s600?webp=false"
                alt=""
              />
            </NavLink>
          </div>*/}
        </div>
      </div>
    </nav>
  );
}
export default Nav;
