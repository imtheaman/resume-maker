import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AllActions, FontFamily, FontSize, Screen, Ui } from '../../vite-env';
const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    theme: 'bg-orange-600',
    spellCheck: true,
    screen: 'resume',
    fontSize: 'medium',
  } as Ui,
  reducers: {
    setTheme: (state: Ui, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
    setSpellCheck: (state: Ui, action: PayloadAction<boolean>) => {
      state.spellCheck = action.payload;
    },
    setScreen: (state: Ui, action: PayloadAction<Screen>) => {
      state.screen = action.payload;
    },
    setFontSize: (state: Ui, action: PayloadAction<FontSize>) => {
      state.fontSize = action.payload;
    },
    setFontFamily: (state: Ui, action: PayloadAction<FontFamily>) => {
      state.fontFamily = action.payload;
    },
  },
});

const { reducer: uiReducer, actions } = uiSlice;
export const {
  setSpellCheck,
  setTheme,
  setScreen,
  setFontFamily,
  setFontSize,
} = actions;
export default uiReducer;
