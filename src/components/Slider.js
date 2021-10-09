import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Slider.css';


const Slider = (props) => {
    const newData = props.data.slice(8, 30);

    const rec = useRef(null);

    const handleLeftClick = (e) => {
        e.preventDefault();
        //console.log(rec.current.scrollLeft);
        //console.log(rec.current.offsetWidth);
        rec.current.scrollLeft -= rec.current.offsetWidth;
    }

    const handleRightClick = (e) => {
        e.preventDefault();

        rec.current.scrollLeft += rec.current.offsetWidth;
    }

    return (
        <div className='slider'>
            <h1>{props.title}</h1>
            <div className='rec' ref={rec}>
                    <div className='slider-list'>
                        {newData.map(el => 
                        <div className='slider-card' key={el._id}>
                            {props.spantext ? <p className='p'>{props.spantext}</p> : ''}
                            <img src={el.image_one} alt='product-img'/>
                            <h6>{el.brand}</h6>
                            <p>{el.name}</p>
                        </div>)}
                    </div>       
            </div>
            <div className='slider-buttons'>
                <button className='btn-left' onClick={handleLeftClick}>{'<'}</button>
                <button className='btn-right' onClick={handleRightClick}>{'>'}</button>
            </div>
        </div>
    );
};

export default Slider;