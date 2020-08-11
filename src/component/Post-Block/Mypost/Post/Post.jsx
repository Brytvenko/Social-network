import React from "react";
import classes from "./Post.module.css";

function Post(props) {
  var date = new Date();
  return (
    <div className={classes.post}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT9Yn_1pqsX82GT_J-IBI6ICMaVXMRHr94Zd-DAU1sBLGyjcxGu&usqp=CAU"></img>
      <div className={classes.post_mess}>{props.message}</div>
      <div className={classes.post_post}>{props.addPost}</div>
     
      <div className={classes.post_like}>
        <span>like </span>
        {props.likest}
      </div>
    </div>
  );
}
export default Post;
