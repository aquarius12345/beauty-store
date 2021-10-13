import React, { useState, useEffect } from 'react';
import api from '../configs/api';
import './Review.css';
import { CgGirl } from 'react-icons/cg';


const Review = (props) => {
    //console.log('props', props);
    const [reviews, setReviews] = useState([]);
    const [mod, setMod] = useState(false);

    useEffect(() => {
        getReviews();
    }, [])

    const getReviews = async() => {
        try {
            const result = await api.get(`/review/${props.id}`);
            console.log('review result', result.data);
            setReviews(result.data);
        } catch(error) {
            console.error(error);
        };
    };

    useEffect(() => {
        getReviews();
    }, [props.id]);

    const toggle = () => {
        setMod(!mod);
    };

    return (
        <div>
            <div className='review'>
                   
                <article>
                    <h4>Reviews {'(' + reviews.length + ')'}</h4>
                    <button onClick={toggle}>Write a Review</button>
                </article>

                {reviews ? (
                  <ul className='review-container'>
                    {reviews.map((el) => 
                    
                    <li kew={el._id}>
                        <p>"{el.review}"</p>
                        <span><CgGirl size={'20'}/>  {el.user_id.name}</span>
                        <hr/>
                    </li>)}
                  </ul>) : null}
                  
                <div className='dark'>
                    {!mod ? '' : (
                        <form className='m'>
                        <button id='close-btn' onClick={toggle}>X</button>
                        <h5>Please share your experience</h5>
                        <p>Your feedback will help other shoppers make good choices, and we'll use it to improve our products.</p>
                        <div>
                            <p>Review *</p> 
                            <textarea/>
                        </div>
                        <p style={{fontSize: '0.8rem'}}>Make your review great: Describe what you liked, what you didn’t like, and other key things shoppers should know.</p>
                        <button type='submit'>SUBMIT</button>  
                    </form>
                    )}          
                </div>            
                
            </div>
            
        </div>
    );
};

export default Review;