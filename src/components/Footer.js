import React from 'react';
import './Footer.css';
import { AiOutlineLinkedin } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className='footer'>
            <a>Created by Debora Seo</a>
            <a href='https://www.linkedin.com/in/debora-seo/' target='blank'><AiOutlineLinkedin size='20'/> https://www.linkedin.com/in/debora-seo</a>
            <a>Ironhack Bootcamp Final Project 2021</a>    
        </div>
    );
};

export default Footer;