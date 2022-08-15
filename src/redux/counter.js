import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        userPoints: 0,
        computerPoints: 0
    },
    reducers: {
        increaseUserScore: (state) => {
            state.userPoints += 1;
        },
        increaseComputerScore: (state) => {
            state.computerPoints += 1;
        },
        resetScore: (state) => {
            state.userPoints = 0;
            state.computerPoints = 0;
        }
    }
});

export const { increaseUserScore, increaseComputerScore, resetScore } = counterSlice.actions;
export default counterSlice.reducer;