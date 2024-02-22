import { configureStore } from '@reduxjs/toolkit';
import quizReducer from "./Quiz/quizSlice";
import userReducer from "./User/userSlice";
export const store = configureStore({
    reducer: {
        quiz: quizReducer,
        userData: userReducer,
    },
})