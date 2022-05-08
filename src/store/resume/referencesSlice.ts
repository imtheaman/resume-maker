import { createSlice } from "@reduxjs/toolkit";
const referencesSlice = createSlice({
  name: "references",
  initialState: {
    beingUsed: false,
    heading: "References",
  } as ReferenceState,
  reducers: {},
});
const { reducer: referencesReducer, actions } = referencesSlice;
export const {} = actions;
export default referencesReducer;
