import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        userPoints: 0,
        computerPoints: 0
    },
    reducers: {
        increaseScore: (state, type) => {
            type === 'X' ?
                state.userPoints += 1 :
                state.computerPoints += 1;
        },
        resetScore: (state) => {
            state.userPoints = 0;
            state.computerPoints = 0;
        }
    }
});

export const { increaseScore,resetScore } = counterSlice.actions;
export default counterSlice.reducer;