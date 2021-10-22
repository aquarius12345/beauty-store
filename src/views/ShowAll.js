import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import api from '../configs/api';
import './ShowAll.css';


const ShowAll = (props) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
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
            setLoading(true);
            // setFiltered(result.data);    
        } catch(error) {
            console.error(error);
        };  
    };

    return (
        <div className='showall'>
           {loading ? (
               products.length ? <>
                <section className='products-part'>
                    <h3>ALL PRODUCTS</h3>
                    <div className='result'>
                        <p>{'('+ products.length +')'} Results</p> 
                    </div>

                    <div>
                        <ul className='the-ul'>
                            {products.map(el => <>
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
            </> : ''
           ) :
           (
            (<div className='spinner'>
                <Spinner animation="border" role="status" className='loader'></Spinner>    
            </div>)
           )}
            
             
        </div>

    );
};

export default ShowAll;