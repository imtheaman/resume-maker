import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  FontFamily,
  FontSize,
  style,
  StylesState
} from '../../vite-env';

const stylesSlice = createSlice({
  name: 'styles',
  initialState: {
    interestStyle: 'short-section-border',
    contentStyle: 'custom-list-style-dash',
    languageStyle: 'short-section-fill-light',
    listStyle: 'custom-list-style-arrow',
    skillStyle: 'short-section-fill-dark',
    fontSize: 'medium',
    fontFamily: 'default',
    layout: [
      'experiences',
      'projects',
      'educations',
      'volunteers',
      'organizations',
      'achievements',
      'awards',
      'publications',
      'interests',
      'languages',
      'skills',
      'references'
    ]
  } as StylesState,
  reducers: {
    setListStyle: (state: StylesState, action: PayloadAction<string>) => {
      state.listStyle = action.payload;
    },
    setContentStyle: (state: StylesState, action: PayloadAction<string>) => {
      state.contentStyle = action.payload;
    },
    setInterestStyle: (state: StylesState, action: PayloadAction<style>) => {
      state.interestStyle = action.payload;
    },
    setLanguageStyle: (state: StylesState, action: PayloadAction<style>) => {
      state.languageStyle = action.payload;
    },
    setSkillStyle: (state: StylesState, action: PayloadAction<style>) => {
      state.skillStyle = action.payload;
    },
    setFontSize: (state: StylesState, action: PayloadAction<FontSize>) => {
      state.fontSize = action.payload;
    },
    setFontFamily: (state: StylesState, action: PayloadAction<FontFamily>) => {
      state.fontFamily = action.payload;
    },
    setLayout: (state: StylesState, action: PayloadAction<string[]>) => {
      state.layout = action.payload;
    }
  }
});

const { actions, reducer: stylesReducer } = stylesSlice;
export const {
  setListStyle,
  setContentStyle,
  setInterestStyle,
  setLayout,
  setLanguageStyle,
  setSkillStyle,
  setFontFamily,
  setFontSize
} = actions;
export default stylesReducer;
