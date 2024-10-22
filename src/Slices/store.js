import { configureStore } from "@reduxjs/toolkit";
import  productReducer from "./productSlice";

export const store = configureStore({
    devTools: false,
    reducer: {
        products : productReducer
    }
})