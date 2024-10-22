import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

//create slice
const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct(state, action) {
            state.push(action.payload)
        },
        removeProduct (state, action) {
            const removeIndex = action.payload
            return state.filter((value, index) => index !== removeIndex)
        }
    }
})

export const { addProduct, removeProduct } = productSlice.actions;
export default productSlice.reducer