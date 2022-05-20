import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { style, StylesState } from '../../../vite-env';

const stylesSlice = createSlice({
  name: 'styles',
  initialState: {
    interestStyle: 'short-section-border',
    contentStyle: '',
    languageStyle: 'short-section-fill-light',
    listStyle: '',
    skillStyle: 'short-section-fill-dark'
  } as StylesState,
  reducers: {
    setListStyle: (state: StylesState, action: PayloadAction<string>) => {
      state.listStyle = action.payload;
    },
    setContentStyle: (state: StylesState, action: PayloadAction<string>) => {
      state.contentStyle = action.payload;
    },
    setIterestStyle: (state: StylesState, action: PayloadAction<style>) => {
      state.interestStyle = action.payload;
    },
    setLanguageState: (state: StylesState, action: PayloadAction<style>) => {
      state.languageStyle = action.payload;
    },
    setSkillState: (state: StylesState, action: PayloadAction<style>) => {
      state.skillStyle = action.payload;
    }
  }
});

const { actions, reducer: stylesReducer } = stylesSlice;
export const {
  setListStyle,
  setContentStyle,
  setIterestStyle,
  setLanguageState,
  setSkillState
} = actions;
export default stylesReducer;
