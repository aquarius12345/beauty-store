import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
    return (
        <div>
            <div className='navbar'>
                <Link to='/store/all'>SHOP ALL</Link>
                <Link to='/store/best-sellers'>BEST SELLERS</Link>
                <div className='dropdown'>
                    <Link to='/bodycare'>BODYCARE</Link>
                    <div className='dropdown-content'>
                        <div className='links'>
                            <h5>By Skin Type</h5>
                            <Link to='/bodycare?name=oily'>Oily Skin</Link>
                            <Link to='/bodycare?name=dry'>Dry Skin</Link>
                            <Link to='/bodycare?name=sensitive'>Sensitive Skin</Link>
                            <Link to='/bodycare?name=all'>All Skin Types</Link>
                        </div>

                        <div>
                            <Link to='/bodycare' style={{color:'black'}}><h5>SHOP ALL</h5></Link>
                            <div className='nav-img'>    
                                <img src='https://res.cloudinary.com/dgzbojudn/image/upload/v1633739196/ceramidin_myovxf.png' alt='ceramidin'/>
                                <img src='https://res.cloudinary.com/dgzbojudn/image/upload/v1633477927/beautyStore/waterbank-lan_d0i2wi.png' alt='cera'/>
                            </div>
                        </div>       
                    </div>    
                </div>

                <div className='dropdown'>
                    <Link to='/face-care'>FACECARE</Link>
                    <div className='dropdown-content' id='drop-face'>
                        <div className='links'>
                            <h5>By Skin Type</h5>
                            <Link to='/face-care?name=oily'>Oily Skin</Link>
                            <Link to='/face-care?name=dry'>Dry Skin</Link>
                            <Link to='/face-care?name=sensitive'>Sensitive Skin</Link>
                            <Link to='/bodycare?name=all'>All Skin Types</Link>
                        </div>

                        <div>
                            <Link to='/face-care' style={{color:'black'}}><h5>SHOP ALL</h5></Link>
                            <div className='nav-img'>    
                                <img src='https://res.cloudinary.com/dgzbojudn/image/upload/v1633715170/cherry-blossom-essence-contaed-droplet-bottle-with-flower-petals-pink-background_317810-1498_sg0gap.jpg' alt='ceramidin'/>
                                <img src='https://res.cloudinary.com/dgzbojudn/image/upload/v1633475028/beautyStore/serum-ginzing-origins2_zfjh1y.png' alt='cera'/>
                            </div>
                        </div>       
                    </div>    
                </div>
                <Link to='/about'>ABOUT</Link>
            </div>
        </div>
    );
};

export default Navbar;