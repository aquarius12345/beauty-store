import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { BsPersonCircle } from 'react-icons/bs';
import { HiOutlineHeart } from 'react-icons/hi';
import { BsHandbag } from 'react-icons/bs';
import { GrFormClose } from 'react-icons/gr';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import api from '../configs/api';


const Header = (props) => {
    
    const [user, setUser] = useState(localStorage.getItem('userName'));
    const [cart, setCart] = useState([]);
    const [cartToggle, setCartToggle] = useState(false);
    //console.log('cart toggle', cartToggle)
    //console.log('cart in header', cart)

    useEffect(() => {
        setCart(props.cartData);   
    }, [props.cartData])

    const handletoggle = () => {
        setCartToggle(!cartToggle);
    }

    const removeProduct = async(id) => {
        try {
            await api.delete(`/cart/${id}`);
            props.getCart();
        }catch(error){
            console.error(error);
        }
    };

    return (
        <div>
            <div className='header'>
                {/* <h3><Link to='/'>BEAUTYSTORE</Link></h3> */}
                <Link to='/'><img src='https://res.cloudinary.com/dgzbojudn/image/upload/v1634861444/F27670FC-D4C8-4043-9538-9E8DFFC69C56_zhayju.jpg' alt='beautystore'/></Link>
                <SearchBar data={props.data}/>
                <ul>
                    <li className='sign h-icon'>
                        <BsPersonCircle size='20' />
                        {user ? <p>Hello, {user}!</p> : <Link to='/signup' className='sign h-icon'><p className='h-icon'>Sign In</p></Link>}
                    </li>
                    <li>
                        <Link to='/my-list'>
                            <HiOutlineHeart size='25' className='h-icon'/>
                        </Link>
                    </li>
                    
                    {cart.length ? <><button className='bag-qty' onClick={()=>handletoggle()}>{cart.map(el => el.qty).reduce((acc, curr) => acc + curr)}</button></>
                    : ''}
                    <li id='bag' className='h-icon' onClick={()=>handletoggle()}>
                        <BsHandbag size='23' />   
                    </li>

                    <li>{user && <Link to='/logout' className='h-icon'>Logout</Link>}</li>
                </ul>
            </div>
            <Navbar />

            {/* -----------Cart Menu-------- */}
            {cartToggle ? <>
            <div className='cart-menu'>
                <button className='close-x' onClick={()=>handletoggle()}><GrFormClose className='close-icon' size={15} /></button>
                {user ? (
                    <ul>
                        <h5>Bag</h5>
                        <hr/>
                        {cart.map(el => <>
                        <li key={el.product_id._id}>
                            <img src={el.product_id.image_one} alt='product-image' />
                            <div className='p-list'>
                                <p style={{fontWeight: 'bold'}}>{el.product_id.brand}</p>
                                <Link to={`/product-detail/${el.product_id._id}`}><p style={{width:'180px'}}>{el.product_id.name}</p></Link> 
                                <span>Price:${el.product_id.price / 100 + '.00'} </span>
                                <span> Qty:{el.qty} </span>
                                <button className='remove-btn' onClick={()=>removeProduct(el.product_id._id)}>Remove</button>
                            </div>

                            <div className='price'>
                                <span style={{fontWeight: 'bold'}}> ${el.product_id.price * el.qty / 100 + '.00'}</span> 
                            </div>   
                        </li>
                        <hr/>
                        </>)}
                        
                        <div className='subtotal'>
                        {cart.length ? <>
                        <span>Subtotal: {cart.map(el => el.qty).reduce((acc, curr) => acc + curr)} items</span>
                        <span style={{fontWeight:'bold'}}>${cart.map(el => el.product_id.price * el.qty).reduce((acc, curr) => acc + curr) / 100 + '.00'}</span>   
                        </>
                        : ''}
                        </div>
                        
                        <div className='check'>
                            <Link to='/cart' className='checkout-btn' onClick={()=>handletoggle()}>View Bag & Checkout</Link>
                        </div> 
                    </ul>
                ) : (
                    <p style={{margin: '0 auto'}}>Please Login to add in Cart</p>
                )};
                
                     
            </div>
            </> : ''}
            
        </div>
    );
};

export default Header;