const Update_Messages = "new-Messages";
const Send_Messages = "send-Messages";

let initialState = {
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
};

const messageReducer = (state = initialState, action) => {
  if (action.type === Send_Messages) {
    let newStateCopyPush = { ...state };
    let body = newStateCopyPush.newMessText;
    newStateCopyPush.newMessText = " ";
    newStateCopyPush.mData.push({ id: 6, message: body });
    return newStateCopyPush;
  } else if (action.type === Update_Messages) {
    let newStateCopyMess = { ...state };
    newStateCopyMess.newMessText = action.body;
    return newStateCopyMess;
  }
  return state;
};
export const addMessages = () => ({ type: Send_Messages });
export const messTexts = (body) => ({
  type: Update_Messages,
  body: body,
});

export default messageReducer;
