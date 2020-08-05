import React from "react";
import classes from "./Message.module.css";

function Message(props) {
  return (
    <div className={classes.message}>
      <img
        src="https://avatars.mds.yandex.net/get-pdb/1352825/a5f8fbd7-515e-49f8-81d6-be55a2daac92/s600?webp=false"
        alt=""
      />
      <div className={classes.message_text}>{props.message}</div> 
    </div>
  );
}

export default Message;
