import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

//create slice
const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct(state, action) {
            state.push(action.payload);
            localStorage.setItem('products', JSON.stringify(state))
        },
        removeProduct (state, action) {
            const removeIndex = action.payload
            const newState = state.filter((value, index) => index !== removeIndex)
            localStorage.setItem('products', JSON.stringify(newState))
            return newState;
        }
    }
})

export const { addProduct, removeProduct, addToCart, removeFromCart } = productSlice.actions;
export default productSlice.reducer