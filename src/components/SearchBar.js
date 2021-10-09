import React from 'react';
import './SearchBar.css';
import { useState, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import api from '../configs/api';


const SearchBar = () => {
    
    const [products, setProducts] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [filteredList, setFilteredList] = useState([]);

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async() => {
        try {
            const result = await api.get('/product/all');
            console.log('result', result);
            setProducts(result.data);
        } catch(error) {
            console.error(error.response);
        }
    }

    useEffect(() => {
        const filtered = products.filter(el => el.name.toLowerCase().includes(inputValue.toLowerCase()));
        
        console.log('filtered', filtered);
        setFilteredList(filtered);
    }, [inputValue]);


    return ( 
        <div>
            <div className='search'>
                <AiOutlineSearch size='22' className='search-icon'/>
                <input type='search' value={inputValue} placeholder='Search' onChange={handleChange}/> 
                <ul>
                {inputValue !== '' ? filteredList.slice(0, 7).map(el => <li key={el._id}><a href='3'>{el.name}</a></li>): null}
                </ul>
            </div>  
        </div>
    
    );
};

export default SearchBar;