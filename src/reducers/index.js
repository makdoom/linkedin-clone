import { combineReducers } from "redux";
import { articleReducer } from "./articleReducers";

import { userReducer } from "./userReducer";

// root reducers
export const rootReducer = combineReducers({
  userState: userReducer,
  articleState: articleReducer,
});
