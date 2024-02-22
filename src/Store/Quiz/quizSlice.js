import { createSlice } from '@reduxjs/toolkit'

export const quizSlice = createSlice({
    name: 'quiz',
    initialState: {
        value: {},
    },
    reducers: {
        setData: (state, action) => {
            state.value = action.payload;
        }
    },
})

export const { setData } = quizSlice.actions;

export default quizSlice.reducer