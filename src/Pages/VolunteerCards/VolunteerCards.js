import React, { useEffect, useState } from 'react';
import VolunteerCard from '../VolunteerCard/VolunteerCard';


const VolunteerCards = () => {
    const [volunteers, setVolunteers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/events')
            .then(res => res.json())
            .then(data => setVolunteers(data));
    }, []);

    return (
        <div className='container'>
            <div className='row '>
                {
                    volunteers.map(volunteer =>  <VolunteerCard
                        key={volunteer._id} 
                        volunteer={volunteer}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default VolunteerCards;