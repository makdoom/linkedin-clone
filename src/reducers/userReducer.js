import { SET_USER } from "../actions/actionTypes";

// initial state
const INITIAL_STATE = {
  user: null,
};

// reducer
export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    //   case goes here
    case SET_USER:
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};
