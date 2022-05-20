import { createSlice } from '@reduxjs/toolkit';
import { ShortDetailState } from '../../../../vite-env';
import {
  Fcreate,
  Fdelete,
  FsetBeingUsed,
  FsetHeading,
  FsetType,
  FsetValue,
} from '../functions';

const init = { type: '', value: '' };

const interestsSlice = createSlice({
  name: 'interests',
  initialState: {
    beingUsed: false,
    heading: 'Interests',
    data: {
      '25cc658a-0a87-4196-8579-354d8ab33df8': init,
    },
    order: ['25cc658a-0a87-4196-8579-354d8ab33df8'],
  } as ShortDetailState,
  reducers: {
    setBeingUsed: FsetBeingUsed,
    setHeading: FsetHeading,
    setType: FsetType,
    createEl: Fcreate(init),
    deleteEl: Fdelete,
    setValue: FsetValue,
  },
});
const { reducer: interestsReducer, actions } = interestsSlice;
export default actions;
export { interestsReducer };
