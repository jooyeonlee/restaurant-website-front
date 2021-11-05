import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProducts, fetchProductbyId } from '../../apis/product';

export const loadProduct = createAsyncThunk(
    'product/loadProduct',
    async(params, thunkAPI) => {
        try {
            const response = await fetchProducts();
            return {
                products: response
            }
        } catch(err) {
            throw err;
        }
    }
);

export const loadProductbyId = createAsyncThunk(
    'product/loadProductbyId',
    async(productId, thunkAPI) => {
        try {
            const response = await fetchProductbyId(productId);
            return {
                product: response
            }
        } catch(err) {
            throw err;
        }
    }
);
