import axios from 'axios';

export const sendpayinfo = async (cartAmount) => {
    try {
        cartAmount = cartAmount.toFixed(2)*100
        const response = await axios.post(`https://osaka-sushi.herokuapp.com/pay`, { amount: cartAmount });
        return response.data;
    } catch (err) {
        throw err.response.data;
    }
}

export const confirmorder = async (price, payId, userId) => {
    try {
        const response = await axios.post(`https://osaka-sushi.herokuapp.com/api/addorder`, { userid: userId, status_id: 0, payment_id: payId, price: price});
        return response.data
    } catch (err) {
        throw err.response.data;
    }
}

export const addorderItem = async (orderId, menuId, qty, price) => {
    try {
        const response = await axios.post(`https://osaka-sushi.herokuapp.com/api/addorderitem`, { orderid: orderId, menuid: menuId, quantity: qty, price: price});
        return response.data
    } catch (err) {
        throw err.response.data;
    }
}

export const fetchOrders = async (userId) => {
    try {
        const response = await axios.get(`https://osaka-sushi.herokuapp.com/api/order/user/${userId}`);
        console.log("fetchOrders", response.data, userId);
        
        return response.data;
    } catch(err) {
        throw err.response.data;
    }
}