import { configureStore } from "@reduxjs/toolkit";
import  productReducer from "./productSlice";
import cartReducer from "./cartSlice";

export const store = configureStore({
    devTools: false,
    reducer: {
        products : productReducer,
        cart : cartReducer
    }
})