import React from "react";
import classes from "./Profile.module.css";
import Post_Block from "../Post-Block/Post-Block";
import ProfileUser from "./Profile-User/Profile-User";

function Profile(props) {
  return (
    <div className={classes.profile__info}>
      <ProfileUser />
      <div className={classes.block__post}>
        <Post_Block store={props.store} />
      </div>
    </div>
  );
}
export default Profile;
