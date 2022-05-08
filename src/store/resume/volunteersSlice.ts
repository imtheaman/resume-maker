import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const volunteersSlice = createSlice({
  name: "volunteers",
  initialState: {
    beingUsed: false,
    heading: "Volunteers",
  } as VolunteerState,
  reducers: {
    setBeingUsed: (state, action: PayloadAction<boolean>) => {
      state.beingUsed = action.payload;
    },
  },
});
const { reducer: volunteersReducer, actions } = volunteersSlice;
export const { setBeingUsed } = actions;
export default volunteersReducer;
