import React from 'react';
import './SearchBar.css'
import Background from '../../images/background.jpg'

const SearchBar = () => {
    const handleSearch = event => {
        event.preventDefault();
    }

    const bgImg = {
        width: "100%",
        height: "400px",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${Background})`,
    }

    return (
        <div style={bgImg} className="mh-100 pt-5">
            <p className='text-center text-white' id='heading-style'>I grow by helping people in need.</p>
            <form id='search-style' onSubmit={handleSearch} className="d-flex w-50 mx-auto">
                <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    );
};

export default SearchBar;