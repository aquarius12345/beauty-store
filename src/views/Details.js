import React, { useState, useEffect } from 'react';
import api from '../configs/api';
import './Details.css';
import Review from '../components/Review';


const Details = (props) => {
    console.log('details', props)
    const [product, setProduct] = useState({});
    const [inputValue, setInputValue] =useState('');

    useEffect(() => {
        oneProduct();
    }, [])

    const oneProduct = async() => {
        const result = await api.get(`/product/${props.match.params.id}`);
        console.log('result one', result.data)

        setProduct(result.data);
    }

    useEffect(() => {
       oneProduct();
    }, [props.match.params.id])
    

    const heart = '♥';
    const emptyheart = '♡'

    const rating = (number) => {
        return heart.repeat(number).padEnd(5, emptyheart);
    }

    const handleInput = (e) => {
        // e.preventDefault();
        setInputValue(e.target.value);
    }

    return (
    
        <div className='details'>
        
           <div className='det-container'>
               <img src={product.image_one} alt={product.name}/>
               <div className='description'>
                    <h3>{product.brand}</h3>
                    <h6>{product.name}</h6>
                    <span>{rating(product.rating)} {product.rating + '.0'}</span>
                    <p style={{fontWeight:'bold'}}>${product.price / 100 + '.00'}</p>
                    <p>{product.description}</p>
                    <p style={{fontWeight:'bold'}}>Skin type: {product.skin_type}</p>
                    <p style={{fontWeight:'bold'}}>Size: {product.size}</p>
                    <span style={{fontSize: '0.9rem'}}>Qty:</span>
                    <input type='number' onChange={handleInput}></input>
                    <button>ADD TO BAG</button>
               </div>   
           </div>

            
           <div className='high'>
                <hr/>
                <h4>Highlights</h4>
                    <div>
                        <ul className='highlights'>
                           { !product.ingredients ? '' : 
                           <>
                            <li>
                            { product.ingredients.includes('Vegan') ? (
                                <> 
                                    <img src='https://cdn-icons-png.flaticon.com/128/1971/1971034.png' alt='vegan'/>
                                    <span>Vegan</span>
                                </>) : ''}   
                            </li>   
                            
                            <li>
                            { product.ingredients.includes('Parabens') ? (
            
                                <>
                                  <img src='https://cdn-icons-png.flaticon.com/128/3637/3637654.png' alt='paraben free'/>
                                  <span>Paraben Free</span> 
                                </>) : '' }
                            </li> 
                           
                            <li>
                            { product.ingredients.includes('Redness') ? (
                                <>
                                  <img src='https://cdn-icons.flaticon.com/png/512/3464/premium/3464702.png?token=exp=1633987496~hmac=3dfe629ed3eb1db6937e384925857236' alt='redness'/>
                                  <span>Redness</span>
                                </>) : '' }
                            </li>

                            <li>
                            { product.ingredients.includes('Cruelty') ? (
                                <>
                                    <img src='https://cdn-icons-png.flaticon.com/128/4807/4807799.png' alt='cruelty free' />
                                    <span>Cruelty Free</span>
                                </>) : '' }
                            </li>

                            <li>
                            { product.ingredients.includes('Cruelty') ? (
                                <>    
                                    <img src='https://cdn-icons.flaticon.com/png/128/3274/premium/3274120.png?token=exp=1633987886~hmac=120e3d37b6db0266258a677ef63a8ad1' alt='oil free' />
                                    <span>Oil Free</span>
                                </>) : '' }
                            </li>

                            <li>
                            { product.ingredients.includes('Sili') ? (
                                <>
                                <img src='https://cdn-icons-png.flaticon.com/512/4406/4406262.png' alt='silicone free'/>
                                <span>Silicone Free</span>
                                </>) : '' }
                            </li>

                            <li>
                            { product.ingredients.includes('Sali') ? (
                                <>
                                <img src='https://cdn-icons.flaticon.com/png/512/4043/premium/4043542.png?token=exp=1633988159~hmac=853006d5f10a6fda36088dbe4734a700' alt='salicylic acid'/>
                                <span>Salicylic Acid</span>
                                </>) : '' }
                            </li>
                            </>
                        }
                        </ul>
                      
                    </div>
            </div>

            <div>
                <hr/>
                <Review  id={props.match.params.id}/>
            </div>
            
                       
        </div>
    );
};

export default Details;

