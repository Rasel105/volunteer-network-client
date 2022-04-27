import React from 'react';
import './SearchBar.css'
const SearchBar = () => {
    const handleSearch = event => {
        event.preventDefault();
    }
    return (
        <div>
            <p className='heading-style text-center'>I grow by helping people in need.</p>
            <form  onSubmit={handleSearch} className="d-flex w-50 mx-auto">
                <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    );
};

export default SearchBar;