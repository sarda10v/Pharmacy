import { configureStore } from "@reduxjs/toolkit";
import { pharmacysReducer } from "../features/pharmacysReducer";


export const store = configureStore({
    reducer: {
        pharmacysReducer: pharmacysReducer
    },
})