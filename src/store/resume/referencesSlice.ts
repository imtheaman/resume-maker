import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const referencesSlice = createSlice({
  name: "references",
  initialState: {
    beingUsed: false,
    heading: "References",
  } as ReferenceState,
  reducers: {
    setBeingUsed: (state, action: PayloadAction<boolean>) => {
      state.beingUsed = action.payload;
    },
  },
});
const { reducer: referencesReducer, actions } = referencesSlice;
export const {setBeingUsed} = actions;
export default referencesReducer;
