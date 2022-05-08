import { combineReducers } from "@reduxjs/toolkit";
import achievementsReducer from "./achievementsSlice";
import awardsReducer from "./awardsSlice";
import educationsReducer from "./educationSlice";
import experiencesReducer from "./experiencesSlice";
import interestsReducer from "./interestsSlice";
import languagesReducer from "./languagesSlice";
import organizationsReducer from "./organizationsSlice";
import projectsReducer from "./projectsSlice";
import publicationsReducer from "./publicationsSlice";
import referencesReducer from "./referencesSlice";
import skillsReducer from "./skillsSlice";
import volunteersReducer from "./volunteersSlice";

const resumeReducer = combineReducers({
  experiences: experiencesReducer,
  projects: projectsReducer,
  achievements: achievementsReducer,
  educations: educationsReducer,
  references: referencesReducer,
  publications: publicationsReducer,
  skills: skillsReducer,
  organizations: organizationsReducer,
  languages: languagesReducer,
  interests: interestsReducer,
  awards: awardsReducer,
  volunteers: volunteersReducer,
});

export default resumeReducer;
