import { combineReducers } from "redux";

import userReducer from "./userReducer";

// root reducers
const rootReducer = combineReducers({
  userState: userReducer,
});
