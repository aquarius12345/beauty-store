import React from 'react';
import './SearchBar.css';
import { AiOutlineSearch } from 'react-icons/ai';


const SearchBar = () => {
    return (
        <div>
            <div className='search'>
                <input type='search' placeholder='Search'/>
                <AiOutlineSearch size='22' className='search-icon'/>
            </div>
           
        </div>
    
    );
};

export default SearchBar;