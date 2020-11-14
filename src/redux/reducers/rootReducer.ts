import { combineReducers } from "redux";
import uiReducer from "./uiReducer";
import usersReducer from "./usersReducer";
import questionsReducer from "./questionsReducer";
import examReducer from "./examReducer";

const rootReducer = combineReducers({
  uiReducer,
  usersReducer,
  questionsReducer,
  examReducer,
});

export default rootReducer;
