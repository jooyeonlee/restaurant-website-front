import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="container-fluid mb-3 section-main bg-dark dark">
            <footer className="footer">
            <div className="container">
                <div className="row border-bottom mb-5 pb-4 align-items-center">
                    <div className="col-sm-8 mb-md-0 mb-4">
                        <h2 className="logo">Osaka Sushi</h2>
                    </div>
                    <div className="col-sm-4 mb-md-0 mb-4 text-md-right">
                        <ul className="footer-social p-0 mb-0">
                            <li className="social"><a href='https://www.facebook.com/osakasushimundelein' data-toggle="tooltip" data-placement="top" title="Facebook"><span class="fab fa-facebook-f"></span></a></li>
                            <li className="social"><a href='https://foursquare.com/v/osaka-sushi-japanese-restaurant/4b71aac8f964a520c9542de3' data-toggle="tooltip" data-placement="top" title="Foursquare"><span className="fab fa-foursquare"></span></a></li>
                            <li className="social"><a href='https://plus.google.com/b/117370065600088455991/+OsakaSushiMundelein?hl=en' data-toggle="tooltip" data-placement="top" title="Google+"><span className="fab fa-google-plus-g"></span></a></li>
                            <li className="social"><a href='https://www.yelp.com/biz/osaka-sushi-mundelein-2?osq=osaka+mundelein' data-toggle="tooltip" data-placement="top" title="Yelp"><span className="fab fa-yelp"></span></a></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <h2 className="footer-heading">Osaka Sushi</h2>
                        <div className="block-23 mb-3">
                            <ul>
                                <li><span class="fas fa-map-marker-alt"></span><span className="text">9424, 1452 Butterfield Rd, Mundelein, IL 60060</span></li>
                                <li><a href="tel:8475499944" className="contact-link"><span className="fas fa-phone-alt"></span><span className="text">+1 847 549-9944</span></a></li>
                                <li><a href="mailto:osakasushi@example.com" className="contact-link"><span className="fas fa-paper-plane"></span><span className="text">osakasushi@example.com</span></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm">
                        <h2 className="footer-heading">Opening Hour</h2>
                        <div className="block-23 mb-3">
                            <ul>
                                <li><span className="fas fa-door-closed"></span><span className="text"><strong>Monday</strong> closed</span></li>
                                <li><span className="fas fa-door-open"></span><span className="text"><strong>Tue-Thu</strong> 12:00PM - 08:00PM</span></li>
                                <li><span className="fas fa-door-open"></span><span className="text"><strong>Fri-Sat</strong> 12:00PM - 09:00PM</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm">
                        <h2 className="footer-heading">Delivery</h2>
                        <div className="block-21 mb-4 d-flex">
                            <a href="https://www.ubereats.com/store/osaka-sushi-mundelein/Kyh8NeuKTdqD-KkmyqTV9Q"><img src="https://restaurantproject-2021.s3.amazonaws.com/ubereat1.png" className="img-fluid mr-4 rounded img-thumbnail"/></a>
                            <a href="https://www.grubhub.com/restaurant/osaka-sushi-1452-butterfield-rd-mundelein/2869874">
                                <img src="https://restaurantproject-2021.s3.amazonaws.com/gruphub1.png" className="img-fluid mr-4 rounded img-thumbnail"/></a>
                            <a href=""><img src="https://restaurantproject-2021.s3.amazonaws.com/doordash1.png" className="img-fluid mr-4 rounded img-thumbnail"/></a>
                        </div>
                    </div>
                </div>
                <div className="row mt-5 pt-4 border-top">
                    <div className="col-md-6 col-lg-8">
                        <p className="copyright">
                            Copyright@2021 All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>       
        </div>
    )
}

export default Footer;