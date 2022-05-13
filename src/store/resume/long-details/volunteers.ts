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
const volunteersSlice = createSlice({
  name: 'volunteers',
  initialState: {
    beingUsed: false,
    heading: 'Volunteers',
  } as LongDetailState,
  reducers: {
    setBeingUsed: FsetBeingUsed,
    setHeading: FsetHeading,
    setPrimary: FsetPrimary,
    setSecondary: FsetSecondary,
    setFrom: FsetFrom,
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
  setLocation,
  setOrderDown,
  setOrderUp,
  setPrimary,
  setSecondary,
  setTo,
} = actions;
export default volunteersReducer;
