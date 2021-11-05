import { combineReducers } from "redux";
import cartReducer from './cart/Cart.reducers';
import productReducer from './product/Products.reducers';
import orderReducer from './orders/Orders.reducers';

export default combineReducers ({
    cart: cartReducer,
    products: productReducer,
    orders: orderReducer
});