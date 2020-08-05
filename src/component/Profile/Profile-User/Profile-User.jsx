import React from "react";
import classes from "./Profile-User.module.css";

function ProfileUser() {
  return (
    <div className={classes.profile__user__page}>
      <div className={classes.avatar}>
        <img
          src="https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg"
          alt=""
        />
        <div className={classes.info__name}>
          <p>Brytvenko Vadym</p>
        </div>
        <div className={classes.info__user}>
          <p>City</p>
          <p>Country</p>
          <p>Web-page</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileUser;
