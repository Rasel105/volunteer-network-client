import React from 'react';
import volunteer from '../../images/extraVolunteer.png'
import './Donation.module.css'

const Donation = () => {
    return (
        <div className='container donation-bg w-100 mx-auto d-flex align-items-center justify-content-center    '>
            <div class="row g-3" >
                <div class="col-md-6" >
                    <div class="card" style={{ width: "23rem" }} >
                        <div class="card-body position-relative d-flex">
                            <div>
                                <img style={{ width: "150px" }} src={volunteer} alt="" />
                            </div>
                            <div className='ms-3'>
                                <h5 class="card-title">Special</h5>
                                <p>29 Sep, 2022</p>
                            </div>
                            <button className='btn btn-primary position-absolute bottom-0 end-0'>Cancel</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card " style={{ width: "23rem" }} >
                        <div class="card-body position-relative d-flex">
                            <div>
                                <img style={{ width: "150px" }} src={volunteer} alt="" />
                            </div>
                            <div className='ms-3'>
                                <h5 class="card-title">Special</h5>
                                <p>29 Sep, 2022</p>
                            </div>
                            <button className='btn btn-primary position-absolute bottom-0 end-0'>Cancel</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card " style={{ width: "23rem" }} >
                        <div class="card-body position-relative d-flex">
                            <div>
                                <img style={{ width: "150px" }} src={volunteer} alt="" />
                            </div>
                            <div className='ms-3'>
                                <h5 class="card-title">Special</h5>
                                <p>29 Sep, 2022</p>
                            </div>
                            <button className='btn btn-primary position-absolute bottom-0 end-0'>Cancel</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card " style={{ width: "23rem" }} >
                        <div class="card-body position-relative d-flex">
                            <div>
                                <img style={{ width: "150px" }} src={volunteer} alt="" />
                            </div>
                            <div className='ms-3'>
                                <h5 class="card-title">Special</h5>
                                <p>29 Sep, 2022</p>
                            </div>
                            <button className='btn btn-primary position-absolute bottom-0 end-0'>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donation;