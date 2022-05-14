import { createSlice } from '@reduxjs/toolkit';
import { ShortDeatilState } from '../../../vite-env';
import {
  FcreateData,
  FsetBeingUsed,
  FsetHeading,
  FsetType,
  FsetValue,
} from '../functions';
const languagesSlice = createSlice({
  name: 'languages',
  initialState: {
    beingUsed: false,
    heading: 'Languages',
  } as ShortDeatilState,
  reducers: {
    setBeingUsed: FsetBeingUsed,
    setHeading: FsetHeading,
    setType: FsetType,
    createData: FcreateData,
    setValue: FsetValue,
  },
});
const { reducer: languagesReducer, actions } = languagesSlice;
export const { setBeingUsed, createData, setHeading, setType, setValue } =
  actions;
export default languagesReducer;
