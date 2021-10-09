import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { BsPersonCircle } from 'react-icons/bs';
import { HiOutlineHeart } from 'react-icons/hi';
import { BsHandbag } from 'react-icons/bs';
import Navbar from './Navbar';
import SearchBar from './SearchBar';


const Header = (props) => {

    return (
        <div>
            <div className='header'>
                <h3><Link to='/'>BEAUTYSTORE</Link></h3>
                <SearchBar data={props.data}/>
                <ul>
                    <li>
                        <Link to='/signup' className='sign h-icon'>
                            <BsPersonCircle size='20' />
                            <p className='h-icon'>Sign In</p>
                        </Link>
                    </li>
                    <li>
                        <Link to='#'>
                            <HiOutlineHeart size='25' className='h-icon'/>
                        </Link>
                        </li>
                    <li>
                        <a href='#'>
                            <BsHandbag size='23' className='h-icon'/>
                        </a>
                    </li>
                </ul>
            </div>
            <Navbar />
        </div>
    );
};

export default Header;