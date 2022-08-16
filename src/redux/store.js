import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './scoreCounter';
import winnerReducer from './winnerReducer';

export default configureStore({
    reducer: {
        counter: counterReducer,
        winner: winnerReducer,
    }
});