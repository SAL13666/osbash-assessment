import { configureStore } from '@reduxjs/toolkit';
import quizReducer from "./Quiz/quizSlice";

export const store = configureStore({
    reducer: {
        quiz: quizReducer,
    },
})