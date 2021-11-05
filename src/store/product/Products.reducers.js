import { createSlice } from '@reduxjs/toolkit';
import { loadProduct, loadProductbyId } from './Products.actions';
import { createSelector } from 'reselect';

const initialState = {};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
        .addCase(loadProduct.fulfilled, (state, action) => {
            const { products } = action.payload;
            Object.values(products).forEach((product) => {
                const {id} = product;
                state[id] = product;
            });
        })
        .addCase(loadProductbyId.fulfilled, (state, action) => {
            const { product } = action.payload;
            state[product.id] = product;
        })
    }
});

export default productSlice.reducer;

export const selectItemByCategory = createSelector(
    [
        state => state.products,
        (state, category) => category
    ],
    (products, category) => Object.values(products).filter(product => product.category === category)
)