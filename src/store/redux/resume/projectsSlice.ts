import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    beingUsed: true,
    heading: "Projects",
    data: [
      {
        name: "",
        from: { month: undefined, year: undefined },
        to: { month: undefined, year: undefined },
        description: { contents: [""] },
      },
    ],
  },
  reducers: {
    createProjectDesc: (
      state,
      action: PayloadAction<{ projectId: number }>
    ) => {
      const contents =
        state.data[action.payload.projectId].description.contents;
      if (contents.length === 1) contents.push("");
      else if (contents.at(-2)) contents.push("");
    },
    setProjectDesc: (
      state,
      action: PayloadAction<{
        projectId: number;
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
export const { createProjectDesc, setProjectDesc } = actions;
export default projectsReducer;
export type ProjectType = ReturnType<typeof projectsReducer>["data"][number];
