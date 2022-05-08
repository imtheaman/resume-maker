import { createSlice } from "@reduxjs/toolkit";
const languagesSlice = createSlice({
  name: "languages",
  initialState: {
    beingUsed: false,
    heading: 'Languages'
  } as LanguageState,
  reducers: {},
});
const { reducer: languagesReducer, actions } = languagesSlice;
export const {} = actions;
export default languagesReducer;
