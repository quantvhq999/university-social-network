import { combineReducers } from "redux";

import authReducer from "./authReducer";
import activitiesReducer from "./activitiesReducer";  
import confidentialReducer from "./confidentialReducer";
const rootReducer = combineReducers({
  authReducer,
  activitiesReducer,
  confidentialReducer
});

export default rootReducer;
