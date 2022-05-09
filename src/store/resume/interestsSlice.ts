import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const interestsSlice = createSlice({
  name: "interests",
  initialState: {
    beingUsed: false,
    heading: "Interests",
  } as InterestState,
  reducers: {
    setBeingUsed: (state, action: PayloadAction<boolean>) => {
      state.beingUsed = action.payload;
    },
    setHeading: (state, action: PayloadAction<string>) => {
      state.heading = action.payload;
    },
  },
});
const { reducer: interestsReducer, actions } = interestsSlice;
export const { setBeingUsed } = actions;
export default interestsReducer;
