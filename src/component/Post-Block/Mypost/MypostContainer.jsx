import React from "react";
import {
  addPostActionCreator,
  updateActionCreator,
} from "../../../redux/profile-reducer";
import Mypost from "./Mypost";
import { connect } from "react-redux";

//const MypostContainer = (props) => {
//  let state = props.store.getState();
//
// let addPost = () => {
//    props.store.dispatch(addPostActionCreator());
//  };
//  let onClick = (txt) => {
//    //let txt = newPostElem.current.value;
//    let action = updateActionCreator(txt);
//   props.store.dispatch(action);
//  };
//
//  return (
//    <Mypost
//     updateNewPostText={onClick}
//     addPost={addPost}
//     pData={state.profilePage.pData}
//     newPostText={state.profilePage.newPostText}
//    />
//  );
//};

let mapStateToProps = (state) => {
  return {
    pData: state.profilePage.pData,
    newPostText: state.profilePage.newPostText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (txt) => {
      let action = updateActionCreator(txt);
      dispatch(action);
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },
  };
};
const MypostContainer = connect(mapStateToProps, mapDispatchToProps)(Mypost);

export default MypostContainer;
