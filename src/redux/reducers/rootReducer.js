import { combineReducers } from "redux";

import authReducer from "./authReducer";
import activitiesReducer from "./activitiesReducer";  
import confidentialReducer from "./confidentialReducer";
import commentsReducer from "./commentsReducer";
const rootReducer = combineReducers({
  authReducer,
  activitiesReducer,
  confidentialReducer,
  commentsReducer
});

export default rootReducer;
