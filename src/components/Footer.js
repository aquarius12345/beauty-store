import React from 'react';
import './Footer.css';
import { AiOutlineLinkedin } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className='footer'>
            <p>Created by Debora Seo</p>
            <p><AiOutlineLinkedin /> https://www.linkedin.com/in/debora-seo</p>
            <p>Ironhack Bootcamp Final Project 2021</p>    
        </div>
    );
};

export default Footer;