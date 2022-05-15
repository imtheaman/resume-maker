import { combineReducers } from '@reduxjs/toolkit';
import profileReducer from './profile/profile';
import resumeReducer from './resume';
import uiReducer from './ui/uiSlice';

const rootReducer = combineReducers({
  ui: uiReducer,
  resume: resumeReducer,
  profile: profileReducer,
});

export default rootReducer;
