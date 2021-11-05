import React, { useEffect } from 'react';
import './Home.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';

const Home = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2
                }
            },
            {   breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    return (
    //contents
    <section id="hero-section" className="mb-3 section-main bg-dark dark">
        <div className="carousel slide" data-ride="carousel" id="hero">
            <ol className="carousel-indicators">
                <li data-target="#hero" data-slide-to="0" className="active"></li>
                <li data-target="#hero" data-slide-to="1"></li>
                <li data-target="#hero" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://restaurantproject-2021.s3.amazonaws.com/slider10.jpg" className="img-fluid zomming" alt="First Slide" />
                    <div className="carousel-content">
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://restaurantproject-2021.s3.amazonaws.com/slider2.jpg" className="img-fluid zooming" alt="Second Slide" />
                    <div className="carousel-content">
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://restaurantproject-2021.s3.amazonaws.com/slider9.jpg" className="img-fluid zooming" alt="Third Slide" />
                    <div className="carousel-content">
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#hero" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </a>
            <a className="carousel-control-next" href="#hero" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </a>
        </div>
        <div className="row ml-5 bg-dark dark" id="about">
            <div className="image left col-md-6" id="chef-img">
                <div className="bg-image"><img src="https://restaurantproject-2021.s3.amazonaws.com/chef2.jpg" alt="" /></div>
            </div>
            <div className="col-lg-5 col-lg-offset-7 col-md-9 offset-md-6" id="about-text">
                <div className="rate mb-5 rate-lg"><span className="bi bi-star-fill checked"></span><span className="bi bi-star-fill checked"></span><span className="bi bi-star-fill checked"></span><span className="bi bi-star-fill checked"></span><span className="bi bi-star checked"></span></div>
                <h1>The best sushi in Chicago!</h1>
                <p className="lead text-muted mb-5">Osaka Sushi is incredibly proud of the dishes we serve and the ingredients we make them with.</p>
                <div className="blockquotes">
                    <blockquote className="blockquote light animated" data-animation="fadeInLeft">
                        <div className="blockquote-content">
                            <div className="rate rate-sm mb-3"><i className="bi bi-star-fill checked"></i><i className="bi bi-star-fill checked"></i><i className="bi bi-star-fill checked"></i><i className="bi bi-star-fill checked"></i><i className="bi bi-star-fill checked"></i></div>
                            <p>Favorite sushi restaurant in Mundelein!</p>
                        </div>
                        <footer>
                            <img src="https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-1.jpg" alt="" />
                            <span className="name">John Carter<span className="text-muted">, Google</span></span>
                        </footer>
                    </blockquote>
                    <blockquote className="blockquote animated2" data-animation="fadeInRight" data-animation-delay="300">
                        <div className="blockquote-content dark">
                            <div className="rate rate-sm mb-3"><i className="bi bi-star-fill checked"></i><i className="bi bi-star-fill checked"></i><i className="bi bi-star-fill checked"></i><i className="bi bi-star-fill checked"></i><i className="bi bi-star-fill checked"></i></div>
                                <p>If I could give this restaurant a 100 stars, I would!!</p>
                        </div>
                        <footer>
                            <img src="https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-4.jpg" alt="" />
                            <span className="name">Sylvia K.<span className="text-muted">, Yelp</span></span>
                        </footer>
                    </blockquote>
                </div>
            </div>
        </div>
        <div className="container-fluid" id="menu-category-container">
            <div className="container text-center">
                <h1 className="menu-title">Our Menu</h1>
            </div>
            <Slider {...settings} className="menu-category-carousel carousel inner-controls">
                <div className="menu-category">
                    <Link to='/menu/#SushiSashimi'>
                    <img className="img-fluid" src="https://restaurantproject-2021.s3.amazonaws.com/sushi.jpg" />
                    <h3 className="title">Sushi</h3>
                    </Link>
                </div>
                <div className="menu-category">
                    <Link to='/menu/#Roll'>
                    <img className="img-fluid" src="https://restaurantproject-2021.s3.amazonaws.com/maki2.jpg" />
                    <h3 className="title">Roll</h3>
                    </Link>
                </div>
                <div className="menu-category">
                    <Link to='/menu/#Appetizer'>
                    <img className="img-fluid" src="https://restaurantproject-2021.s3.amazonaws.com/oyster.png" />
                    <h3 className="title">Appetizer</h3>
                    </Link>
                </div>
                <div className="menu-category">
                    <Link to='/menu/#Entree'>
                    <img className="img-fluid" src="https://restaurantproject-2021.s3.amazonaws.com/udon2.jpg" />
                    <h3 className="title">Entree</h3>
                    </Link>
                </div>
                <div className="menu-category">
                    <Link to='/menu/#Dessert'>
                    <img className="img-fluid" src="https://restaurantproject-2021.s3.amazonaws.com/mochi2.jpg" />
                    <h3 className="title">Dessert</h3>
                    </Link>
                </div>
            </Slider>
        </div>
        <div className="container bg-dark dark">

        </div>
        <div className="container-fluid" id="promocontainer">
            <div className="bg-fixed container-fluid">
                <div className="container contentpromo">
                    <div class="row">
                        <div class="col-md-6 offset-md-3">
                            <h4 className="tastetext">Taste it now with our online order!</h4>
                            <div className="button-center">
                            <Link to='/menu' className="button"><span></span><span></span><span></span><span></span>Order now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Home;