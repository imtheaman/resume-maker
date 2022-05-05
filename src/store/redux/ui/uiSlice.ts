import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const uiSlice = createSlice({
  name: "ui",
  initialState: {
    theme: "bg-orange-500",
    spellCheck: true,
  },
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
    setSpellCheck: (state, action: PayloadAction<boolean>) => {
      state.spellCheck = action.payload;
    },
  },
});

const { reducer: uiReducer, actions } = uiSlice;
export const { setSpellCheck, setTheme } = actions;
export default uiReducer;
