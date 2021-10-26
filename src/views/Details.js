import React, { useState, useEffect } from 'react';
import api from '../configs/api';
import './Details.css';
import Review from '../components/Review';

const Details = (props) => {
    console.log('details props', props)
    const [product, setProduct] = useState({});
    const [qty, setQty] = useState('1');
    const [toggleImg, setToggleImg] = useState(false);
    const [popHeart, setPopHeart] = useState(false);
    
    useEffect(() => {
        oneProduct();
    }, [])

    const oneProduct = async() => {
        const result = await api.get(`/product/${props.match.params.id}`);
        //console.log('result oneProduct', result.data)
        setProduct(result.data);
    }

    useEffect(() => {
       oneProduct();
    }, [props.match.params.id, qty]);


    const heart = '♥';
    const emptyheart = '♡'

    const rating = (number) => {
        return heart.repeat(number).padEnd(5, emptyheart);
    };

    const handleInput = (e) => {
        e.preventDefault();
        setQty(e.target.value);
    };

    const addToCart = async(el) => {
        try {
            const result = await api.post(`/cart/${el}`,{qty});
            //console.log('add to cart', result)
            props.getCart();
            setPopHeart(true);
        }catch(error){
            console.error(error);
        }
    };


    return (
        <div className='details'>
        {product ? <>
           <div className='det-container'>
                <div className='btnn-container'>
                   <img src={product.image_one} alt={product.name} onClick={() => setToggleImg(false)}/>
                   <img src={product.image_two} alt="second" onClick={() => setToggleImg(true)}/>
                </div>
               
                <div className='img-toggle'>
                {!toggleImg ?    
                  <img src={product.image_one} className='img-size' alt={product.name}/>
                  :
                  <img src={product.image_two} className='img-size' alt="second-image"/>
                }
                </div>
               
                <div>
                    <div className={popHeart ? 'heart fill-color' : 'heart'} onClick={()=> props.add(product._id)}></div>
                    <div className={popHeart ? 'animation-heart animation' : 'animation-heart'}></div>
                    {/* <button className='heart' onClick={()=> props.add(product._id)}>♡</button> */}
                </div>
                
                <div className='description-d'>
                    <h3>{product.brand}</h3>
                    <h6>{product.name}</h6>
                    <span>{rating(product.rating)} {product.rating + '.0'}</span>
                    <p style={{fontWeight:'bold'}}>${product.price / 100 + '.00'}</p>
                    <p>{product.description}</p> 
                    <p style={{fontWeight:'bold'}}>Skin type: {product.skin_type}</p>
                    <p style={{fontWeight:'bold'}}>Size: {product.size}</p>
                    <span>Qty:</span>
                    <input type='number' onChange={handleInput} value={qty}></input>
                    <button onClick={()=>addToCart(product._id)}>ADD TO BAG</button>
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
                                    <img src='https://res.cloudinary.com/dgzbojudn/image/upload/v1634241913/beautyStore/3901573_nirqxb.png' alt='vegan'/>
                                    <span> Vegan</span>
                                </>) : ''}   
                            </li>   
                            
                            <li>
                            { product.ingredients.includes('Parabens') ? (
            
                                <>
                                  <img src='https://res.cloudinary.com/dgzbojudn/image/upload/v1634241913/beautyStore/3637654_wizijw.png' alt='paraben free'/>
                                  <span> Paraben Free</span> 
                                </>) : '' }
                            </li> 
                           
                            <li>
                            { product.ingredients.includes('Redness') ? (
                                <>
                                  <img src='https://res.cloudinary.com/dgzbojudn/image/upload/v1634241914/beautyStore/4771256_cnzxhv.png' alt='redness'/>
                                  <span> Redness</span>
                                </>) : '' }
                            </li>

                            <li>
                            { product.ingredients.includes('Cruelty') ? (
                                <>
                                    <img src='https://res.cloudinary.com/dgzbojudn/image/upload/v1634241914/beautyStore/4807799_ehdv9u.png' alt='cruelty free' />
                                    <span> Cruelty Free</span>
                                </>) : '' }
                            </li>


                            <li>
                            { product.ingredients.includes('Sili') ? (
                                <>
                                <img src='https://res.cloudinary.com/dgzbojudn/image/upload/v1634241913/beautyStore/3901485_rpri91.png' alt='silicone free'/>
                                <span> Silicone Free</span>
                                </>) : '' }
                            </li>

                            <li>
                            { product.ingredients.includes('Sali') ? (
                                <>
                                <img src='https://res.cloudinary.com/dgzbojudn/image/upload/v1634241914/beautyStore/salycilic_ivodnl.png' alt='salicylic acid'/>
                                <span> Salicylic Acid</span>
                                </>) : '' }
                            </li>
                            </>
                        }
                        </ul>  
                    </div>
            </div>

            <div>
                <hr/>
                <Review  id={props.match.params.id} />
            </div>
        
         </>  : '' }           
        </div>
    );
};

export default Details;

