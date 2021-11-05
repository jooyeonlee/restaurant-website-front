import { createAsyncThunk } from '@reduxjs/toolkit';
import { sendpayinfo, confirmorder, fetchOrders, addorderItem } from '../../apis/order';

export const sendOrderInfo = createAsyncThunk(
    'orders/sendOrderInfo',
    async({ cartAmount }, thunkAPI) => {
        try {
            const response = await sendpayinfo(cartAmount);
            return {
                secret: response
            }
        } catch(err) {
            throw err;
        }
    }
);

export const confirmOrder = createAsyncThunk(
    'orders/confirmOrder',
    async({ price, payId, userId }, thunkAPI) => {
        try {
            const response = await confirmorder(price, payId, userId);
            return {
                order: response
            }
        } catch(err) {
            throw err;
        }
    }
);

export const updateOrderItem = createAsyncThunk(
    'orders/updateOrderItem',
     async({orderId, menuId, qty, price}, thunkAPI) => {
        try {
            const response = await addorderItem(orderId, menuId, qty, price);
            return {
                orders: response
            }
        } catch(err) {
            throw err;
        }
    }
)

export const loadOrders = createAsyncThunk(
    'orders/loadOrders',
    async (userId, thunkAPI) => {
        try {
            const response = await fetchOrders(userId);
            return {
                orders: response
            }
        } catch(err) {
            throw err;
        }
    }
)