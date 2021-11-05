import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Header.css';
import Cart from '../../routes/Cart/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from '../../Firebase';
import { loadCart } from '../../store/cart/Cart.actions';


const Header = () => {
    const dispatch = useDispatch();
    const [cartShow, setCartShow] = useState(false);
    const { items } = useSelector(state => state.cart);
    const [user, loading, error] = useAuthState(auth);
    const [userState, setUserState] = useState(false);
    let history = useHistory();

    const totalCount = items.reduce((total, { quantity }) => {
            return total += quantity
        }, 0);

    useEffect(() => {
        if(user) {
            setUserState(true);
            dispatch(loadCart({uid: user.uid}));
        } else {
            setUserState(false);
        }
    }, [user]);

    const logoutCall = () => {
        logout();
        history.push('/');
    }


    return (
    <header className="section-header">
        <nav className="navbar navbar-expand-lg navbar-light py-5">
            <div className="container">
                <Link className="navbar-brand" to='/'>
                    <img src="https://restaurantproject-2021.s3.amazonaws.com/logo.jpg" alt=""/>
                </Link>
            </div>
            <button className="navbar-toggler navbar-toggler-left" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse w-100 order-1 order-md-0" id="navbarSupportedContent">
                <ul className="nav navbar-nav mr-auto navbar-center">
                    <li className="nav-item custom-nav-margin">
                        <Link className="nav-link active" aria-current="page"to='/'>Home</Link>
                    </li>
                    <li className="nav-item text-nowrap"><Link className="nav-link" to='/about'>About</Link></li>
                    <li className="nav-item text-nowrap"><Link className="nav-link" to={'/menu'}>Order</Link></li>
                    <li className="nav-item text-nowrap"><Link className="nav-link" to={'/reservation'}>Reservation</Link></li>
                    <li className="nav-item text-nowrap"><Link className="nav-link" to={'/contact'}>Contact</Link></li>
                </ul>
                <ul className="nav navbar-nav ml-auto navbar-right">
                    <li className="nav-item text-nowrap">
                        <button type="button" className="btn btn-secondary btn-default" onClick={()=>setCartShow(true)}>
                            <i className="fas fa-shopping-cart"></i>
                            <span className="name">Cart · {totalCount > 0 ? totalCount: 0}</span>
                        </button>
                        <Cart show={cartShow} onHide={()=>setCartShow(false)} />
                    </li>
                    <li className="nav-item text-nowrap">
                        {userState?
                        <button type="button" className="btn btn-secondary btn-grey" onClick={logoutCall}>Sign-out
                        </button>
                        :<Link type="button" className="btn btn-secondary btn-grey" to={'./login'}>Sign-in
                        </Link>
                        }   
                    </li>
                </ul> 
            </div>
        </nav>
        </header>
    )
}

export default Header;