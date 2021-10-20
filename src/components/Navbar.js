import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
    return (
        <div>
            <div className='navbar'>
                <ul className='first-ul'>
                    <li className='no-inside'>
                        <Link to='/store/all'>SHOP ALL</Link>
                    </li>
                    <li className='no-inside'>
                        <Link to='/store/bestsellers'>BEST SELLERS</Link>
                    </li>
                    <li className='first-li'>
                        <Link to='/bodycare'>BODY CARE</Link>
                        <ul className='inside'>
                            <li><Link to='/bodycare?name=oily'>Oily Skin</Link></li>
                            <li><Link to='/bodycare?name=dry'>Dry Skin</Link></li>
                            <li><Link to='/bodycare?name=sensitive'>Sensitive Skin</Link></li>
                            <li><Link to='/bodycare?name=all'>All Skin Types</Link></li>
                        </ul>
                    </li>
                    <li className='first-li'>
                        <Link to='/face-care'>FACE CARE</Link>
                        <ul className='inside'>
                            <li><Link to='/face-care?name=oily'>Oily Skin</Link></li>
                            <li><Link to='/face-care?name=dry'>Dry Skin</Link></li>
                            <li><Link to='/face-care?name=sensitive'>Sensitive Skin</Link></li>
                            <li><Link to='/face-care?name=all'>All Skin Types</Link></li>
                        </ul>
                    </li>
                    <li className='no-inside'>
                        <Link to='/about'>ABOUT</Link>  
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;