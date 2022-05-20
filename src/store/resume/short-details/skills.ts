import { createSlice } from '@reduxjs/toolkit';
import { ShortDeatilState } from '../../../../vite-env';
import {
  Fcreate,
  Fdelete,
  FsetBeingUsed,
  FsetHeading,
  FsetType,
  FsetValue,
} from '../functions';

const init = { type: '', value: '' };
const skillsSlice = createSlice({
  name: 'skills',
  initialState: {
    beingUsed: false,
    heading: 'Skills',
    data: {
      '25cc658a-0a87-4196-8579-354d8ab33df8': init,
    },
    order: ['25cc658a-0a87-4196-8579-354d8ab33df8'],
  } as ShortDeatilState,
  reducers: {
    setBeingUsed: FsetBeingUsed,
    setHeading: FsetHeading,
    createEl: Fcreate(init),
    deleteEl: Fdelete,
    setValue: FsetValue,
    setType: FsetType,
  },
});

const { reducer: skillsReducer, actions } = skillsSlice;
export default actions;
export { skillsReducer };
