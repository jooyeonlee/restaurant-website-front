import React from 'react';
import './Reserv.css';

const Reserv = () => {
    return (
        <div className="section section-lg bg-dark">
            <video autoplay muted loop id="bg-video">
                <source src="https://restaurantproject-2021.s3.amazonaws.com/sushivideo.mp4" data-type="video/mp4"/>
            </video>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="utility-box">
                            <div className="utility-box-title bg-dark dark">
                                <div className="bg-image"><img src="" alt=""></img></div>
                                <div>
                                    <span className="icon icon-primary"><i className="far fa-bookmark"></i></span>
                                    <h4 className="mb-0">Book a table</h4>
                                    <p className="lead text-muted mb-0">Details about your reservation</p>
                                </div>
                            </div>
                            <form action="#" id="booking-form" className="booking-form" data-validate>
                                <div className="utility-box-content">
                                    <div className="form-group">
                                        <label>Name:</label>
                                        <input type="text" name="name" className="form-control" required />
                                    </div>
                                    <div className="form-group">
                                        <label>E-mail:</label>
                                        <input type="text" name="email" className="form-control" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Phone:</label>
                                        <input type="text" name="email" className="form-control" required />
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label>Date:</label>
                                                <input type="date" name="date" class="form-control" required />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label>Attendens:</label>
                                                <input type="number" name="attendents" min="1" class="form-control" required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className="utility-box-btn btn btn-secondary btn-block btn-lg btn-submit" type="submit">
                                    <span className="description">Make reservation</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reserv;