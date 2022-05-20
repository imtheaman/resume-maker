import { combineReducers } from '@reduxjs/toolkit';
import editorReducer from './editor';
import profileReducer from './profile';
import resumeReducer from './resume';
import stylesReducer from './styles';
import uiReducer from './ui';

const rootReducer = combineReducers({
  ui: uiReducer,
  resume: resumeReducer,
  profile: profileReducer,
  editor: editorReducer,
  styles: stylesReducer
});

export default rootReducer;
