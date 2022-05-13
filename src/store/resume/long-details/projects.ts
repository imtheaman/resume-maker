import { createSlice } from '@reduxjs/toolkit';
import { LongDetailState } from '../../../vite-env';
import {
  FcreateDescContent,
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

const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    beingUsed: false,
    heading: 'Projects',
  } as LongDetailState,
  reducers: {
    setBeingUsed: FsetBeingUsed,
    setHeading: FsetHeading,
    setPrimary: FsetPrimary,
    setFrom: FsetFrom,
    setTo: FsetTo,
    setDescHeading: FsetDescHeading,
    setDescContent: FsetDescContent,
    createDescContent: FcreateDescContent,
    setOrderUp: FsetOrderUp,
    setOrderDown: FsetOrderDown,
  },
});

const { reducer: projectsReducer, actions } = projectsSlice;
export const {
  setBeingUsed,
  createDescContent,
  setDescContent,
  setDescHeading,
  setFrom,
  setHeading,
  setOrderDown,
  setOrderUp,
  setPrimary,
  setTo,
} = actions;
export default projectsReducer;
