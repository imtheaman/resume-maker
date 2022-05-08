import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const skillsSlice = createSlice({
  name: "skills",
  initialState: {
    beingUsed: false,
    heading: "Skills",
  } as SkillState,
  reducers: {
    setBeingUsed: (state, action: PayloadAction<boolean>) => {
      state.beingUsed = action.payload;
    },
  },
});

const { reducer: skillsReducer, actions } = skillsSlice;
export const {setBeingUsed} = actions;
export default skillsReducer;
