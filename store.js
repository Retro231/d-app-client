import { getDefaultMiddleware, configureStore } from "@reduxjs/toolkit";

import quizReducer from "./components/quiz/quizSlice";
import authReducer from "./components/auth/authSlice";
import dbReducer from "./dbSlice";

export const store = configureStore({
  reducer: {
    quiz: quizReducer,
    db: dbReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
