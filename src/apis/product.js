import axios from 'axios';

export const fetchProducts = async() => {
    try{
        const response = await axios.get(`https://osaka-sushi.herokuapp.com/api/menus`);

        return response.data;

    } catch (err){
        throw err.response.data;
    }
}

export const fetchProductbyId = async(productId) => {
    try{
        const response = await axios.get(`https://osaka-sushi.herokuapp.com/api/menu/${productId}`);

        return response.data;
    } catch (err){
        throw err.response.data;
    }
}