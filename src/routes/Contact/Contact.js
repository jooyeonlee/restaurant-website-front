import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className="content">
            <div className="page-title bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-4">
                            <h1 className="mb-8">Contact Us</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 offset-lg-1 col-md-6 mb-5 mb-md-0">
                            <h4 className="mb-0">Osaka Sushi</h4>
                            <span className="text-muted">9424, 1452 Butterfield Rd, Mundelein, IL 60060</span>
                            <hr className="hr-md" />
                            <div className="row">
                                <div className="col-sm-6 mb-3 mb-sm-0">
                                    <h6 className="mb-1 text-muted">Phone:</h6>
                                    +1 (847) 549-9944
                                </div>
                                <div className="col-sm-6">
                                    <h6 className="mb-1 text-muted">E-mail:</h6>
                                    <a href="#">osaka@example.com</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-2 col-md-6">
                            <div id="map-container-google-8" className="z-depth-1-half map-container-5">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2953.7138002646298!2d-87.98047668475262!3d42.24192697919497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f97b6bd5c9777%3A0x643055a634cd135f!2sOsaka%20Sushi%20Restaurant!5e0!3m2!1sen!2sus!4v1635794699895!5m2!1sen!2sus" allowfullscreen="" loading="lazy"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;