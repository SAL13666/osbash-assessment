import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'userData',
    initialState: {
        value: {
            score: 0,
            correctAnswers: [],
            incorrectAnswers: [],
        },
    },
    reducers: {
        incrementScore: (state, action) => {
            state.value.score += action.payload;
        },
        setCorrectAnswers: (state, action) => {
            state.value.correctAnswers.push(action.payload);
        },
        setIncorrectAnswers: (state, action) => {
            state.value.incorrectAnswers.push(action.payload);
        },
    },
})

export const { incrementScore, setCorrectAnswers, setIncorrectAnswers } = userSlice.actions;

export default userSlice.reducer