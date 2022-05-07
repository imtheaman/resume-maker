import { createSlice } from "@reduxjs/toolkit";
const publicationsSlice = createSlice({
  name: "publications",
  initialState: {} as PublicationState,
  reducers: {},
});
const { reducer: publicationsReducer, actions } = publicationsSlice;
export const {} = actions;
export default publicationsReducer;
