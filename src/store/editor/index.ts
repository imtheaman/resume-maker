import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AllActions, EditorState } from '../../vite-env';

const editorSlice = createSlice({
  name: 'editor',
  initialState: {} as EditorState,
  reducers: {
    setFocused: (
      state: EditorState,
      action: PayloadAction<{
        section: AllActions;
        id: string;
        descId?: number;
      }>
    ) => {
      state.focused = action.payload;
    },
    setListStyle: (state: EditorState, action: PayloadAction<string>) => {
      state.listStyle = action.payload;
    },
  },
});

const { actions, reducer: editorReducer } = editorSlice;
export const { setFocused, setListStyle } = actions;
export default editorReducer;
