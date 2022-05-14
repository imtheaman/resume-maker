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
  description: { heading: 'Courses', contents: [''] },
};

const educationSlice = createSlice({
  name: 'education',
  initialState: {
    beingUsed: false,
    heading: 'Education',
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
    create: Fcreate(init),
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
