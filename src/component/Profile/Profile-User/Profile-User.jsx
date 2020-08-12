import React from "react";
import classes from "./Profile-User.module.css";

function ProfileUser() {
  return (
    <div className={classes.profile__user__page}>
      <div className={classes.avatar}>
        <img
          src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/131654569/original/fd45e2a3d3d1643130922e98b0ce921863b6127a/make-you-cartoon-avatar.jpeg"
          alt=""
        />
        <div className={classes.info}>
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
    </div>
  );
}

export default ProfileUser;
