import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    questionsDB: [],
    videoQuestionsDB: [],
    hazardQuestionsDB: [],
  },
};

export const dbSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setQuestionsDB: (state, action) => {
      state.value.questionsDB = action.payload;
    },
    setVideoQuestionsDB: (state, action) => {
      state.value.videoQuestionsDB = action.payload;
    },
    setHazardQuestionsDB: (state, action) => {
      state.value.videoQuestionsDB = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setQuestionsDB, setVideoQuestionsDB, setHazardQuestionsDB } =
  dbSlice.actions;

export default dbSlice.reducer;
