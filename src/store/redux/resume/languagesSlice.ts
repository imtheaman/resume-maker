import { createSlice } from "@reduxjs/toolkit";
const languagesSlice = createSlice({
  name: "languages",
  initialState: {} as LanguageState,
  reducers: {},
});
const { reducer: languagesReducer, actions } = languagesSlice;
export const {} = actions;
export default languagesReducer;
