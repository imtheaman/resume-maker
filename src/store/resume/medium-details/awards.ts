import { createSlice } from '@reduxjs/toolkit';
import { AwardState } from '../../../vite-env';
import {
  Fcreate,
  FsetBeingUsed,
  FsetDesc,
  FsetHeading,
  FsetOrderDown,
  FsetOrderUp,
  FsetPrimary,
  FsetWhen,
} from '../functions';
const awardsSlice = createSlice({
  name: 'awards',
  initialState: {
    beingUsed: false,
    heading: 'Awards',
  } as AwardState,
  reducers: {
    setBeingUsed: FsetBeingUsed,
    setHeading: FsetHeading,
    create: Fcreate,
    setPrimary: FsetPrimary,
    setWhen: FsetWhen,
    setDesc: FsetDesc,
    setOrderUp: FsetOrderUp,
    setOrderDown: FsetOrderDown,
  },
});
const { reducer: awardsReducer, actions } = awardsSlice;
export const {
  setBeingUsed,
  setHeading,
  create,
  setDesc,
  setPrimary,
  setOrderDown,
  setOrderUp,
  setWhen,
} = actions;
export default awardsReducer;
