import React from "react";
import classes from "./Dialogs.module.css";
import DialogsItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";

function Dialogs(props) {
  let state = props.messagePage;
  let dElements = state.dData.map((d) => (
    <DialogsItem name={d.name} id={d.id} />
  ));
  let mElement = state.mData.map((m) => <Message message={m.message} />);
  let newMessText = state.newMessText;

  let onSendMessage = () => {
    props.sendMessage();
    //props.store.dispatch(addMessages());
  };
  let writeText = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs__menu}>{dElements}</div>
      <div className={classes.messages}>
        {mElement}
        <div>
          <textarea
            value={newMessText}
            onChange={writeText}
            placeholder="Enter you message"
          ></textarea>
        </div>
        <div>
          <button onClick={onSendMessage}>SEND</button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
