import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    testState: "mock",
    questions: [],
    currentIndex: 0,
    regAns: {},
    correctAns: 0,
    wrongAns: 0,
    pass: false,
    fail: false,
    correctAnsList: {},
    wrongAnsList: {},
    notAnswerList: {},
  },
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setTestState: (state, action) => {
      state.value.testState = action.payload;
    },
    setQuestions: (state, action) => {
      state.value.questions = action.payload;
    },
    next: (state) => {
      state.value.currentIndex += 1;
    },
    prev: (state) => {
      state.value.currentIndex -= 1;
    },
    setRegAns: (state, action) => {
      // register ans
      const { value, currentQues } = action.payload;
      let obj = {};
      obj[currentQues] = value;
      if (obj[currentQues]) {
        let tempRegAns = state.value.regAns;
        tempRegAns[currentQues] = obj[currentQues];
        state.value.regAns = tempRegAns;
      } else {
        state.value.regAns = {
          ...state.value.regAns,
          ...obj,
        };
        state.value.notAnswerList = {
          ...state.value.notAnswerList,
          quesId: currentQues,
        };
      }
    },
    setCorrectAns: (state, action) => {
      state.value.correctAns = action.payload;
      // it will update
      action.payload >= 43
        ? (state.value.pass = true)
        : (state.value.fail = true);
    },
    setWrongAns: (state, action) => {
      state.value.wrongAns = action.payload;
    },
    setCorrectAnsList: (state, action) => {
      const { quesId, ans } = action.payload;
      let obj = {};
      obj[quesId] = ans;
      if (obj[quesId]) {
        let tempCorrectAnsList = state.value.correctAnsList;
        tempCorrectAnsList[quesId] = obj[quesId];
        state.value.correctAnsList = tempCorrectAnsList;
      } else {
        state.value.correctAnsList = {
          ...state.value.correctAnsList,
          ...obj,
        };
      }
    },
    setWrongAnsList: (state, action) => {
      const { quesId, ans } = action.payload;
      let obj = {};
      obj[quesId] = ans;
      if (obj[quesId]) {
        let tempWrongAnsList = state.value.wrongAnsList;
        tempWrongAnsList[quesId] = obj[quesId];
        state.value.wrongAnsList = tempWrongAnsList;
      } else {
        state.value.wrongAnsList = {
          ...state.value.wrongAnsList,
          ...obj,
        };
      }
    },
    resetQuiz: (state) => {
      state.value = {
        ...state.value,
        currentIndex: 0,
        regAns: {},
        correctAns: 0,
        wrongAns: 0,
        pass: false,
        fail: false,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setTestState,
  setQuestions,
  next,
  prev,
  setRegAns,
  setIsfirstQues,
  setIslastQues,
  setCorrectAns,
  setWrongAns,
  resetQuiz,
  setCorrectAnsList,
  setWrongAnsList,
} = quizSlice.actions;

export default quizSlice.reducer;
