import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const achievementsSlice = createSlice({
  name: "achievements",
  initialState: {
    beingUsed: true,
    heading: "Achievements",
    data: [
      {
        name: "",
        description: "",
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
    setAchDesc: (
      state,
      action: PayloadAction<{ achId: number; content: string }>
    ) => {
      state.data[action.payload.achId].description = action.payload.content;
    },
  },
});
const { reducer: achievementsReducer, actions } = achievementsSlice;
export const { setAchDesc, setAchName } = actions;
export default achievementsReducer;
