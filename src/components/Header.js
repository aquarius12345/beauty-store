import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { BsPersonCircle } from 'react-icons/bs';
import { HiOutlineHeart } from 'react-icons/hi';
import { BsHandbag } from 'react-icons/bs';
import { RiCloseFill } from 'react-icons/ri';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import api from '../configs/api';


const Header = (props) => {
    
    const [user, setUser] = useState(localStorage.getItem('userName'));
    const [cart, setCart] = useState([])

    console.log('cart',cart)

    useEffect(() => {
        getCart();    
    }, [])

    const getCart = async() => {
       try {
           const result = await api.get('/cart');
           //console.log('cart',result.data.products);
           setCart(result.data.products);
       } catch(error) {
            console.error(error);
       }
    };

    // const removeProduct = async() => {
    //     try {
    //         const result = await api.delete('/cart/')
    //     }
    // }

    return (
        <div>
            <div className='header'>
                <h3><Link to='/'>BEAUTYSTORE</Link></h3>
                <SearchBar data={props.data}/>
                <ul>
                    <li className='sign h-icon'>
                        <BsPersonCircle size='20' />
                        {user ? <p>Hello, {user}!</p> : <Link to='/signup' className='sign h-icon'><p className='h-icon'>Sign In</p></Link>}
                    </li>
                    <li>
                        <Link to='#'>
                            <HiOutlineHeart size='25' className='h-icon'/>
                        </Link>
                    </li>

                    <li>
                        <a href='#'>
                            <BsHandbag size='23' className='h-icon bag' />
                        </a>
                        {cart.length ? <><button className='bag-qty'>{cart.map(el => el.qty).reduce((acc, curr) => acc + curr)}</button></>
                    : ''}
                    </li>

                    <li>{user && <Link to='/logout' className='h-icon'>Logout</Link>}</li>
                </ul>
            </div>
            <Navbar />

            {/* -----------Cart Menu-------- */}
            <div className='cart-menu'>
                <ul>
                    <h5>Bag</h5>
                    <hr/>
                    {cart.map(el => <>
                    <li key={el._id}>
                        <img src={el.product_id.image_one} alt='product-image'/>
                        <div>
                            <p style={{fontWeight: 'bold'}}>{el.product_id.brand}</p>
                            <Link to={`/product-detail/${el._id}`}><p style={{width:'180px'}}>{el.product_id.name}</p></Link>
                            <button className='remove-btn'>Remove</button>
                        </div>
                        <span>Qty: {el.qty}</span>
                        <span style={{fontWeight: 'bold'}}>${el.product_id.price * el.qty / 100 + '.00'}</span>    
                    </li>
                    <hr/>
                    </>)}
                    
                    {cart.length ? <><p>Subtotal: {cart.map(el => el.qty).reduce((acc, curr) => acc + curr)} items</p></>
                    : ''}

                <button className='checkout-btn'>View Bag & Checkout</button> 
                </ul>
                       
            </div>
        </div>
    );
};

export default Header;