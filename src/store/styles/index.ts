import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  FontFamily,
  FontSize,
  Sections,
  style,
  StylesState
} from '../../../vite-env';

const stylesSlice = createSlice({
  name: 'styles',
  initialState: {
    interestStyle: 'short-section-border',
    contentStyle: 'content-style-circle-border',
    languageStyle: 'short-section-fill-light',
    listStyle: 'list-style-circle',
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
    setIterestStyle: (state: StylesState, action: PayloadAction<style>) => {
      state.interestStyle = action.payload;
    },
    setLanguageState: (state: StylesState, action: PayloadAction<style>) => {
      state.languageStyle = action.payload;
    },
    setSkillState: (state: StylesState, action: PayloadAction<style>) => {
      state.skillStyle = action.payload;
    },
    setFontSize: (state: StylesState, action: PayloadAction<FontSize>) => {
      state.fontSize = action.payload;
    },
    setFontFamily: (state: StylesState, action: PayloadAction<FontFamily>) => {
      state.fontFamily = action.payload;
    },
    setLayout: (state: StylesState, action: PayloadAction<Sections>) => {
      state.layout = action.payload;
    }
  }
});

const { actions, reducer: stylesReducer } = stylesSlice;
export const {
  setListStyle,
  setContentStyle,
  setIterestStyle,
  setLanguageState,
  setSkillState,
  setFontFamily,
  setFontSize
} = actions;
export default stylesReducer;
