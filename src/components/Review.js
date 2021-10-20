import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../configs/api';
import './Review.css';
import { CgGirl } from 'react-icons/cg';
import { RiCloseFill } from 'react-icons/ri';


const Review = (props) => {
    //console.log('props', props);
    const [reviewsList, setReviewsList] = useState([]);
    const [mod, setMod] = useState(false);
    const [review, setReview] = useState('');
    //console.log('review',review);
    const [error, setError] = useState('');
    const token = localStorage.getItem('token');


    useEffect(() => {
        getReviews();
    }, [])

    const getReviews = async() => {
        try {
            const result = await api.get(`/review/${props.id}`);
            console.log('review result', result.data);
            setReviewsList(result.data);
        } catch(error) {
            console.error(error);
            setError(error.response.data.message);
        };
    };

    useEffect(() => {
        getReviews();
    }, [props.id]);

    const toggle = () => {
        setMod(!mod);
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        
        try {
            const result = await api.post(`/review/${props.id}`, { review });
            console.log('review submit', review);
            setReview('');
            getReviews();
            setMod(false);
        } catch(error) {
            console.error(error.response);
        }
    };

    return (
        <div>
            <div className='review'>
                   
                <article>
                    <h4>Reviews {'(' + reviewsList.length + ')'}</h4>
                    <button onClick={toggle}>Write a Review</button>
                </article>

                {reviewsList ? (
                  <ul className='review-container'>
                    {reviewsList.map((el) => 
                    
                    <li kew={el._id}>
                        <p>"{el.review}"</p>
                        <span><CgGirl size={'20'}/>  {el.user_id.name}</span>
                        <hr/>
                    </li>)}
                  </ul>) : null}
                  
                <div  className={ mod ? 'dark' : '' }>
                    {!mod ? '' : ( <>
                    {token ? (<>
                        
                        <form className='m' onSubmit={handleSubmit}>
                            <button id='close-btn' onClick={toggle}><RiCloseFill/></button>
                            
                            <h5 style={{fontWeight: 'bold'}}>Please share your experience</h5>
                            <p>Your feedback will help other shoppers make good choices, and we'll use it to improve our products.</p>
                            <div>
                                <p>Review *</p> 
                                <textarea value={review} onChange={(e)=> setReview(e.target.value)}/>
                            </div>
                            <p style={{fontSize: '0.8rem'}}>Make your review great: Describe what you liked, what you didn’t like, and other key things shoppers should know.</p>
                            <button type='submit'>SUBMIT</button>  
                            
                            
                        </form></>) : (<>
                        <div className='go-login'>
                        <button id='close-btn' onClick={toggle}><RiCloseFill/></button>
                        <h5>Please login to write a review.</h5>
                        <Link to='/signup'>Login</Link>
                    </div>
                    </>)
                }
                    </>)}          
                </div>            
                
            </div>
            
        </div>
    );
};

export default Review;