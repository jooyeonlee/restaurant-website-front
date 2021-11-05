import React, { useState, useEffect } from 'react';
import './Menu.css';
import { useDispatch, useSelector } from 'react-redux';
import { loadProduct } from '../../store/product/Products.actions';
import { selectItemByCategory } from '../../store/product/Products.reducers';
import MenuDetail from '../../components/MenuDetail/MenuDetail';

const Menu = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products)
    const [modalShow, setModalShow] = useState(false);
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        async function load() {
            await dispatch(loadProduct())
        }
        load();
    }, [dispatch])

    const appetizers = useSelector(state => selectItemByCategory(state, "Appetizer"));
    const sushis = useSelector(state => selectItemByCategory(state, "Sushi and Sashimi"));
    const rolls = useSelector(state => selectItemByCategory(state, "Roll"));
    const soups = useSelector(state => selectItemByCategory(state, "Soup and Salad"));
    const entrees = useSelector(state => selectItemByCategory(state, "Kitchen Entree"));
    const desserts = useSelector(state => selectItemByCategory(state, "Dessert"));
    const sides = useSelector(state => selectItemByCategory(state, "Side Dish"));

    const open = (product) => {
        setSelected(product);
        setModalShow(true);
    }

    const close = () => {
        setSelected(null);
        setModalShow(false);
    }

    return (
        <div className="container-fluid" id="menu-list">
            <div className="page-title bg-light">
                <div className="container">
                    <div className="row justify-content-center text-center">
                            <h1>Menu List</h1>
                    </div>
                </div>
            </div>
            <div className="page-content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <nav id="menu-navigation" className="stick-to-content" data-local-scroll>
                                <ul className="nav nav-menu bg-dark dark">
                                    <li><a href="#Appetizer">Appetizer</a></li>
                                    <li><a href="#SushiSashimi">Sushi and Sashimi</a></li>
                                    <li><a href="#Roll">Roll</a></li>
                                    <li><a href="#SoupSalad">Soup and Salad</a></li>
                                    <li><a href="#Entree">Kitchen Entree</a></li>
                                    <li><a href="#Dessert">Dessert</a></li>
                                    <li><a href="#Side">Side Dish</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-md-9">
                            <div id="Appetizer" className="product-category">
                                <div className="menu-category-title">
                                    <div className="menu-bg-image"><img className="img-fluid" src="https://restaurantproject-2021.s3.amazonaws.com/Hamachi-Carpaccio.jpg" alt=""/></div>
                                    <h2 className="menu-title">Appetizer</h2>
                                </div>
                                <div className="menu-category-content">
                                {appetizers && Object.keys(appetizers).length > 0 && 
                                Object.keys(appetizers).map((key) => {
                                const appetizer = appetizers[key];
                                    return (
                                    <div className="menu-item menu-list-item">
                                        <div className="row align-items-center">
                                            <div className="col-sm-6 mb-2 mb-sm-0">
                                                <h6 className="mb-0">{appetizer.name}</h6>
                                                <span className="text-muted text-sm">{appetizer.description}</span>
                                            </div>
                                            <div className="col-sm-6 text-sm-right">
                                                <span className="text-md mr-4">${appetizer.price}</span>
                                                <button className="btn btn-outline-secondary btn-sm" onClick={()=>open(appetizer)}><span>Add to cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    );
                                })}
                                </div>
                            </div>
                            <div id="SushiSashimi" className="product-category">
                                <div className="menu-category-title">
                                    <div className="menu-bg-image"><img className="img-fluid" src="https://restaurantproject-2021.s3.amazonaws.com/sushi3.jpg" alt=""/></div>
                                    <h2 className="menu-title">Sushi and Sasimi</h2>
                                </div>
                                <div className="menu-category-content">
                                {sushis && Object.keys(sushis).length > 0 && 
                                Object.keys(sushis).map((key) => {
                                const sushi = sushis[key];
                                    return (
                                    <div className="menu-item menu-list-item">
                                        <div className="row align-items-center">
                                            <div className="col-sm-6 mb-2 mb-sm-0">
                                                <h6 className="mb-0">{sushi.name}</h6>
                                                <span className="text-muted text-sm">{sushi.description}</span>
                                            </div>
                                            <div className="col-sm-6 text-sm-right">
                                                <span className="text-md mr-4">${sushi.price}</span>
                                                <button className="btn btn-outline-secondary btn-sm" onClick={()=>open(sushi)}><span>Add to cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    );
                                })}
                                </div>
                            </div>
                            <div id="Roll" className="product-category">
                                <div className="menu-category-title">
                                    <div className="menu-bg-image"><img className="img-fluid" src="https://restaurantproject-2021.s3.amazonaws.com/roll1.jpg" alt=""/></div>
                                    <h2 className="menu-title">Roll</h2>
                                </div>
                                <div className="menu-category-content">
                                {rolls && Object.keys(rolls).length > 0 && 
                                Object.keys(rolls).map((key) => {
                                const roll = rolls[key];
                                    return (
                                    <div className="menu-item menu-list-item">
                                        <div className="row align-items-center">
                                            <div className="col-sm-6 mb-2 mb-sm-0">
                                                <h6 className="mb-0">{roll.name}</h6>
                                                <span className="text-muted text-sm">{roll.description}</span>
                                            </div>
                                            <div className="col-sm-6 text-sm-right">
                                                <span className="text-md mr-4">${roll.price}</span>
                                                <button className="btn btn-outline-secondary btn-sm" onClick={()=>open(roll)}><span>Add to cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    );
                                })}
                                </div>
                            </div>
                            <div id="SoupSalad" className="product-category">
                                <div className="menu-category-title">
                                    <div className="menu-bg-image"><img className="img-fluid" src="https://restaurantproject-2021.s3.amazonaws.com/salad.jpg" alt=""/></div>
                                    <h2 className="menu-title">Soup and Salad</h2>
                                </div>
                                <div className="menu-category-content">
                                {soups && Object.keys(soups).length > 0 && 
                                Object.keys(soups).map((key) => {
                                const soup = soups[key];
                                    return (
                                    <div className="menu-item menu-list-item">
                                        <div className="row align-items-center">
                                            <div className="col-sm-6 mb-2 mb-sm-0">
                                                <h6 className="mb-0">{soup.name}</h6>
                                                <span className="text-muted text-sm">{soup.description}</span>
                                            </div>
                                            <div className="col-sm-6 text-sm-right">
                                                <span className="text-md mr-4">${soup.price}</span>
                                                <button className="btn btn-outline-secondary btn-sm" onClick={()=>open(soup)}><span>Add to cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    );
                                })}
                                </div>
                            </div>
                            <div id="Entree" className="product-category">
                                <div className="menu-category-title">
                                    <div className="menu-bg-image"><img className="img-fluid" src="https://restaurantproject-2021.s3.amazonaws.com/katsu.jpg" alt=""/></div>
                                    <h2 className="menu-title">Kitchen Entree</h2>
                                </div>
                                <div className="menu-category-content">
                                {entrees && Object.keys(entrees).length > 0 && 
                                Object.keys(entrees).map((key) => {
                                const entree = entrees[key];
                                    return (
                                    <div className="menu-item menu-list-item">
                                        <div className="row align-items-center">
                                            <div className="col-sm-6 mb-2 mb-sm-0">
                                                <h6 className="mb-0">{entree.name}</h6>
                                                <span className="text-muted text-sm">{entree.description}</span>
                                            </div>
                                            <div className="col-sm-6 text-sm-right">
                                                <span className="text-md mr-4">${entree.price}</span>
                                                <button className="btn btn-outline-secondary btn-sm" onClick={()=>open(entree)}><span>Add to cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    );
                                })}
                                </div>
                            </div>
                            <div id="Dessert" className="product-category">
                                <div className="menu-category-title">
                                    <div className="menu-bg-image"><img className="img-fluid" src="https://restaurantproject-2021.s3.amazonaws.com/mochi3.png" alt=""/></div>
                                    <h2 className="menu-title">Dessert</h2>
                                </div>
                                <div className="menu-category-content">
                                {desserts && Object.keys(desserts).length > 0 && 
                                Object.keys(desserts).map((key) => {
                                const dessert = desserts[key];
                                    return (
                                    <div className="menu-item menu-list-item">
                                        <div className="row align-items-center">
                                            <div className="col-sm-6 mb-2 mb-sm-0">
                                                <h6 className="mb-0">{dessert.name}</h6>
                                                <span className="text-muted text-sm">{dessert.description}</span>
                                            </div>
                                            <div className="col-sm-6 text-sm-right">
                                                <span className="text-md mr-4">${dessert.price}</span>
                                                <button className="btn btn-outline-secondary btn-sm" onClick={()=>open(dessert)}><span>Add to cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    );
                                })}
                                </div>
                            </div>
                            <div id="Side" className="product-category">
                                <div className="menu-category-title">
                                    <div className="menu-bg-image"><img className="img-fluid" src="https://restaurantproject-2021.s3.amazonaws.com/sauce.jpg" alt=""/></div>
                                    <h2 className="menu-title">Side Dish</h2>
                                </div>
                                <div className="menu-category-content">
                                {sides && Object.keys(sides).length > 0 && 
                                Object.keys(sides).map((key) => {
                                const side = sides[key];
                                    return (
                                    <div className="menu-item menu-list-item">
                                        <div className="row align-items-center">
                                            <div className="col-sm-6 mb-2 mb-sm-0">
                                                <h6 className="mb-0">{side.name}</h6>
                                                <span className="text-muted text-sm">{side.description}</span>
                                            </div>
                                            <div className="col-sm-6 text-sm-right">
                                                <span className="text-md mr-4">${side.price}</span>
                                                <button className="btn btn-outline-secondary btn-sm" onClick={()=>open(side)}><span>Add to cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    );
                                })}
                                </div>
                            </div>
                            <MenuDetail show={modalShow} onHide={()=>close()} data={selected} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;