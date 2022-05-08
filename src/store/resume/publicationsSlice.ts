import { createSlice } from "@reduxjs/toolkit";
const publicationsSlice = createSlice({
  name: "publications",
  initialState: {
    beingUsed: false,
    heading: 'Publications'
  } as PublicationState,
  reducers: {},
});
const { reducer: publicationsReducer, actions } = publicationsSlice;
export const {} = actions;
export default publicationsReducer;
