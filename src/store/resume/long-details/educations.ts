import { createSlice } from '@reduxjs/toolkit';
import { LongDetailState } from '../../../vite-env';
import {
  Fcreate,
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

const educationSlice = createSlice({
  name: 'education',
  initialState: {
    beingUsed: false,
    heading: 'Education',
  } as LongDetailState,
  reducers: {
    setBeingUsed: FsetBeingUsed,
    setHeading: FsetHeading,
    setPrimary: FsetPrimary,
    setSecondary: FsetSecondary,
    create: Fcreate,
    setFrom: FsetFrom,
    setTo: FsetTo,
    setLocation: FsetLocation,
    setDescHeading: FsetDescHeading,
    setDescContent: FsetDescContent,
    createDescContent: FcreateDescContent,
    setOrderUp: FsetOrderUp,
    setOrderDown: FsetOrderDown,
  },
});

const { reducer: educationsReducer, actions } = educationSlice;
export const {
  setBeingUsed,
  createDescContent,
  setDescContent,
  setDescHeading,
  setPrimary,
  create,
  setLocation,
  setOrderDown,
  setOrderUp,
  setTo,
  setFrom,
  setHeading,
  setSecondary,
} = actions;
export default educationsReducer;
