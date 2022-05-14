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

const init: LongDetailState['data'][string] = {
  primary: '',
  secondary: '',
  from: '',
  to: '',
  location: '',
  description: { heading: 'Achievements/Tasks', contents: [''] },
};

const experiencesSlice = createSlice({
  name: 'experiences',
  initialState: {
    beingUsed: false,
    heading: 'Work Experience',
    data: {
      '25cc658a-0a87-4196-8579-354d8ab33df8': init,
    },
    order: ['25cc658a-0a87-4196-8579-354d8ab33df8'],
  } as LongDetailState,
  reducers: {
    setBeingUsed: FsetBeingUsed,
    setHeading: FsetHeading,
    setPrimary: FsetPrimary,
    setSecondary: FsetSecondary,
    setOrderUp: FsetOrderUp,
    setOrderDown: FsetOrderDown,
    create: Fcreate(init),
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
  create,
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
