import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Screen, Ui } from '../../vite-env';
const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    theme: 'bg-green-600',
    spellCheck: true,
    screen: 'resume'
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
    }
  }
});

const { reducer: uiReducer, actions } = uiSlice;
export const { setSpellCheck, setTheme, setScreen } = actions;
export default uiReducer;
