import { getDefaultMiddleware, configureStore } from "@reduxjs/toolkit";
import appRecuder from "./appSlice";
import quizReducer from "./components/quiz/quizSlice";
import dbReducer from "./dbSlice";

export const store = configureStore({
  reducer: {
    app: appRecuder,
    quiz: quizReducer,
    db: dbReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
