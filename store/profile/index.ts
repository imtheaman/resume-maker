import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProfileState } from '../../vite-env';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    socials: {
      connect: '',
      email: '',
      github: '',
      linkedin: '',
      medium: '',
      phone :'',
      reddit: '',
      stackoverflow: ''
    }, 
    intro: '',
    name: '',
    profilePic: ''
  } as ProfileState,
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
      state.socials.github = action.payload;
    },
    setEmail: (state: ProfileState, action: PayloadAction<string>) => {
      state.socials.email = action.payload;
    },
    setStackOverflow: (state: ProfileState, action: PayloadAction<string>) => {
      state.socials.stackoverflow = action.payload;
    },
    setLinkedin: (state: ProfileState, action: PayloadAction<string>) => {
      state.socials.linkedin = action.payload;
    },
    setPhone: (state: ProfileState, action: PayloadAction<string>) => {
      state.socials.phone = action.payload;
    },
    setReddit: (state: ProfileState, action: PayloadAction<string>) => {
      state.socials.reddit = action.payload;
    },
    setMedium: (state: ProfileState, action: PayloadAction<string>) => {
      state.socials.medium = action.payload;
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
