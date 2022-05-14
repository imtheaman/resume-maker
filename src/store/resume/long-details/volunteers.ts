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
  description: { heading: 'Tasks', contents: [''] },
};

const volunteersSlice = createSlice({
  name: 'volunteers',
  initialState: {
    beingUsed: false,
    heading: 'Volunteers',
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
    setFrom: FsetFrom,
    create: Fcreate(init),
    setTo: FsetTo,
    setLocation: FsetLocation,
    setDescContent: FsetDescContent,
    setDescHeading: FsetDescHeading,
    createDescContent: FcreateDescContent,
    setOrderUp: FsetOrderUp,
    setOrderDown: FsetOrderDown,
  },
});
const { reducer: volunteersReducer, actions } = volunteersSlice;
export const {
  setBeingUsed,
  createDescContent,
  setDescContent,
  setDescHeading,
  setFrom,
  setHeading,
  create,
  setLocation,
  setOrderDown,
  setOrderUp,
  setPrimary,
  setSecondary,
  setTo,
} = actions;
export default volunteersReducer;
