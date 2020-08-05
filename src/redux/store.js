import profReducer from "./profile-reducer";
import messageReducer from "./message-reducer";

let store = {
  _state: {
    profilePage: {
      pData: [
        { id: 1, message: "Hi", likest: 5 },
        { id: 2, message: "Hliqeqw", likest: 2 },
        { id: 3, message: "Hu-lu mu-lu", likest: 6 },
      ],
      newPostText: " ",
    },

    messagePage: {
      dData: [
        { id: 1, name: " Angelina" },
        { id: 2, name: " Alexander" },
        { id: 3, name: " Sergey" },
        { id: 4, name: " Willi" },
        { id: 5, name: " Pavel" },
      ],
      mData: [
        { id: 1, message: " Hi" },
        { id: 2, message: " My name is Bourne" },
        { id: 3, message: " I live in USA" },
        { id: 4, message: " I very bad boys!" },
      ],
      newMessText: " ",
    },
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("qwe");
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  //  вызов изменения состояния через action
  dispatch(action) {
    this._state.profilePage = profReducer(this._state.profilePage, action);
    this._state.messagePage = messageReducer(this._state.messagePage, action);
    this._callSubscriber(this._state);
  },
};


window.store = store;
export default store;
