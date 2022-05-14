import { createSlice } from '@reduxjs/toolkit';
import { ShortDeatilState } from '../../../vite-env';
import { FcreateData, FsetBeingUsed, FsetHeading, FsetType, FsetValue } from '../functions';
const interestsSlice = createSlice({
  name: 'interests',
  initialState: {
    beingUsed: false,
    heading: 'Interests',
  } as ShortDeatilState,
  reducers: {
    setBeingUsed: FsetBeingUsed,
    setHeading: FsetHeading,
    setType: FsetType,
    createData: FcreateData,
    setValue: FsetValue
  },
});
const { reducer: interestsReducer, actions } = interestsSlice;
export const { setBeingUsed, createData, setType, setHeading, setValue } = actions;
export default interestsReducer;
