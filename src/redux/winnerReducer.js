import { createSlice } from "@reduxjs/toolkit";

export const winnerSlice = createSlice({
    name: "winner",
    initialState: {
        winner: ''
    },
    reducers: {
        setWinner: (state, winner) => {
            state.winner = winner;
        },
        resetWinner: (state) => {
            state.winner = '';
        }
    }
});

export const { setWinner, resetWinner } = winnerSlice.actions;
export default winnerSlice.reducer;