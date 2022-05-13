import { createSlice } from '@reduxjs/toolkit';
import { LongDetailState } from '../../../vite-env';
import {
  FcreateDescContent,
  FsetBeingUsed,
  FsetDescContent,
  FsetDescHeading,
  FsetFrom,
  FsetHeading,
  FsetLocation,
  FsetOrderDown,
  FsetOrderUp,
  FsetPrimary,
  FsetSecondary,
  FsetTo,
} from '../functions';
const experiencesSlice = createSlice({
  name: 'experiences',
  initialState: {
    beingUsed: false,
    heading: 'Work Experience',
  } as LongDetailState,
  reducers: {
    setBeingUsed: FsetBeingUsed,
    setHeading: FsetHeading,
    setPrimary: FsetPrimary,
    setSecondary: FsetSecondary,
    setOrderUp: FsetOrderUp,
    setOrderDown: FsetOrderDown,
    setDescHeading: FsetDescHeading,
    setDescContent: FsetDescContent,
    createDescContent: FcreateDescContent,
    setFrom: FsetFrom,
    setTo: FsetTo,
    setLocation: FsetLocation,
  },
});

const { reducer: experiencesReducer, actions } = experiencesSlice;
export const {
  setBeingUsed,
  createDescContent,
  setDescContent,
  setDescHeading,
  setHeading,
  setPrimary,
  setSecondary,
  setOrderDown,
  setOrderUp,
  setFrom,
  setTo,
  setLocation,
} = actions;
export default experiencesReducer;
