import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import announcementReducer from "./announcement";
import quizReducer from "./quiz";

const store = configureStore({
  reducer: {
    auth: authReducer,
    announcements: announcementReducer,
    quizzes: quizReducer,
  },
});

export default store;
