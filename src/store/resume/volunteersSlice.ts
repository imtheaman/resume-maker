import { createSlice } from "@reduxjs/toolkit";
const volunteersSlice = createSlice({
  name: "volunteers",
  initialState: {
    beingUsed: false,
    heading: "Volunteers",
  } as VolunteerState,
  reducers: {},
});
const { reducer: volunteersReducer, actions } = volunteersSlice;
export const {} = actions;
export default volunteersReducer;
