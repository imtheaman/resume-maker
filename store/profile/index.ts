import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProfileState } from '../../../vite-env';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {} as ProfileState,
  reducers: {
    setProfilePic: (state: ProfileState, action: PayloadAction<string>) => {
      state.profilePic = action.payload;
    },
    setName: (state: ProfileState, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setIntro: (state: ProfileState, action: PayloadAction<string>) => {
      state.intro = action.payload;
    },
    setGithub: (state: ProfileState, action: PayloadAction<string>) => {
      state.socials.github = `https://github.com/${action.payload}`;
    },
    setEmail: (state: ProfileState, action: PayloadAction<string>) => {
      state.socials.email = action.payload;
    },
    setStackOverflow: (state: ProfileState, action: PayloadAction<string>) => {
      state.socials.stackoverflow = `https://stackoverflow.com/users/${action.payload}`;
    },
    setLinkedin: (state: ProfileState, action: PayloadAction<string>) => {
      state.socials.linkedin = `https://linkedin.com/in/${action.payload}`;
    },
    setPhone: (state: ProfileState, action: PayloadAction<string>) => {
      state.socials.phone = action.payload;
    },
    setReddit: (state: ProfileState, action: PayloadAction<string>) => {
      state.socials.reddit = `https://reddit.com/user/${action.payload}`;
    },
    setMedium: (state: ProfileState, action: PayloadAction<string>) => {
      state.socials.medium = `https://medium.com/@${action.payload}`;
    },
    setConnect: (state: ProfileState, action: PayloadAction<string>) => {
      state.socials.connect = action.payload;
    },
  },
});

const { actions, reducer: profileReducer } = profileSlice;
export const {
  setProfilePic,
  setName,
  setConnect,
  setEmail,
  setGithub,
  setIntro,
  setLinkedin,
  setMedium,
  setPhone,
  setReddit,
  setStackOverflow,
} = actions;
export default profileReducer;
