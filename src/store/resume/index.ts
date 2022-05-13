import { combineReducers } from "@reduxjs/toolkit";
import achievementsReducer from "./medium-details/achievements";
import awardsReducer from "./medium-details/awards";
import educationsReducer from "./long-details/educations";
import experiencesReducer from "./long-details/experiences";
import interestsReducer from "./short-details/interests";
import languagesReducer from "./short-details/languages";
import organizationsReducer from "./medium-details/organizations";
import projectsReducer from "./long-details/projects";
import publicationsReducer from "./medium-details/publications";
import referencesReducer from "./short-details/references";
import skillsReducer from "./short-details/skills";
import volunteersReducer from "./long-details/volunteers";

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
