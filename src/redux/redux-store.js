import { createStore, combineReducers } from "redux";
import profReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
import usersReducer from "./users-reducer";

let reducer = combineReducers({
  profilePage: profReducer,
  messagePage: messageReducer,
  usersPage: usersReducer
});
let store = createStore(reducer);

window.store = store;

export default store;
