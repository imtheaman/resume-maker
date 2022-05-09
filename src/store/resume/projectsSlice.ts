import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    beingUsed: false,
    heading: "Projects"
  } as ProjectState,
  reducers: {
    setBeingUsed: (state, action: PayloadAction<boolean>) => {
      state.beingUsed = action.payload;
    },
    setHeading: (state, action: PayloadAction<string>) => {
      state.heading = action.payload;
    },
    createProjectDesc: (
      state,
      action: PayloadAction<{ projectId: string }>
    ) => {
      const contents =
        state.data[action.payload.projectId].description.contents;
      if (contents.length === 1) contents.push("");
      else if (contents.at(-2)) contents.push("");
    },
    setProjectDesc: (
      state,
      action: PayloadAction<{
        projectId: string;
        descId: number;
        content: string;
      }>
    ) => {
      state.data[action.payload.projectId].description.contents[
        action.payload.descId
      ] = action.payload.content;
    },
  },
});

const { reducer: projectsReducer, actions } = projectsSlice;
export const { setBeingUsed, createProjectDesc, setProjectDesc } = actions;
export default projectsReducer;
export type ProjectType = ReturnType<typeof projectsReducer>["data"][number];
