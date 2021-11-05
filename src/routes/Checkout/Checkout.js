import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../../components/CheckoutForm/CheckoutForm';


const Checkout = () => {
    const stripePromise = loadStripe('pk_test_51JpEZnHeLj2DxbR7YNcuCbxIHHMjf446gKfpgV3AgOhWogMq29Gx4zk1YrxkY0UFGsidXZhToQlXd5BbSrplAF0P00zet1kKzo');
    const { items } = useSelector(state => state.cart);

    let totalAmount = items.reduce((total, item) => {
        return total += item.product.price * item.quantity
    }, 0)
    let grandTotal = totalAmount + totalAmount * 0.1175;

    const payment = useSelector(state => state.orders)
    console.log(payment.secret)

    //Stripe
    const options = {
        // passing the client secret obtained in step 2
        clientSecret: payment.secret,
        // Fully customizable with appearance API.
        appearance: {
            theme: 'stripe',
            variables: {
                colorPrimary: '#0570de',
                colorBackground: '#ffffff',
                colorText: '#30313d',
                colorDanger: '#df1b41',
                fontFamily: 'Ideal Sans, system-ui, sans-serif',
                spacingUnit: '2px',
                borderRadius: '4px',
            }
        },
    };

    return (
        <div className="content">
            <div className="page-title bg-light" id="checkout-title">
                <div className="container">
                    <div className="d-flex justify-content-center">
                        <div className="text-center">
                            <h1 className="mb-0">Check Out</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-content">
                <Elements stripe={stripePromise} options={options}>
                    <div style={{display: 'flex', backgroundColor: 'white'}}>
                        <CheckoutForm amount={totalAmount}/>
                    </div>
                </Elements>
            </div>
        </div>
    )
}

export default Checkout;