import { createSlice } from "@reduxjs/toolkit";
const interestsSlice = createSlice({
  name: "interests",
  initialState: {
    beingUsed: false,
    heading: "Interests",
  } as InterestState,
  reducers: {},
});
const { reducer: interestsReducer, actions } = interestsSlice;
export const {} = actions;
export default interestsReducer;
