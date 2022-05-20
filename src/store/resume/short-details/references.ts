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
const referencesSlice = createSlice({
  name: 'references',
  initialState: {
    beingUsed: false,
    heading: 'References',
    data: {
      '25cc658a-0a87-4196-8579-354d8ab33df8': init,
    },
    order: ['25cc658a-0a87-4196-8579-354d8ab33df8'],
  } as ShortDeatilState,
  reducers: {
    setBeingUsed: FsetBeingUsed,
    setHeading: FsetHeading,
    setType: FsetType,
    setValue: FsetValue,
    createEl: Fcreate(init),
    deleteEl: Fdelete,
  },
});
const { reducer: referencesReducer, actions } = referencesSlice;
export default actions;
export { referencesReducer };
