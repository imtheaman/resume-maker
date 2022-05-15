import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AllActions, Ui } from '../../vite-env';
const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    theme: 'bg-orange-600',
    spellCheck: true,
    screen: 'resume',
    fontSize: 'medium',
    listStyle: "before:content-['🔻']",
  } as Ui,
  reducers: {
    setTheme: (state: Ui, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
    setSpellCheck: (state: Ui, action: PayloadAction<boolean>) => {
      state.spellCheck = action.payload;
    },
    setScreen: (state: Ui, action: PayloadAction<Ui['screen']>) => {
      state.screen = action.payload;
    },
    setShowTools: (state: Ui, action: PayloadAction<boolean>) => {
      state.showTools = action.payload
    },
    setFocused: (
      state: Ui,
      action: PayloadAction<{ section: AllActions; id: string }>
    ) => {
      state.focused = action.payload;
    },
  },
});

const { reducer: uiReducer, actions } = uiSlice;
export const { setSpellCheck, setTheme, setScreen, setFocused, setShowTools } =
  actions;
export default uiReducer;
