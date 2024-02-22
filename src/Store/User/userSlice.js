import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'userData',
    initialState: {
        value: {
            score: 0,
            answers: {},
        },
    },
    reducers: {
        incrementScore: (state, action) => {
            state.value.score += action.payload;
        },
        setAnswers: (state, action) => {
            state.value.answers[action.payload.questionName] = action.payload.answer;
        },
    },
})

export const { incrementScore, setAnswers } = userSlice.actions;

export default userSlice.reducer