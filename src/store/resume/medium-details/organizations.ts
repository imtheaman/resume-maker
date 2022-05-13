import { createSlice } from '@reduxjs/toolkit';
import { OrganizationState } from '../../../vite-env';
import {
  FsetBeingUsed,
  FsetDesc,
  FsetFrom,
  FsetHeading,
  FsetOrderDown,
  FsetOrderUp,
  FsetPrimary,
  FsetSecondary,
  FsetTo,
} from '../functions';
const organizationsSlice = createSlice({
  name: 'organizations',
  initialState: {
    beingUsed: false,
    heading: 'Organizations',
  } as OrganizationState,
  reducers: {
    setBeingUsed: FsetBeingUsed,
    setHeading: FsetHeading,
    setPrimary: FsetPrimary,
    setFrom: FsetFrom,
    setTo: FsetTo,
    setDesc: FsetDesc,
    setOrderup: FsetOrderUp,
    setOrderDown: FsetOrderDown,
  },
});
const { reducer: organizationsReducer, actions } = organizationsSlice;
export const {
  setBeingUsed,
  setDesc,
  setFrom,
  setHeading,
  setOrderDown,
  setOrderup,
  setPrimary,
  setTo,
} = actions;
export default organizationsReducer;
