import { combineReducers } from '@reduxjs/toolkit';
import { achievementsReducer } from './medium-details/achievements';
import { awardsReducer } from './medium-details/awards';
import { educationsReducer } from './long-details/educations';
import { experiencesReducer } from './long-details/experiences';
import { interestsReducer } from './short-details/interests';
import { languagesReducer } from './short-details/languages';
import { organizationsReducer } from './long-details/organizations';
import { projectsReducer } from './long-details/projects';
import { publicationsReducer } from './medium-details/publications';
import { referencesReducer } from './short-details/references';
import { skillsReducer } from './short-details/skills';
import { volunteersReducer } from './long-details/volunteers';

const resumeReducer = combineReducers({
  educations: educationsReducer,
  experiences: experiencesReducer,
  organizations: organizationsReducer,
  projects: projectsReducer,
  volunteers: volunteersReducer,
  achievements: achievementsReducer,
  references: referencesReducer,
  publications: publicationsReducer,
  skills: skillsReducer,
  languages: languagesReducer,
  interests: interestsReducer,
  awards: awardsReducer,
});

export default resumeReducer;
