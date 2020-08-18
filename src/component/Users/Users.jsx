import React from "react";
import classes from "./Users.module.css";
import * as axios from "axios";
import imagePhoto from "../../img/1.png";

class Users extends React.Component {
  constructor(props) {
    super(props);

    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        this.props.Set_Users(response.data.items);
      });
  }

  render() {
    return (
      <div className={classes.users}>
        {this.props.users.map((urs) => (
          <div key={urs.id}>
            <div className={classes.img}>
              <img
                src={urs.photos.small != null ? urs.photos.small : imagePhoto}
              ></img>
            </div>
            <div>
              {urs.follow ? (
                <button
                  onClick={() => {
                    this.props.unFollow(urs.id);
                  }}
                >
                  DELETE
                </button>
              ) : (
                <button
                  onClick={() => {
                    this.props.Follow(urs.id);
                  }}
                >
                  FOLLOW
                </button>
              )}
            </div>
            <span>
              <div className={classes.info}>
                <div>{urs.name}</div>
                <div>{"urs.location.city"}</div>
                <div>{"urs.location.country"}</div>
              </div>
            </span>
          </div>
        ))}
      </div>
    );
  }
}

export default Users;
