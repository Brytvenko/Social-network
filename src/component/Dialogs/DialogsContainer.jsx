import React from "react";
import classes from "./Dialogs.module.css";
import DialogsItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import { messTexts, addMessages } from "../../redux/message-reducer";
import Dialogs from "./Dialogs";

function DialogsContainer(props) {
  let state = props.store.getState().messagePage;

  let onSendMessage = () => {
    props.store.dispatch(addMessages());
  };
  let writeText = (body) => {
    props.store.dispatch(messTexts(body));
  };

  return (
    <Dialogs
      sendMessage={onSendMessage}
      updateNewMessageBody={writeText}
      messagePage={state}
    />
  );
}

export default DialogsContainer;
