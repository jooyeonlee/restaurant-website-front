import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className="content">
            <div className="page-title border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 offset-lg-5">
                            <h1 className="mb-0">About Us</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section section-bg-edge">
                <div className="image left bottom col-md-7">
                    <div class="bg-image"><img src="https://cafe24img.poxo.com/hyukjang0715/web/product/big/201807/1939_shop1_15312208635816.jpg" alt=""/></div>
                </div>
                <div className="container">
                    <div className="col-lg-5 offset-lg-5 col-md-9 offset-md-3">
                        <p class="lead">
                         With over twenty years of experience, Chef Yoon has developed his own take on Japanese Cuisine. In his twenties, Chef Yoon’s innovative take on traditional Edomae-sushi caught the eye of Sushi Naniwa, Momotaro, and Kamehachi, the three cele...brated Chicago sushi pots. Chef Yoon continued his career as Chief sushi chef at Nomi restaurant at The Park Hyatt Hotel on Chicago’s Michigan Avenue. There, he built up his own reputation by becoming the Executive Chef and General Manager of Sushi Doraku, own by Benihana Corporation, on Chicago State Street. Chef Yoon’s years of experience and education eventually led to his pursuit of a lifelong dream in opening up his own restaurant, Yoon Sushi Japanese Cuisine, in 2003 in the Atlanta area in Georgia. After eleven successful years of running Yoon Sushi, Chef Yoon returned back to his Chicago roots and took over Osaka sushi in 2014. At Osaka Sushi, he continues to evolve his style of crafting playful, exquisitely presented dishes which pay tribute to Japanese tradition. His true respect for Japanese tradition is augmented with his own variations in order to appeal to a wider array of palates. Chef Yoon continues his legacy by crafting exquisite sushi from the finest rice (koshi hikari), freshest fish, and with the utmost care.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;