import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const publicationsSlice = createSlice({
  name: "publications",
  initialState: {
    beingUsed: false,
    heading: "Publications",
  } as PublicationState,
  reducers: {
    setBeingUsed: (state, action: PayloadAction<boolean>) => {
      state.beingUsed = action.payload;
    },
    setHeading: (state, action: PayloadAction<string>) => {
      state.heading = action.payload;
    },
  },
});
const { reducer: publicationsReducer, actions } = publicationsSlice;
export const { setBeingUsed } = actions;
export default publicationsReducer;
