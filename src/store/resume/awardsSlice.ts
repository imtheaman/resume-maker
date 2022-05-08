import { createSlice } from "@reduxjs/toolkit";
const awardsSlice = createSlice({
  name: "awards",
  initialState: {
    beingUsed: false,
    heading: 'Awards'
  } as AwardState,
  reducers: {},
});
const { reducer: awardsReducer, actions } = awardsSlice;
export const {} = actions;
export default awardsReducer;
