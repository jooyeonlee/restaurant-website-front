import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Divider from '@material-ui/core/Divider';
import { auth } from '../../Firebase';
import { loadOrders } from '../../store/orders/Orders.actions';
import { useAuthState } from "react-firebase-hooks/auth";

const Orders = () => {

    const dispatch = useDispatch();
    const orders = useSelector(state => state.orders);
    const [user, loading, error] = useAuthState(auth);
    const [userState, setUserState] = useState(false);

    useEffect(() => {
        async function load() {
            await dispatch(loadOrders(user.uid));
        }
        if(user) {
            setUserState(true);
            load();
        } else {
            setUserState(false);
        }
    }, [user]);


    return (
        <div className="content">
            <div className="page-title border-top">
                <div className="container">
                    <div className="row text-center">
                        <h1 className="mb-0">Your Orders</h1>
                    </div>
                </div>
            </div>
            <div className="page-content">
                 <div className = "container">
                    <div className = "d-flex justify-content-center">
                        <div className="col-md-10">
                    <h6>{Object.keys(orders).length || 0} orders</h6>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Order ID</th>
                                <th scope="col">Order Date</th>
                                <th scope="col">Price</th>
                                <th scope="col">Payment ID</th>
                            </tr>
                            </thead>
                                <tbody>
                                    { orders && Object.keys(orders).length > 0 &&
                                        Object.keys(orders).map((key) => {
                                        const order = orders[key];
                                        console.log(order);
                                        return (
                                        <tr>
                                            <th scope="row">{order.id}</th>
                                            <td>{order.date_created}</td>
                                            <td>{order.price}</td>
                                            <td>{order.payment_id}</td>
                                        </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Orders
