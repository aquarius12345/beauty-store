import React from 'react';
import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import api from '../configs/api';
import './ShowAll.css';


const ShowAll = (props) => {
    const [products, setProducts] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const { name } = props.match.params;
    console.log('name', name);

    useEffect(() => {
       //console.log('inside use effect')
       getAll()
    }, [])

    const getAll = async() => {
        try{
            const result = await api.get('/product/all');
            console.log('inside result');
            setProducts(result.data);
            setFiltered(result.data);    
        } catch(error) {
            console.error(error);
        };  
    };

    useEffect(() => {
        if(name === 'all'){
            console.log('inside all')
            setFiltered(products);
            return
        }
        if(name === 'bestsellers'){
            const filteredItems = products.filter(el => el.rating === 5);
            setFiltered(filteredItems);
            return
        }
    }, [props.match.params.name]);

    return (
        <div className='showall'>
           
            {products.length ? <>
                <section className='products-part'>
                    <div className='bg-img'>
                    {/* <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIAh-Wu54XXw1cPSrDnVK7-4va0qmq3U664Q&usqp=CAU' /> */}
                        <h3>{name === 'all' ? 'All Products' : ''}</h3>
                        <h3>{name === 'bestsellers' ? 'Best Sellers' : ''}</h3>
                    </div>
                    
                    <div className='result'>
                        <p>{'('+ filtered.length +')'} Results</p> 
                    </div>

                    <div>
                        <ul className='the-ul'>
                            {filtered.map(el => <>
                            <li key={el._id} className='prd-card'> 
                            <Link to={`/product-detail/${el._id}`}>
                            <img src={el.image_one} alt='body product'/>
                            <div>
                                <p style={{fontWeight: 'bold'}}>{el.brand}</p>
                                <p style={{fontSize: '0.9rem'}}>{el.name}</p>
                                <p>{el.rating}</p>
                                <p style={{fontWeight: 'bold'}}>{'$'+ (el.price / 100) + '.00'}</p>
                            </div>
                            </Link>
                            </li></>)
                            }
                        </ul>
                    </div>
            </section>      
            </> : ''}
             
        </div>

    );
};

export default ShowAll;