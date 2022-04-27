import React from 'react';

const VolunteerCard = ({ volunteer }) => {
        const { name, img } = volunteer;
        
    return (
        <div className='g-5 col-sm-12 col-md-3 col-lg-3'>
            <div className="card" style={{ width: "16rem" }}>
                <img src={img} className="card-img-top w-100" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
    );
};

export default VolunteerCard;