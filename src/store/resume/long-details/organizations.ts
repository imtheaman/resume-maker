import { createSlice } from '@reduxjs/toolkit';
import { LongDetailState } from '../../../vite-env';
import {
  Fcreate,
  FcreateDescContent,
  FsetBeingUsed,
  FsetDescContent,
  FsetDescHeading,
  FsetFrom,
  FsetHeading,
  FsetOrderDown,
  FsetOrderUp,
  FsetPrimary,
  FsetTo,
} from '../functions';

const init: LongDetailState['data'][string] = {
  primary: '',
  from: '',
  to: '',
  description: {
    heading: 'Impacts',
    contents: [''],
  },
};

const organizationsSlice = createSlice({
  name: 'organizations',
  initialState: {
    beingUsed: false,
    heading: 'Organizations',
    data: {
      '25cc658a-0a87-4196-8579-354d8ab33df8': init,
    },
    order: ['25cc658a-0a87-4196-8579-354d8ab33df8'],
  } as LongDetailState,
  reducers: {
    setBeingUsed: FsetBeingUsed,
    setHeading: FsetHeading,
    setPrimary: FsetPrimary,
    setFrom: FsetFrom,
    create: Fcreate(init),
    setTo: FsetTo,
    setDescHeading: FsetDescHeading,
    setDescContent: FsetDescContent,
    createDescContent: FcreateDescContent,
    setOrderup: FsetOrderUp,
    setOrderDown: FsetOrderDown,
  },
});
const { reducer: organizationsReducer, actions } = organizationsSlice;
export default actions;
export {organizationsReducer};
