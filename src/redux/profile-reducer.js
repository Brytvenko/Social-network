//добавление постов//
const Add_Post = "Add-Post";
const Update_Text = "Update-Text";

let initialState = {
  pData: [
    { id: 1, message: "Hi", likest: 5 },
    { id: 2, message: "Hliqeqw", likest: 2 },
    { id: 3, message: "Hu-lu mu-lu", likest: 6 },
  ],
  newPostText: " ",
};
const profReducer = (state = initialState, action) => {
  if (action.type === Add_Post) {
    let newPost = {
      id: 5,
      message: state.newPostText,
      likest: 0,
    };
    state.newPostText = "";
    state.pData.unshift(newPost);
  } else if (action.type === Update_Text) {
    state.newPostText = action.newText;
  }

  return state;
};
export const addPostActionCreator = () => ({ type: Add_Post });
export const updateActionCreator = (txt) => ({
  type: Update_Text,
  newText: txt,
});
export default profReducer;
