import { SET_MESSAGE } from "../action-types";

const initialState = {
  message: "",
};

const MessageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGE:
      return {
        message: action.payload,
      };
    default:
      return state;
  }
};
export default MessageReducer;
