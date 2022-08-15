import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter';
import winnerReducer from './winnerReducer';

export default configureStore({
    reducer: {
        counter: counterReducer,
        winner: winnerReducer,
    }
});