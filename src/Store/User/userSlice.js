import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'userData',
    initialState: {
        value: {
            score: 0,
            answers: {},
            correctAnswers: [],
            incorrectAnswers: [],
        },
    },
    reducers: {
        incrementScore: (state, action) => {
            state.value.score += action.payload;
        },
        setAnswers: (state, action) => {
            state.value.answers[action.payload.questionName] = action.payload.answer;
        },
        pushToCorrectAnswers: (state, action) => {
            state.value.correctAnswers.push(action.payload);
        },
        pushToIncorrectAnswers: (state, action) => {
            state.value.incorrectAnswers.push(action.payload);
        },
    },
})

export const { incrementScore, setAnswers, pushToCorrectAnswers, pushToIncorrectAnswers } = userSlice.actions;

export default userSlice.reducer