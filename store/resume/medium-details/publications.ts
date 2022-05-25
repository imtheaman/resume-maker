import { createSlice } from '@reduxjs/toolkit';
import { MediumDetailState } from '../../../vite-env';
import {
  Fcreate,
  Fdelete,
  FsetBeingUsed,
  FsetDesc,
  FsetHeading,
  FsetOrderDown,
  FsetOrderUp,
  FsetPrimary,
  FsetWhen,
} from '../functions';
import { init } from './achievements';

const publicationsSlice = createSlice({
  name: 'publications',
  initialState: {
    beingUsed: false,
    heading: 'Publications',
    data: {
      '25cc658a-0a87-4196-8579-354d8ab33df8': init,
    },
    order: ['25cc658a-0a87-4196-8579-354d8ab33df8'],
  } as MediumDetailState,
  reducers: {
    setBeingUsed: FsetBeingUsed,
    setHeading: FsetHeading,
    setPrimary: FsetPrimary,
    createEl: Fcreate(init),
    deleteEl: Fdelete,
    setWhen: FsetWhen,
    setDesc: FsetDesc,
    setOrderUp: FsetOrderUp,
    setOrderDown: FsetOrderDown,
  },
});
const { reducer: publicationsReducer, actions } = publicationsSlice;
export default actions;
export {publicationsReducer};
