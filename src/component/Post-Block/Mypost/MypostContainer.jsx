import React from "react";
import {
  addPostActionCreator,
  updateActionCreator,
} from "../../../redux/profile-reducer";
import Mypost from "./Mypost";

const MypostContainer = (props) => {
  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };
  let onClick = (txt) => {
    //let txt = newPostElem.current.value;
    let action = updateActionCreator(txt);
    props.store.dispatch(action);
  };

  return (
    <Mypost
      updateNewPostText={onClick}
      addPost={addPost}
      pData={state.profilePage.pData}
      newPostText={state.profilePage.newPostText}
    />
  );
};

export default MypostContainer;
