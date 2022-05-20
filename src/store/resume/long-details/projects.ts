import { createSlice } from '@reduxjs/toolkit';
import { LongDetailState } from '../../../../vite-env';
import {
  Fcreate,
  Fdelete,
  FsetBeingUsed,
  FsetDescContent,
  FsetDescHeading,
  FsetFrom,
  FsetHeading,
  FsetOrderDown,
  FsetOrderUp,
  FsetPrimary,
  FsetTo,
} from '../functions';

const init: LongDetailState['data'][string] = {
  primary: '',
  from: '',
  to: '',
  description: {
    heading: 'Achievements/Tasks',
    contents: {
      '25cc658a-0a87-4196-8579-354d8ab33df8': '',
    },
  },
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    beingUsed: false,
    heading: 'Projects',
    data: {
      '25cc658a-0a87-4196-8579-354d8ab33df8': init,
    },
    order: ['25cc658a-0a87-4196-8579-354d8ab33df8'],
  } as LongDetailState,
  reducers: {
    createEl: Fcreate(init),
    deleteEl: Fdelete,
    setBeingUsed: FsetBeingUsed,
    setDescContent: FsetDescContent,
    setDescHeading: FsetDescHeading,
    setFrom: FsetFrom,
    setHeading: FsetHeading,
    setOrderDown: FsetOrderDown,
    setOrderUp: FsetOrderUp,
    setPrimary: FsetPrimary,
    setTo: FsetTo,
  },
});

const { reducer: projectsReducer, actions } = projectsSlice;
export default actions;
export { projectsReducer };
