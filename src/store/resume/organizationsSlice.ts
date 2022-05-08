import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const organizationsSlice = createSlice({
  name: "organizations",
  initialState: {
    beingUsed: false,
    heading: "Organizations",
  } as OrganizationState,
  reducers: {
    setBeingUsed: (state, action: PayloadAction<boolean>) => {
      state.beingUsed = action.payload;
    },
  },
});
const { reducer: organizationsReducer, actions } = organizationsSlice;
export const { setBeingUsed } = actions;
export default organizationsReducer;
