import React from "react";
import classes from "./Mypost.module.css";
import Post from "./Post/Post.jsx";

function Mypost(props) {
  let pElements = props.pData.map((p) => (
    <Post id={p.id} message={p.message} likest={p.likest} />
  ));

  let newPostElem = React.createRef();

  let addPost = () => {
    props.addPost();
    //props.dispatch(addPostActionCreator());
  };
  let onClick = () => {
    let txt = newPostElem.current.value;
    props.updateNewPostText(txt);
    //let action = updateActionCreator(txt);
    //props.dispatch(action);
  };

  return (
    <div className={classes.block}>
      <h1>MY POST</h1>
      <div>
        <textarea
          onChange={onClick}
          ref={newPostElem}
          value={props.newPostText}
        />
      </div>
      <div>
        <button onClick={addPost}>ADD POST</button>
      </div>
      <div className={classes.mess}>{pElements}</div>
    </div>
  );
}

export default Mypost;
