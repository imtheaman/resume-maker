import { combineReducers } from "@reduxjs/toolkit";
import achievementsReducer from "./resume/achievementsSlice";
import experiencesReducer from "./resume/experiencesSlice";
import projectsReducer from "./resume/projectsSlice";
import uiReducer from "./ui/uiSlice";

const rootReducer = combineReducers({
  ui: uiReducer,
  experiences: experiencesReducer,
  projects: projectsReducer,
  achievements: achievementsReducer,
});

export default rootReducer;
