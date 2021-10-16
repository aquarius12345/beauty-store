import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import api from '../configs/api';
import './FaceCare.css';
import BodyFace from '../components/BodyFace';


const initialState = {
    btnOne: false,
    btnTwo: false,
    btnThree: false
}

const FaceCare = () => {

    const [products, setProducts] = useState([]);
    const [button, setButton] = useState(initialState);
    const [checked, setChecked] = useState(null);
    
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
        <div className='page-margin'>
            <section className='filter'>
                <ul className='filter-list'>
                    <Link to='/face-care' id='bodycare-link'>Face Care</Link>
                    <h6>Filters</h6>
                    <li>
                        <div className='list'>
                            <Link to="#">By Skin Type</Link>
                            <button onClick={() => handleButton('btnOne', button.btnOne)}>+</button>
                        </div>
                        {!button.btnOne ? '' : 
                            <ul>
                                <li><Link to='/face-care?name=oily'>Oily</Link></li>
                                <li><Link to='/face-care?name=dry'>Dry</Link></li>
                                <li><Link to='/face-care?name=sensitive'>Sensitive</Link></li>
                                <li><Link to='/face-care?name=all'>Normal</Link></li>
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
                            {byBrand.map(el =><li><Link to={`/face-care?brand=${el}`}>{el}</Link></li>)}
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
                            <ul>
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
                    {/* <hr/> */}
                </ul>
            </section>

            <BodyFace category='face' radio={checked}/>
        </div>
    );
};

export default FaceCare;



