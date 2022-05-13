import { createSlice } from '@reduxjs/toolkit';
import { SkillState } from '../../../vite-env';
import { FcreateData, FsetBeingUsed, FsetData, FsetHeading } from '../functions';

const skillsSlice = createSlice({
  name: 'skills',
  initialState: {
    beingUsed: false,
    heading: 'Skills',
  } as SkillState,
  reducers: {
    setBeingUsed: FsetBeingUsed,
    setHeading: FsetHeading,
    setData: FsetData,
    createData: FcreateData,
  },
});

const { reducer: skillsReducer, actions } = skillsSlice;
export const { setBeingUsed, createData, setHeading, setData } = actions;
export default skillsReducer;
