import { createSlice } from '@reduxjs/toolkit';
import { ShortDeatilState } from '../../../vite-env';
import {
  FcreateData,
  FsetBeingUsed,
  FsetHeading,
  FsetType,
  FsetValue,
} from '../functions';

const skillsSlice = createSlice({
  name: 'skills',
  initialState: {
    beingUsed: false,
    heading: 'Skills',
    data: [{ type: '', value: 1 }],
  } as ShortDeatilState,
  reducers: {
    setBeingUsed: FsetBeingUsed,
    setHeading: FsetHeading,
    createData: FcreateData,
    setValue: FsetValue,
    setType: FsetType,
  },
});

const { reducer: skillsReducer, actions } = skillsSlice;
export default actions;
export { skillsReducer };
