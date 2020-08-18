//добавление постов//
const Add_Post = "Add-Post";
const Update_Text = "Update-Text";

let initialState = {
  pData: [
    { id: 1, message: "Hi", likest: 5 },
    { id: 2, message: "How are you?", likest: 2 },
    { id: 3, message: "Im fine)", likest: 6 },
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
    let newStateCopy = { ...state };
    newStateCopy.pData = [...state.pData];
    newStateCopy.pData.unshift(newPost);
    newStateCopy.newPostText = "";
    return newStateCopy;
    //newStateCopy.pData.unshift(newPost);
  } else if (action.type === Update_Text) {
    let newStateCopyText = { ...state };
    newStateCopyText.newPostText = action.newText;
    return newStateCopyText;
  }

  return state;
};
export const addPostActionCreator = () => ({ type: Add_Post });
export const updateActionCreator = (txt) => ({
  type: Update_Text,
  newText: txt,
});
export default profReducer;
