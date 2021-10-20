import React from 'react';
import './About.css';
import { AiOutlineLinkedin } from 'react-icons/ai';

const About = () => {
    return (
        <div>
            <div className='about'>
                <img src='https://res.cloudinary.com/dgzbojudn/image/upload/v1634747439/5733dd35-8ad1-4909-b083-b8952571d859_vqymql.jpg' alt='debora'/>
                <h5>Debora Seo</h5>
                <h6>Full Stack Web Developer</h6>
                <p><AiOutlineLinkedin /> https://www.linkedin.com/in/debora-seo</p>
                <br/>
                <p style={{textAlign:'start'}}>Thanks for visiting, this is my final Solo Project for Ironhack Web Development Bootcamp. I started coding the Back-end with Javascript, Express, Cors, JWT Token, 
                MongoDB, Mongoose and did tests with Insomnia. After that i created the Front-end, with React, Axios, CSS and HTML.
                </p>   
            </div>
        </div>
    ) ;  
};

export default About;

