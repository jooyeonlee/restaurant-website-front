import { createSlice } from '@reduxjs/toolkit';
import { sendOrderInfo, loadOrders, confirmOrder, updateOrderItem } from './Orders.actions';

const initialState = {
    orders: [],
}

const orderSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
        .addCase(sendOrderInfo.fulfilled, (state, action) => {
            const key = action.payload;
            console.log(key.secret.client_secret);
            state.secret = key.secret.client_secret
        })
        .addCase(confirmOrder.fulfilled, (state, action) => {
            console.log(action.payload)
            state.confirmOrder = action.payload
            console.log(state.confirmOrder)
        })
        .addCase(updateOrderItem.fulfilled, (state, action) => {

        })
        .addCase(loadOrders.fulfilled, (state, action) => {
            const { orders } = action.payload;
            console.log(orders)
            console.log(action.payload)
            Object.values(orders).forEach(order => {
                const {id} = order;
                state[id] = order;
            })
        })
    }
})

export default orderSlice.reducer;
