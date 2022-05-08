import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const awardsSlice = createSlice({
  name: "awards",
  initialState: {
    beingUsed: false,
    heading: "Awards",
  } as AwardState,
  reducers: {
    setBeingUsed: (state, action: PayloadAction<boolean>) => {
      state.beingUsed = action.payload;
    },
  },
});
const { reducer: awardsReducer, actions } = awardsSlice;
export const {setBeingUsed} = actions;
export default awardsReducer;
