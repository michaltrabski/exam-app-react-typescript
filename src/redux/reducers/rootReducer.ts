import { combineReducers } from "redux";
import uiReducer from "./uiReducer";
import usersReducer from "./usersReducer";
import questionsReducer from "./questionsReducer";

const rootReducer = combineReducers({
  uiReducer,
  usersReducer,
  questionsReducer,
});

export default rootReducer;
