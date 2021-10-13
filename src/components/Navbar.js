import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
    return (
        <div>
            <div className='navbar'>
                <ul className='first-ul'>
                    <li>
                        <a href='#'>NEW IN</a>
                    </li>
                    <li>
                        <a href='#'>BEST SELLERS</a>
                    </li>
                    <li className='first-li'>
                        <Link to='/bodycare'>BODY CARE</Link>
                        <ul className='inside'>
                            <li><a href='#'>Best Sellers</a></li>
                            <li><a href='#'>Body Creams</a></li>
                            <li><a href='#'>Body Cleansers</a></li>
                            <li><a href='#'>Handcreams</a></li>
                        </ul>
                    </li>
                    <li className='first-li'>
                        <a href='#'>FACE CARE</a>
                        <ul className='inside'>
                            <li><a href='#'>Best Sellers</a></li>
                            <li><a href='#'>Serums</a></li>
                            <li><a href='#'>Face Masks</a></li>
                            <li><a href='#'>Eyes&Lips</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href='#'>SHOP ALL</a>  
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;