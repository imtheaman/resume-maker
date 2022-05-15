import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {},
  reducers: {
    setProfilePic: (state: any, action: PayloadAction<string>) => {
      state.profilePic = action.payload;
    },
    setName: (state: any, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

const { actions, reducer: profileReducer } = profileSlice;
export const { setProfilePic, setName } = actions;
export default profileReducer;
