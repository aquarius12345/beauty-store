import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Slider.css';
import { BsChevronCompactRight, BsChevronCompactLeft } from 'react-icons/bs';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';


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
            <h2>{props.title}</h2>
            <div className='rec' ref={rec}>
                    <div className='slider-list'>
                        {newData.map(el => 
                        
                        <div className='slider-card'>
                            <Link to={`product-detail/${el._id}`} key={el._id}>
                            {props.spantext ? <p className='p'>{props.spantext}</p> : ''}
                            <img src={el.image_one} alt='product-img'/>
                            <h6>{el.brand}</h6>
                            <p>{el.name}</p>
                            </Link>
                        </div>
                        )}
                    </div>       
            </div>
            <div className='slider-buttons'>
                <button className='btn-left' onClick={handleLeftClick}><FiChevronLeft/></button>
                <button className='btn-right' onClick={handleRightClick}><FiChevronRight/></button>
            </div>
        </div>
    );
};

export default Slider;