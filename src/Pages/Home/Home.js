import React from 'react';
import UploadAndDisplayImage from '../../UploadAndDisplayImage/UploadAndDisplayImage';
import SearchBar from '../SearchBar/SearchBar';
import VolunteerCards from '../VolunteerCards/VolunteerCards';

const Home = () => {
    return (
        <div>
            <SearchBar />
            <VolunteerCards/>
            <UploadAndDisplayImage></UploadAndDisplayImage>
        </div>
    );
};

export default Home;