import { createStore, combineReducers } from "redux";
import profReducer from "./profile-reducer";
import messageReducer from "./message-reducer";

let reducer = combineReducers({
  profilePage: profReducer,
  messagePage: messageReducer,
});
let store = createStore(reducer);

export default store;
