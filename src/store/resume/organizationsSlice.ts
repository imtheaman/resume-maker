import { createSlice } from "@reduxjs/toolkit";
const organizationsSlice = createSlice({
  name: "organizations",
  initialState: {
    beingUsed: false,
    heading: "Organizations",
  } as OrganizationState,
  reducers: {},
});
const { reducer: organizationsReducer, actions } = organizationsSlice;
export const {} = actions;
export default organizationsReducer;
