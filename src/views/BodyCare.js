import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../configs/api';
import './BodyCare.css';
import BodyFace from '../components/BodyFace';


const initialState = {
    btnOne: false,
    btnTwo: false,
    btnThree: false
}

const BodyCare = () => {

    const [products, setProducts] = useState([]);
    const [button, setButton] = useState(initialState);
    const [checked, setChecked] = useState(null);
    console.log('checked', checked)
    
    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async() => {
        try {
            const result = await api.get('/product/all');
            setProducts(result.data);
            
        } catch(error) {
            console.error(error.response);
        };
    };

    const handleButton = (key, value) => {
        setButton({...button, [key]: !value})
    }

    const filterBrand = products.map(el => el.brand);
    const byBrand = filterBrand.filter((el, index) => filterBrand.indexOf(el) === index).slice(1, 7);


    return (
        // rendering Filters
        <div className='page-margin'>
            <section className='filter'>
                <ul className='filter-list'>
                    <Link to='/bodycare' id='bodycare-link'>Body Care</Link>
                    <h6>Filters</h6>
                    <li>
                        <div className='list'>
                            <Link to="#">By Skin Type</Link>
                            <button onClick={() => handleButton('btnOne', button.btnOne)}>+</button>
                        </div>
                        {!button.btnOne ? '' : 
                            <ul>
                                <li><Link to='/bodycare?name=oily'>Oily</Link></li>
                                <li><Link to='/bodycare?name=dry'>Dry</Link></li>
                                <li><Link to='/bodycare?name=sensitive'>Sensitive</Link></li>
                                <li><Link to='/bodycare?name=all'>Normal</Link></li>
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
                            {byBrand.map(el =><li><Link to={`/bodycare?brand=${el}`}>{el}</Link></li>)}
                            </ul>
                        }
                    </li>
                    <hr/>

                    <li>
                        <div className='list'>
                            <Link to="#"> By Rating</Link>
                            <button onClick={() => handleButton('btnThree', button.btnThree)}>+</button>
                        </div>
                        {!button.btnThree ? '' : 
                        <ul className='rating-check'>
                            <li>
                                <input type='radio' name='rating' value='5' onChange={(e) => setChecked(e.target.value)}/>
                                <span> ♥♥♥♥♥ 5.0</span>
                            </li>
                            <li>
                                <input type='radio' name='rating' value='4' onChange={(e) => setChecked(e.target.value)}/>
                                <span> ♥♥♥♥♡ 4.0</span>
                            </li>
                            <li>
                                <input type='radio' name='rating' value='3' onChange={(e) => setChecked(e.target.value)}/>
                                <span> ♥♥♥♡♡ 3.0</span>
                            </li>
                            <li>
                                <input type='radio' name='rating' value={null} onChange={(e) => setChecked(e.target.value)}/>
                                <span> All Ratings</span>
                            </li>
                        </ul>
                        }
                    </li>
                    <hr/>
                </ul>
            </section>

            <BodyFace  category='body' radio={checked}/>
        </div>
    );
};

export default BodyCare;



