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

export const init: MediumDetailState['data'][string] = {
  primary: '',
  when: '',
  description: '',
};

const achievementsSlice = createSlice({
  name: 'achievements',
  initialState: {
    beingUsed: false,
    heading: 'Achievements',
    data: {
      '25cc658a-0a87-4196-8579-354d8ab33df8': init,
    },
    order: ['25cc658a-0a87-4196-8579-354d8ab33df8'],
  } as MediumDetailState,
  reducers: {
    setBeingUsed: FsetBeingUsed,
    setHeading: FsetHeading,
    createEl: Fcreate(init),
    deleteEl: Fdelete,
    setPrimary: FsetPrimary,
    setWhen: FsetWhen,
    setDesc: FsetDesc,
    setOrderUp: FsetOrderUp,
    setOrderDown: FsetOrderDown,
  },
});
const { reducer: achievementsReducer, actions } = achievementsSlice;
export default actions;
export {achievementsReducer};
