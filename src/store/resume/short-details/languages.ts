import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LanguageState } from '../../../vite-env';
import {
  FcreateData,
  FsetBeingUsed,
  FsetData,
  FsetHeading,
  FsetValue,
} from '../functions';
const languagesSlice = createSlice({
  name: 'languages',
  initialState: {
    beingUsed: false,
    heading: 'Languages',
  } as LanguageState,
  reducers: {
    setBeingUsed: FsetBeingUsed,
    setHeading: FsetHeading,
    setData: FsetData,
    createData: FcreateData,
    setValue: FsetValue,
  },
});
const { reducer: languagesReducer, actions } = languagesSlice;
export const { setBeingUsed, createData, setHeading, setData, setValue } =
  actions;
export default languagesReducer;
