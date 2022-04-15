import { ActionTypes } from "../action-types";

export const setMessage = (message) => {
  return { type: ActionTypes.SET_MESSAGE, payload: message };
};
