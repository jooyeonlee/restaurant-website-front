import React, { useState, useEffect } from 'react';
import Modal from "react-bootstrap/Modal";
import Accordion from "react-bootstrap/Accordion";
import FormControl from "react-bootstrap/FormControl";
import "bootstrap/dist/css/bootstrap.min.css";
import './MenuDetail.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/cart/Cart.reducers';
import Incrementer from  '../Incrementer/Incrementer';


const MenuDetail = (props) => {

    const [ quantity, setQuantity ] = useState(1);
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const products = useSelector(state => state.products);

    useEffect(() => {
        setQuantity(1);
    }, [props.onHide]);

    let name = null;
    let description = null;
    let price = null;
    let id = null;
    let product = null;

    if(props.data != null) {
        name = props.data.name;
        description = props.data.description;
        price = props.data.price;
        id = props.data.id;
        console.log(name, id)
        product = products[id];
    }

    function handleIncrement() {
        setQuantity(quantity + 1);
    }

    function handleDecrement() {
        if (quantity === 1) {
            return;
        }
        setQuantity(quantity - 1);
    }

    async function handleAddToCart() {
        console.log(props.data);
        dispatch(addToCart({product, quantity}));
    }

    console.log("modal")
    return (
        <Modal {...props} area-labelledby="contained-modal-title-vcenter" centered dialogClassName="modal-90w" animation="true">
            <Modal.Header closeButton className="modal-header">
                <Modal.Title><h4>Specify your dish</h4></Modal.Title>
            </Modal.Header>
            <Modal.Body as="section" className="modal-body">
                <div className="container-fluid modal-menu-detail">
                    <div className="row align-items-center">
                        <div className="col-9">
                            <h6 className="mb-1 menu-modal-name"><strong>{name}</strong></h6>
                            <span className="text-muted menu-modal-ingredients">{description}</span>
                        </div>
                        <div className="col-3 text-lg text-right">{price}$<span className="menu-modal-price"></span></div>
                    </div>
                </div>
                <div className="modal-body panel-details-container">
                    <Accordion flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Additions</Accordion.Header>
                            <Accordion.Body>
                                <div className="custom-control custom-checkbox">
                                    <input className="custom-control-input" type="checkbox" value="" id="defaultCheck1"/>
                                    <label className="custom-control-label" for="defaultCheck1"> Side Sushi Sauce ($0.25)</label>
                                </div>
                                <div className="custom-control custom-checkbox">
                                    <input className="custom-control-input" type="checkbox" value="" id="defaultCheck2"/>
                                    <label className="custom-control-label" for="defaultCheck2">Side Spicy Mayo ($0.25)</label>
                                </div>
                                <div className="custom-control custom-checkbox">
                                    <input className="custom-control-input" type="checkbox" value="" id="defaultCheck3"/>
                                    <label className="custom-control-label" for="defaultCheck3">Side Wasabi ($0.25)</label>
                                </div>
                                <div className="custom-control custom-checkbox">
                                    <input className="custom-control-input" type="checkbox" value="" id="defaultCheck4"/>
                                    <label className="custom-control-label" for="defaultCheck4">Side Eel Sauce ($0.25)</label>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Others</Accordion.Header>
                            <Accordion.Body>
                                <FormControl as="textarea" area-label="Request" placeholder="Put this any other request"/>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div className="incrementer-container">
                    <Incrementer
                        onDecrement={handleDecrement}
                        onIncrement={handleIncrement}
                        value={quantity}
                    />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button type="button" className="modal-btn btn btn-secondary btn-block btn-lg" onClick={handleAddToCart}>Add Cart</button>
            </Modal.Footer>
        </Modal>
    );
}

export default MenuDetail;