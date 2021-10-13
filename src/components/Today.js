import React from 'react';
import './Today.css';
import { ImTruck } from 'react-icons/im';

const Today = () => {
    return (
        <div>
            <div className= "today-bg">
                <span>Get up to 50% off on selected products. Plus, Free shipping!</span>
                <span><ImTruck color='white' margin-top='5px' size='20'/></span>
            </div>
        </div>
    )
};

export default Today;