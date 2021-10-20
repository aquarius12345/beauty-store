import React from 'react';
import './Footer.css';
import { AiOutlineLinkedin } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className='footer'>
            <p>By Debora Seo</p>
            <p><AiOutlineLinkedin /> https://www.linkedin.com/in/debora-seo</p>
            <p>For Ironhack Final Project 2021</p>
            
        </div>
    );
};

export default Footer;