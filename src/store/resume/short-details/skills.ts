import { createSlice } from '@reduxjs/toolkit';
import { ShortDeatilState } from '../../../vite-env';
import { FcreateData, FsetBeingUsed, FsetHeading, FsetType, FsetValue } from '../functions';

const skillsSlice = createSlice({
  name: 'skills',
  initialState: {
    beingUsed: false,
    heading: 'Skills',
  } as ShortDeatilState,
  reducers: {
    setBeingUsed: FsetBeingUsed,
    setHeading: FsetHeading,
    createData: FcreateData,
    setValue: FsetValue,
    setType: FsetType
  },
});

const { reducer: skillsReducer, actions } = skillsSlice;
export const { setBeingUsed, createData, setHeading, setValue, setType } = actions;
export default skillsReducer;
