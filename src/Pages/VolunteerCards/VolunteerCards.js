import React, { useEffect, useState } from 'react';
import VolunteerCard from '../VolunteerCard/VolunteerCard';


const VolunteerCards = () => {
    const [volunteers, setVolunteers] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setVolunteers(data));
    }, []);

    return (
        <div className='container'>
            <div className='row '>
                {
                    volunteers.map(volunteer =>  <VolunteerCard
                        key={volunteer.id} 
                        volunteer={volunteer}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default VolunteerCards;