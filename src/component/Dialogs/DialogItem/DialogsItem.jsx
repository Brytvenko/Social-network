import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./DialogsItem.module.css";

function DialogsItem(props) {
  let path = "/dialogs/" + props.id;
  return (
    <div className={classes.dialogs__items + " " + classes.active}>
      <NavLink to={path}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSOfqBBnGW-ntm2BhRJQQJupmw5Gh5drIDnvA&usqp=CAU" alt=""/>
        {props.name}</NavLink>
       
    </div>
  );
}

export default DialogsItem;
