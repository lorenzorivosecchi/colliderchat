import { actionTypes } from "../actions/actionTypes";

export const initialState = {
  myUserId: undefined
};

const base = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DIGEST_APP_CREDITS:
      return {
        ...state,
        ...action.data
      };
    case actionTypes.C_UPDATE_MY_USER_ID:
      return {
        ...state,
        myUserId: action.newId
      };
    default:
      return state;
  }
};

export default base;
