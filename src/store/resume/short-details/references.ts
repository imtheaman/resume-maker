import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReferenceState } from '../../../vite-env';
import { FsetBeingUsed, FsetHeading } from '../functions';
const referencesSlice = createSlice({
  name: 'references',
  initialState: {
    beingUsed: false,
    heading: 'References',
  } as ReferenceState,
  reducers: {
    setBeingUsed: FsetBeingUsed,
    setHeading: FsetHeading,
    setReference: (
      state: any,
      action: PayloadAction<{
        id: number;
        content: { person: string; contact: string };
      }>
    ) => {
      state.data[action.payload.id] = action.payload.content;
    },
    createReference: (state: any) => {
      state.data.push({ person: '', contact: '' });
    },
  },
});
const { reducer: referencesReducer, actions } = referencesSlice;
export const { setBeingUsed, createReference, setHeading, setReference } =
  actions;
export default referencesReducer;
