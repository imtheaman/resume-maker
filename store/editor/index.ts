import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AllActions, EditorState } from '../../../vite-env';

const editorSlice = createSlice({
  name: 'editor',
  initialState: {} as EditorState,
  reducers: {
    setFocused: (
      state: EditorState,
      action: PayloadAction<{
        section: AllActions;
        id: string;
        descId?: string;
      } | null>
    ) => {
      state.focused = action.payload;
    }
  }
});

const { actions, reducer: editorReducer } = editorSlice;
export const { setFocused } = actions;
export default editorReducer;
