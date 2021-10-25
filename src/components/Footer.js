import React from 'react';
import './Footer.css';
import { AiOutlineLinkedin } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className='footer'>
            <span>Created by Debora Seo</span>
            <a href='https://www.linkedin.com/in/debora-seo/' target='blank'><AiOutlineLinkedin size='20'/> https://www.linkedin.com/in/debora-seo</a>
            <span>Ironhack Bootcamp Final Project 2021</span>    
        </div>
    );
};

export default Footer;