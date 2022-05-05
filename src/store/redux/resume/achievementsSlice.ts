import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const achievementsSlice = createSlice({
  name: "achievements",
  initialState: {
    beingUsed: true,
    heading: "Achievements",
    data: [
      {
        name: "",
        from: { month: undefined, year: undefined },
        to: { month: undefined, year: undefined },
      },
    ],
  },
  reducers: {
    setAchName: (
      state,
      action: PayloadAction<{ achId: number; content: string }>
    ) => {
      state.data[action.payload.achId].name = action.payload.content;
    },
    setAchFrom: (
      state,
      action: PayloadAction<{ achId: number; from: any }>
    ) => {
      state.data[action.payload.achId].from = action.payload.from;
    },
    setAchTo: (state, action: PayloadAction<{ achId: number; to: any }>) => {
      state.data[action.payload.achId].to = action.payload.to;
    },
  },
});
const { reducer: achievementsReducer, actions } = achievementsSlice;
export const { setAchFrom, setAchName, setAchTo } = actions;
export default achievementsReducer;
