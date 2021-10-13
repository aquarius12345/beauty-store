import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './BodyFace.css';


const initialState = {
    btnOne: false,
    btnTwo: false,
    btnThree: false
}

const BodyFace = (props) => {
    const filtered = props.data.filter(el => el.category === 'body');
    const [button, setButton] = useState(initialState)

    
    const handleButton = (key, value) => {
        setButton({...button, [key]: !value})
    }

    const heart = '♥';
    const emptyheart = '♡'

    const rating = (number) => {
        return heart.repeat(number).padEnd(5, emptyheart);
    }
    
    
    return(
        <div className='page-margin'>
            {/* ---------------filter section -----------*/}
            <section className='filter'>
                <ul className='filter-list'>
                    <h2>Body Care</h2>
                    <h6>Filters</h6>
                    <li>
                        <div className='list'>
                            <Link to="#">By Skin Type</Link>
                            <button onClick={() => handleButton('btnOne', button.btnOne)}>+</button>
                        </div>
                        {!button.btnOne ? '' : 
                            <ul>
                                {/* <li><Link to='/bodycare/skin_type/oily'>Oily</Link></li> */}

                                <li><Link to='/bodycare/oily'>Oily</Link></li>
                                <li><Link to='/bodycare/dry'>Dry</Link></li>
                                <li><Link to='/bodycare/sensitive'>Sensitive</Link></li>
                                <li><Link to='bodycare/all'>Normal</Link></li>
                            </ul>
                        }    
                    </li>
                    <hr/>

                    <li>
                        <div className='list'>
                            <Link to="#">By Brand</Link>
                            <button onClick={() => handleButton('btnTwo', button.btnTwo)}>+</button>
                        </div>
                        {!button.btnTwo ? '' : 
                            <ul>
                            <li>Oily</li>
                            <li>Dry</li>
                            <li>Sensitive</li>
                            <li>Normal</li>
                        </ul>
                        }
                    </li>
                    <hr/>

                    <li>
                        <div className='list'>
                            <Link to="#"> By Price</Link>
                            <button onClick={() => handleButton('btnThree', button.btnThree)}>+</button>
                        </div>
                        {!button.btnThree ? '' : 
                            <ul>
                            <li>Oily</li>
                            <li>Dry</li>
                            <li>Sensitive</li>
                            <li>Normal</li>
                        </ul>
                        }
                    </li>
                    <hr/>
                </ul>
            </section>
            {/* -------------Rendering Products section------------- */}
            <section className='products-part'>
                <div className='result'>
                    <p>{'('+ filtered.length +')'} Results</p>
                    <span>Sort By</span>
                </div>

                <div>
                    <ul className='the-ul'>
                    {filtered.map(el => <li key={el._id} className='prd-card'>
                        <Link to={`/product-detail/${el._id}`}>
                        <img src={el.image_one} alt='body product'/>
                        <div>
                            <p style={{fontWeight: 'bold'}}>{el.brand}</p>
                            <p style={{fontSize: '0.9rem'}}>{el.name}</p>
                            <p>{rating(el.rating)}</p>
                            <p style={{fontWeight: 'bold'}}>{'$'+ (el.price / 100) + '.00'}</p>
                        </div>
                        </Link>
                    </li>)}
                    </ul>
                </div>
                
            </section>
        
        </div>
    );
};

export default BodyFace;