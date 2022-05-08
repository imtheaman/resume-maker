import { combineReducers } from "@reduxjs/toolkit";
import resumeReducer from "./resume";
import uiReducer from "./ui/uiSlice";

const rootReducer = combineReducers({
  ui: uiReducer,
  resume: resumeReducer,
});

export default rootReducer;
