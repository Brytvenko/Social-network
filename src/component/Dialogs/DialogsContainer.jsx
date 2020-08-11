import React from "react";
//import classes from "./Dialogs.module.css";
//import DialogsItem from "./DialogItem/DialogsItem";
//import Message from "./Message/Message";
import { messTexts, addMessages } from "../../redux/message-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

//function DialogsContainer(props) {
//  let state = props.store.getState().messagePage;
//
//  let onSendMessage = () => {
//    props.store.dispatch(addMessages());
//  };
//  let writeText = (body) => {
//    props.store.dispatch(messTexts(body));
//  };
//
//  return (
//    <Dialogs
//      sendMessage={onSendMessage}
//      updateNewMessageBody={writeText}
//      messagePage={state}
//    />
//  );
//}

let mapStateToProps = (state) => {
  return {
    messagePage: state.messagePage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(addMessages());
    },
    updateNewMessageBody: (body) => {
      dispatch(messTexts(body));
    },
  };
};
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
