import { createSlice } from '@reduxjs/toolkit';
import { PublicationState } from '../../../vite-env';
import {
  FsetBeingUsed,
  FsetDesc,
  FsetHeading,
  FsetOrderDown,
  FsetOrderUp,
  FsetPrimary,
} from '../functions';
const publicationsSlice = createSlice({
  name: 'publications',
  initialState: {
    beingUsed: false,
    heading: 'Publications',
  } as PublicationState,
  reducers: {
    setBeingUsed: FsetBeingUsed,
    setHeading: FsetHeading,
    setPrimary: FsetPrimary,
    setDesc: FsetDesc,
    setOrderUp: FsetOrderUp,
    setOrderDown: FsetOrderDown,
  },
});
const { reducer: publicationsReducer, actions } = publicationsSlice;
export const {
  setBeingUsed,
  setDesc,
  setHeading,
  setOrderDown,
  setOrderUp,
  setPrimary
} = actions;
export default publicationsReducer;
