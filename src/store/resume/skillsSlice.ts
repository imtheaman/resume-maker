import { createSlice } from "@reduxjs/toolkit";

const skillsSlice = createSlice({
  name: "skills",
  initialState: {
    beingUsed: false,
    heading: "Skills",
  } as SkillState,
  reducers: {},
});

const { reducer: skillsReducer, actions } = skillsSlice;
export const {} = actions;
export default skillsReducer;
