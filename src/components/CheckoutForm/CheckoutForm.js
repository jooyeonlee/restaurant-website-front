import React, { useState } from 'react';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { useDispatch, useSelector } from 'react-redux';
import './CheckoutForm.css';
import { confirmOrder, updateOrderItem } from '../../store/orders/Orders.actions';
import { auth } from '../../Firebase';
import { clearCart } from '../../store/cart/Cart.reducers';
import { useHistory } from 'react-router';

const CheckoutForm = (props) => {
    const stripe = useStripe();
    const elements = useElements();
    const { items } = useSelector(state => state.cart);
    const orders = useSelector(state => state.orders);

    const [errorMessage, setErrorMessage ] = useState(null);
    const [isPaymentLoading, setPaymentLoading] = useState(false);
    const [confirmNum, setconfirmNum] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setPaymentLoading(true);
    
        const response = await stripe.confirmPayment({
            elements,
            redirect: 'if_required' 
        });

        console.log(response);

        if (response['error'] != null) {
            setErrorMessage(response.error.message);
            setPaymentLoading(false);
        } else {
            setconfirmNum(response.paymentIntent.id); 
            confirmInfo();
        }
    };

    const confirmInfo = () =>{
        dispatch(confirmOrder({ price: props.amount, payId: confirmNum, userId: auth.currentUser.uid}));
        clearCart();
        history.push('/orders')
    };

    return (
        <div className="container">
            <div className="d-flex justify-content-center">
                <div className="col-lg-8 offset-lg-4 payment-wrap">
                    <form id="payment-form" onSubmit={handleSubmit}>
                        <PaymentElement id="payment-element" />
                        <button className="pay-button" id="submit" disabled={isPaymentLoading}>
                            {isPaymentLoading? "Loading..." : "Pay"}
                        </button>
                    </form>
                    {errorMessage ? 
                    <span>Payment is not completed. Please Try Again! {errorMessage}</span>:<span></span>
                    }
                </div>
            </div>
        </div>
    );
}

export default CheckoutForm;