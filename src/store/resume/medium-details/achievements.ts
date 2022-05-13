import { createSlice } from '@reduxjs/toolkit';
import { AchievementState } from '../../../vite-env';
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
const achievementsSlice = createSlice({
  name: 'achievements',
  initialState: {
    beingUsed: false,
    heading: 'Achievements',
    data: {
      '14118381-c45b-48b6-8e71-139ef4c6b2aa': {
        achievement: '',
        when: '',
        description: '',
      },
    },
    order: ['14118381-c45b-48b6-8e71-139ef4c6b2aa'],
  } as AchievementState,
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
const { reducer: achievementsReducer, actions } = achievementsSlice;
export const {
  setHeading,
  create,
  setBeingUsed,
  setDesc,
  setPrimary,
  setOrderDown,
  setOrderUp,
  setWhen,
} = actions;
export default achievementsReducer;
