import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const achievementsSlice = createSlice({
  name: "achievements",
  initialState: {
    beingUsed: false,
    heading: "Achievements",
  } as AchievementState,
  reducers: {
    setAchName: (
      state,
      action: PayloadAction<{ achId: number; content: string }>
    ) => {
      state.data[action.payload.achId].achievement = action.payload.content;
    },
    setAchPeriod: (
      state,
      action: PayloadAction<{ achId: number; when: Period }>
    ) => {
      state.data[action.payload.achId].when = action.payload.when;
    },
    setAchDesc: (
      state,
      action: PayloadAction<{ achId: number; content: string }>
    ) => {
      state.data[action.payload.achId].description = action.payload.content;
    },
  },
});
const { reducer: achievementsReducer, actions } = achievementsSlice;
export const { setAchDesc, setAchName, setAchPeriod } = actions;
export default achievementsReducer;
