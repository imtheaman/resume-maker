import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const languagesSlice = createSlice({
  name: "languages",
  initialState: {
    beingUsed: false,
    heading: "Languages",
  } as LanguageState,
  reducers: {
    setBeingUsed: (state, action: PayloadAction<boolean>) => {
      state.beingUsed = action.payload;
    },
    setHeading: (state, action: PayloadAction<string>) => {
      state.heading = action.payload;
    },
  },
});
const { reducer: languagesReducer, actions } = languagesSlice;
export const { setBeingUsed } = actions;
export default languagesReducer;
