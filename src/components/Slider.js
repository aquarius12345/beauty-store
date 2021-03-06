import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Slider.css';
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
            {newData && (<>
                <div className='rec' ref={rec}>
                    <div className='slider-list'>
                        {newData.map(el => 
                        <div className='slider-card'>
                            <Link to={`product-detail/${el._id}`} key={el._id}>
                            <img src={el.image_one} alt='product-img'/>
                            <h6>{el.brand}</h6>
                            <p>{el.name.slice(0, 40)}</p>
                            </Link>
                        </div>
                        )}
                    </div>       
                </div>
                <div className='slider-buttons'>
                    <button className='btn-left' onClick={handleLeftClick}><FiChevronLeft/></button>
                    <button className='btn-right' onClick={handleRightClick}><FiChevronRight/></button>
                </div>
            </>)}

        </div>
    );
};

export default Slider;