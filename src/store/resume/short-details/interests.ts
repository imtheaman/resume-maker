import { createSlice } from '@reduxjs/toolkit';
import { ShortDeatilState } from '../../../vite-env';
import {
  FcreateData,
  FsetBeingUsed,
  FsetHeading,
  FsetType,
  FsetValue,
} from '../functions';

const interestsSlice = createSlice({
  name: 'interests',
  initialState: {
    beingUsed: false,
    heading: 'Interests',
    data: [{ type: '', value: 1 }],
  } as ShortDeatilState,
  reducers: {
    setBeingUsed: FsetBeingUsed,
    setHeading: FsetHeading,
    setType: FsetType,
    createData: FcreateData,
    setValue: FsetValue,
  },
});
const { reducer: interestsReducer, actions } = interestsSlice;
export default actions;
export { interestsReducer };
