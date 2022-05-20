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
const languagesSlice = createSlice({
  name: 'languages',
  initialState: {
    beingUsed: false,
    heading: 'Languages',
    data: {
      '25cc658a-0a87-4196-8579-354d8ab33df8': init,
    },
    order: ['25cc658a-0a87-4196-8579-354d8ab33df8'],
  } as ShortDeatilState,
  reducers: {
    setBeingUsed: FsetBeingUsed,
    setHeading: FsetHeading,
    setType: FsetType,
    createEl: Fcreate(init),
    deleteEl: Fdelete,
    setValue: FsetValue,
  },
});
const { reducer: languagesReducer, actions } = languagesSlice;
export default actions;
export { languagesReducer };
