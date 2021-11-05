import { createSlice } from '@reduxjs/toolkit';
import { auth, database } from '../../Firebase';
import { ref, set } from 'firebase/database';
import { loadCart } from './Cart.actions';


const initialState = {
    items: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, { payload }) => {
            const itemIndex = state.items.findIndex((menu) => menu.product.id === payload.product.id);
            if(itemIndex >= 0) {
                state.items[itemIndex].quantity += payload.quantity;
                console.log(state);
            }
            else {
                    state.items.push(payload);
            } 
            
            if(auth.currentUser) {
                let uid = auth.currentUser.uid;
                set(ref(database, `carts/${uid}`), state.items)
            }
        },
        removeItem: (state, { payload }) => {
            console.log(payload, payload.product.id)
            const nextCartItems = state.items.filter(item => item.product.id !== payload.product.id);
            state.items = nextCartItems;

            if(auth.currentUser) {
                let uid = auth.currentUser.uid;
                set(ref(database, `carts/${uid}`), state.items)
            }
        },
        clearCart: (state, action) => {
            state.items = {}
            console.log("clearCart")

            if(auth.currentUser) {
                console.log("current user exist", state.item)
                let uid = auth.currentUser.uid;
                set(ref(database, `carts/${uid}`), state.items)
            }
        }
    },
    extraReducers: builder => {
        builder
        .addCase(loadCart.fulfilled, (state, action) => {
            if(action.payload){
                state.items = action.payload;
            } else {
                set(ref(database, `carts/${auth.currentUser.uid}`), state.items)
            }
        })
    }
});

export const cartItems = (state) => state.cart.items;

export const {
    addToCart,
    removeItem,
    clearCart
} = cartSlice.actions;

export default cartSlice.reducer;