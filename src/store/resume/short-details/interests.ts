import { createSlice } from '@reduxjs/toolkit';
import { InterestState } from '../../../vite-env';
import { FcreateData, FsetBeingUsed, FsetData, FsetHeading, FsetValue } from '../functions';
const interestsSlice = createSlice({
  name: 'interests',
  initialState: {
    beingUsed: false,
    heading: 'Interests',
  } as InterestState,
  reducers: {
    setBeingUsed: FsetBeingUsed,
    setHeading: FsetHeading,
    setData: FsetData,
    createData: FcreateData,
    setValue: FsetValue
  },
});
const { reducer: interestsReducer, actions } = interestsSlice;
export const { setBeingUsed, createData, setData, setHeading, setValue } = actions;
export default interestsReducer;
