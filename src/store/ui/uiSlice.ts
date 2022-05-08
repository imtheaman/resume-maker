import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const uiSlice = createSlice({
  name: "ui",
  initialState: {
    theme: "bg-green-500",
    spellCheck: true,
    screen: "resume",
    fontSize: "medium",
    isResumeBlank: true,
    listStyle: "before:content-['🔻']",
    focused: false,
    showTools: false,
  } as Ui,
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
    setSpellCheck: (state, action: PayloadAction<boolean>) => {
      state.spellCheck = action.payload;
    },
    setScreen: (state, action: PayloadAction<Ui["screen"]>) => {
      state.screen = action.payload;
    },
    setFocused: (state, action: PayloadAction<boolean>) => {
      state.focused = action.payload;
    },
    setShowTools: (state, action: PayloadAction<boolean>) => {
      state.showTools = action.payload;
    },
  },
});

const { reducer: uiReducer, actions } = uiSlice;
export const { setSpellCheck, setTheme, setScreen, setFocused, setShowTools } =
  actions;
export default uiReducer;
