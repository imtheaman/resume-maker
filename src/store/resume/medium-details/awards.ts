import { createSlice } from '@reduxjs/toolkit';
import { MediumDetailState } from '../../../vite-env';
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
import { init } from './achievements';

const awardsSlice = createSlice({
  name: 'awards',
  initialState: {
    beingUsed: false,
    heading: 'Awards',
    data: {
      '25cc658a-0a87-4196-8579-354d8ab33df8': init,
    },
    order: ['25cc658a-0a87-4196-8579-354d8ab33df8'],
  } as MediumDetailState,
  reducers: {
    setBeingUsed: FsetBeingUsed,
    setHeading: FsetHeading,
    create: Fcreate(init),
    setPrimary: FsetPrimary,
    setWhen: FsetWhen,
    setDesc: FsetDesc,
    setOrderUp: FsetOrderUp,
    setOrderDown: FsetOrderDown,
  },
});
const { reducer: awardsReducer, actions } = awardsSlice;
export default actions;
export {awardsReducer};
