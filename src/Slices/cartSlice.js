import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            state.push(action.payload)
            localStorage.setItem('products', JSON.stringify(state))
        },
        removeFromCart(state, action) {
            const newState = state.filter((item) => item.name !== action.payload.name)
            localStorage.setItem('products', JSON.stringify(newState))
            return newState;
        }
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;