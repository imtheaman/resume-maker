interface State {
  beingUsed: boolean;
  heading: string;
  data: [
    {
      position: string;
      company: string;
      from: { month: null | number; year: null | number };
      to: { month: null | number; year: null | number };
      location: string;
      description: {
        heading: string;
        contents: [string];
      };
    }
  ];
}

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const experiencesSlice = createSlice({
  name: "experiences",
  initialState: {
    beingUsed: true,
    heading: "Work Experience",
    data: [
      {
        from: { month: null, year: null },
        to: { month: null, year: null },
        description: {
          heading: "Achievements/Tasks",
        },
      },
    ],
  } as State,
  reducers: {
    createExpDesc: (state, action: PayloadAction<{ expId: number }>) => {
      const contents = state.data[action.payload.expId].description.contents;
      if (contents.length === 1) contents.push("");
      else if (contents.at(-2)) contents.push("");
    },
    setExpDesc: (
      state,
      action: PayloadAction<{ expId: number; descId: number; content: string }>
    ) => {
      state.data[action.payload.expId].description.contents[
        action.payload.descId
      ] = action.payload.content;
    },
    setFrom: (
      state,
      action: PayloadAction<{
        expId: number;
        from: { month: number; year: number };
      }>
    ) => {
      state.data[action.payload.expId].from = action.payload.from;
    },
    setTo: (
      state,
      action: PayloadAction<{
        expId: number;
        to: { month: number; year: number };
      }>
    ) => {
      state.data[action.payload.expId].to = action.payload.to;
    },
    setLocation: (
      state,
      action: PayloadAction<{ expId: number; location: string }>
    ) => {
      state.data[action.payload.expId].location = action.payload.location;
    },
  },
});

const { reducer: experiencesReducer, actions } = experiencesSlice;
export const { createExpDesc, setExpDesc, setFrom, setTo, setLocation } =
  actions;
export default experiencesReducer;
export type ExperienceType = ReturnType<
  typeof experiencesReducer
>["data"][number];
