import React from "react";
import MypostContainer from "./Mypost/MypostContainer";
import classes from "./Post-Block.module.css";

function Post_Block(props) {
  return (
    <div className={classes.post__block}>
      {<MypostContainer store={props.store} />}
    </div>
  );
}
export default Post_Block;
