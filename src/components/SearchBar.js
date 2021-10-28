import React from 'react';
import { Link } from 'react-router-dom';
import './SearchBar.css';
import { useState, useEffect, useRef } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import api from '../configs/api';

const SearchBar = () => {
    const [products, setProducts] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [filteredList, setFilteredList] = useState([]);
    const [isOpen, setIsOpen] = useState(true);

    //const ref = useRef();
    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

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
        };
    };

    useEffect(() => {
        const filtered = products.filter(el => el.name.toLowerCase().includes(inputValue.toLowerCase()));
        setFilteredList(filtered);
    }, [inputValue]);

    let menuRef = useRef()

    useEffect(() => {
        let handler = (event) => {
            if(!menuRef.current.contains(event.target)) {
                setIsOpen(true);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => {
            document.removeEventListener('mousedown', handler);
        };
    });

    return ( 
        <div>
            <div className='search' ref={menuRef}>
                <AiOutlineSearch size='22' className='search-icon'/>
                <input type='search' value={inputValue} placeholder='Search' onChange={handleChange} onClick={()=>setIsOpen(!isOpen)}/>
                {isOpen ? '' :
                (
                    <ul>
                    {inputValue !== '' ? filteredList.slice(0, 7).map(el => 
                    <li key={el._id}>
                        <img src={el.image_one} alt='product'/>
                        <Link to={`/product-detail/${el._id}`}>{el.name.slice(0, 40)}...</Link>
                    </li>): null}
                    </ul>
                )}
            </div>  
        </div>
    );
};

export default SearchBar;