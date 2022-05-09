import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const educationSlice = createSlice({
  name: "education",
  initialState: {
    beingUsed: false,
    heading: "Education",
  } as EducationState,
  reducers: {
    setBeingUsed: (state, action: PayloadAction<boolean>) => {
      state.beingUsed = action.payload;
    },
    setHeading: (state, action: PayloadAction<string>) => {
      state.heading = action.payload;
    },
    setCourse: (
      state,
      action: PayloadAction<{ eduId: string; course: string }>
    ) => {
      state.data[action.payload.eduId].course = action.payload.course;
    },
    setInstitute: (
      state,
      action: PayloadAction<{ eduId: string; institute: string }>
    ) => {
      state.data[action.payload.eduId].institute = action.payload.institute;
    },
    setFrom: (
      state,
      action: PayloadAction<{
        eduId: string;
        from: Period;
      }>
    ) => {
      state.data[action.payload.eduId].from = action.payload.from;
    },
    setTo: (
      state,
      action: PayloadAction<{
        eduId: string;
        to: Period;
      }>
    ) => {
      state.data[action.payload.eduId].to = action.payload.to;
    },
  },
});

const { reducer: educationsReducer, actions } = educationSlice;
export const { setBeingUsed, setCourse, setFrom, setHeading, setInstitute } =
  actions;
export default educationsReducer;
