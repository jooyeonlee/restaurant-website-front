import React, {useState, useEffect} from 'react';
import Offcanvas from "react-bootstrap/Offcanvas";
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../../store/cart/Cart.reducers';
import './Cart.css';
import Button from 'react-bootstrap/Button';
import { sendOrderInfo } from '../../store/orders/Orders.actions';
import { auth } from '../../Firebase';
import { useAuthState } from "react-firebase-hooks/auth";

const Cart = (props) => {

    const { items } = useSelector(state => state.cart);
    const dispatch = useDispatch();
    let history = useHistory();
    const [user, loading, error] = useAuthState(auth);
    const [userState, setUserState] = useState(false);

    function calculateTotal() {
        return items.reduce((total, item) => {
            return total += item.product.price * item.quantity
        }, 0)
    }

    let total = calculateTotal();
    let tax = total * 0.1175;
    let grandtotal = total + tax;

    async function handleRemoveFromCart(product) {
        dispatch(removeItem(product));
    }

    async function getIntent() {
        await dispatch(sendOrderInfo({cartAmount:grandtotal}));
        history.push("/checkout");
    }

    useEffect(() => {
        if(user) {
            setUserState(true);
        } else {
            setUserState(false);
        }
    }, [user]);

    return (
        <div className="panel-cart-container">
            <Offcanvas {...props} placement={'end'}>
                <Offcanvas.Header closeButton>
                    <div className="container-fluid panel-cart-header">
                        <Offcanvas.Title id="cart-title">Your Cart</Offcanvas.Title>
                    </div>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="panel-cart-content">
                        <table className="cart-table">
                            {items && Object.keys(items).length > 0 && Object.keys(items).map((key) => {
                            const item = items[key];
                            console.log(item.product)
                            return (
                            <tr>
                                <td className="title">
                                    <span className="name">{item.product.name}</span>
                                    <span className="caption text-muted">{item.quantity}</span>
                                </td>
                                <td className="price">${item.product.price}</td>
                                <td className="actions">
                                    <a className="action-icon"><i className="fas fa-pencil-alt"></i></a>
                                    <a className="action-icon" onClick={()=>handleRemoveFromCart(item)}><i className="fas fa-times"></i></a>
                                </td>
                            </tr>
                            );
                            })}
                        </table>
                        <div className="cart-summary">
                            <div className="row">
                                <div className="col-7 text-right text-muted">Order total:</div>
                                <div className="col-5"><strong>$<span className="cart-product-total">{calculateTotal()}</span></strong></div>
                            </div>
                            <div className="row">
                                <div className="col-7 text-right text-muted">Tax:</div>
                                <div className="col-5"><strong>$<span className="cart-tax">{parseFloat(tax).toFixed(2)}</span></strong></div>
                            </div>
                            <hr className="hr-sm" />
                            <div className="row text-lg">
                                <div className="col-7 text-right text-muted">Total:</div>
                                <div className="col-5"><strong>$<span className="cart-total">{parseFloat(grandtotal).toFixed(2)}</span></strong></div>
                            </div>
                        </div>
                    </div>
                    {userState && grandtotal > 0 ?
                    <Button className="panel-cart-action btn btn-block btn-lg"
                        variant="secondary"
                        onClick={()=>getIntent()}
                    >
                        <span>Go to Checkout</span>
                    </Button>
                    : grandtotal == 0?
                    <Button className="panel-cart-action btn btn-block btn-lg"
                    variant="secondary"
                    disabled="true"
                    >
                    <span>Go to Checkout</span>
                    </Button>
                    : 
                    <Button className="panel-cart-action btn btn-block btn-lg"
                    variant="secondary"
                    onClick={()=>history.push("/login")}
                    > 
                    <span>Need to Sign-in</span>
                    </Button>
                    }
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}

export default Cart;