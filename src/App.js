import React from "react";
import "./App.css";
import Header from "./component/Header/Header";
import Nav from "./component/Nav/Nav";
import Profile from "./component/Profile/Profile";
import { Route } from "react-router-dom";
import DialogsContainer from "./component/Dialogs/DialogsContainer";

let Prof = () => <Profile />;
let Dial = () => <DialogsContainer />;

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div className="wrapper">
        <Route
          path="/profile"
          render={(Prof) => <Profile store={props.store} />}
        />
        <Route
          path="/dialogs"
          render={() => <DialogsContainer store={props.store} />}
        />
      </div>
    </div>
  );
}

export default App;
