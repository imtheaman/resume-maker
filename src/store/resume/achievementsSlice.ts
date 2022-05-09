import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const achievementsSlice = createSlice({
  name: "achievements",
  initialState: {
    beingUsed: false,
    heading: "Achievements",
  } as AchievementState,
  reducers: {
    setBeingUsed: (state, action: PayloadAction<boolean>) => {
      state.beingUsed = action.payload;
    },
    setHeading: (state, action: PayloadAction<string>) => {
      state.heading = action.payload;
    },
    createAch: (
      state,
      action: PayloadAction<{
        id: string;
        data: AchievementState["data"][string];
      }>
    ) => {
      state.data[action.payload.id] = {
        achievement: "",
        when: { month: null, year: null },
        description: "",
      };
    },
    setAchName: (
      state,
      action: PayloadAction<{ achId: string; content: string }>
    ) => {
      state.data[action.payload.achId].achievement = action.payload.content;
    },
    setAchPeriod: (
      state,
      action: PayloadAction<{ achId: string; when: Period }>
    ) => {
      state.data[action.payload.achId].when = action.payload.when;
    },
    setAchDesc: (
      state,
      action: PayloadAction<{ achId: string; content: string }>
    ) => {
      state.data[action.payload.achId].description = action.payload.content;
    },
  },
});
const { reducer: achievementsReducer, actions } = achievementsSlice;
export const {
  setHeading,
  createAch,
  setBeingUsed,
  setAchDesc,
  setAchName,
  setAchPeriod,
} = actions;
export default achievementsReducer;
